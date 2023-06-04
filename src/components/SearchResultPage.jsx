import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import useSearch from '../hooks/useSearch';
import SearchResult from './SearchResult';
import { Box, Button, Center, HStack, Spinner, Text, VStack, Alert, AlertIcon } from "@chakra-ui/react";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryParamList = ["keyword", "category", "min_price", "max_price", "sort", "page"];
  const params = queryParamList.reduce((acc, param) => {
    if (searchParams.has(param)) {
      acc[param] = searchParams.get(param);
    }
    return acc;
  }, {});

  const [page, setPage] = useState(params.page);
  const [shouldScroll, setShouldScroll] = useState(false);  // Add this line

  const handlePageChange = (direction) => {
    let newPage;
    if (direction === 'next') {
      newPage = Number(page) + 1;
    } else if (direction === 'prev') {
      newPage = Math.max(Number(page) - 1, 1);
    }
    setPage(newPage);
    const newParams = {
      ...params,
      page: newPage,
    };
    navigate(`/search?${new URLSearchParams(newParams).toString()}`);
    setShouldScroll(true);  // Add this line
  };

  
  const { results, error , loading} = useSearch(params);
  useEffect(() => {
    if (shouldScroll) {
      window.scrollTo(0, 0);
      setShouldScroll(false);
    }
  }, [results, shouldScroll]);  // Add this line

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
    <VStack spacing={4}>
      <Text fontSize="2xl">"{params.keyword}"で検索</Text>
      {results.length > 0 ? (
          <SearchResult results={results} />
        ) : (
          <Box p={4}>
            <Text>検索結果がありません。</Text>
          </Box>
        )}
      <Center>
        <HStack spacing={4}>
          <Button onClick={() => handlePageChange('prev')}>前のページ</Button>
          <Text>{page}</Text>
          <Button onClick={() => handlePageChange('next')}>次のページ</Button>
        </HStack>
      </Center>
    </VStack>
  );
};

export default SearchResultPage;