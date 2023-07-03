import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Input,
  FormControl,
  VStack,
  HStack,
  Select,
  Button,
  Text,
} from '@chakra-ui/react';



const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [category, setCategory] = useState(null); // カテゴリーの状態を追加
  const [maxPrice, setMaxPrice] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [page, setPage] = useState(1);

  const categories = [
    { value: '全て', label: '全て' },
    { value: 'チャイルドシート', label: 'チャイルドシート' },
    { value: "ファッション", label: "ファッション"},
    { value: "シューズ", label: "シューズ"},
    { value: "ベビーカー", label: "ベビーカー"},
    { value: "抱っこ紐", label: "抱っこ紐"},
    { value: "寝具", label: "寝具"},
    { value: "ベッド", label: "ベッド"},
    { value: "インテリア", label: "インテリア"},
    { value: "おふろ・バス用品", label: "おふろ・バス用品"},
    { value: "おむつ・トイレ", label: "おむつ・トイレ"},
    { value: "ミルク・離乳食", label: "ミルク・離乳食"},
    { value: "その他", label: "その他"},
    // 他のカテゴリーを追加
  ];

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    const params = {
    ...(searchTerm && { keyword: searchTerm }),
    ...(category && { category }),
    ...(maxPrice && { max_price: maxPrice }),
    ...(minPrice && { min_price: minPrice }),
    ...(page && { page }),
  };
    navigate(`/search?${new URLSearchParams(params).toString()}`);
  };
  return (
      <form onSubmit={handleSubmit}>
        <VStack width="100%" spacing={2} >
            <FormControl>
              <Input
                type="text"
                placeholder="商品を検索"
                // value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="sm"
              />
            </FormControl>
            <FormControl>
              <Select
                placeholder="カテゴリを選択"
                // value={category}
                onChange={(e) => setCategory(e.target.value)}
                size="sm"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <HStack>
              <Input 
                type="number"
                placeholder='最低価格' 
                // value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                size="sm"
              />
              <Text>~</Text>
              <Input 
                type="number"
                placeholder='最高価格' 
                // value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                size="sm"
              />
              </HStack>
            </FormControl>
            <Button
              type="submit"
              // icon={<SearchIcon />}
              variant='outline'
              colorScheme='teal'
              size="sm"
              _hover={{ bg: 'teal.400', color:"white"}}
            >
              検索
            </Button>
        </VStack>
      </form>
  );
};

export default SearchBox;