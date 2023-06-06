import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Input,
  InputGroup,
  IconButton,
  FormControl,
  VStack,
  HStack,
  Select,
  Collapse,
  Button,
  Box,
  Text,
  Image,
  Center
} from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';



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

  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

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
      <Box mb={4}>
        <Center>
          <HStack spacing={4}>
          <Image
              // width="80px"
              height="50px"
              objectFit="contain"
              src="twitter_header_photo_1.png" // ここにロゴのURLまたはパスを指定します
              alt="Logo"
            />
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              variant='outline'
              colorScheme='teal'
              size="sm"
              _hover={{ bg: 'teal.400' }}
              onClick={handleToggle}
            />
          </HStack>
        </Center>
      </Box>
      <Collapse in={show}>
        <VStack width="100%" spacing={2} >
          {/* <InputGroup> */}
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
          {/* </InputGroup> */}
        </VStack>
      </Collapse>
    </form>
  );
};

export default SearchBox;