import {React, useState, useEffect} from 'react';
// import ProductCard from './ProductCard';
import SearchResult from './SearchResult';
import useRanking from '../hooks/useRanking';
import { useSearchParams } from 'react-router-dom';
import { Heading, Box, Center, Container, Tab, TabList, TabPanels, Tabs, Spinner, Text, Alert, AlertIcon } from "@chakra-ui/react";

const CategoryPage = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const [activeTab, setActiveTab] = useState("楽天");
  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };
  const [searchParams] = useSearchParams();
  const queryParamList = ["keyword", "category", "min_price", "max_price", "sort", "page"];
  const params = queryParamList.reduce((acc, param) => {
    if (searchParams.has(param)) {
      acc[param] = searchParams.get(param);
    }
    return acc;
  }, {});

  const { results, error , loading} = useRanking(params);
  useEffect(() => {
    setActiveTab("楽天");
  }, [results, error, loading]);

  if (loading) {
    return <Center><Spinner /></Center>;
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        エラーが発生しました。再度お試しください。
      </Alert>
    );
  }
  return (
    <div>
      <Center>
      <Box as="h2" fontSize="xl" fontWeight="bold" textAlign="center">
        amazon・楽天市場総合
        <br />
        {params.category}のおすすめランキング{currentYear}年{currentMonth}月版
      </Box>
      </Center>
      <Container maxW="container.xl">
          <Tabs onChange={(index) => handleTabClick(index === 0 ? "楽天" : "amazon")} my={4} isFitted>
            <TabList>
              <Tab>楽天</Tab>
              <Tab>amazon</Tab>
            </TabList>
          <TabPanels>
              {results.length > 0 ? (
              <SearchResult results={results.filter((result) => result.shop === activeTab)} />
            ) : (
              <p>検索結果がありません。</p>
            )}
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );  
};

export default CategoryPage;