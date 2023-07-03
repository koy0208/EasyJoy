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
import SearchBox from './SearchBox';



const SearchHeader = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const handleLogoClick = () => navigate("/home");
  return (
    <>
      <Box mb={4}>
        <Center>
          <HStack spacing={4}>
          <Image
              // width="80px"
              height="50px"
              objectFit="contain"
              src="twitter_header_photo_1.png" // ここにロゴのURLまたはパスを指定します
              alt="Logo"
              onClick={handleLogoClick} // ロゴクリック時のイベントハンドラを追加
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
        <SearchBox/>
      </Collapse>
    </>
  );
};

export default SearchHeader;