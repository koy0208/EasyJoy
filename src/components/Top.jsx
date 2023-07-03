import React from 'react';
import {Container, HStack, VStack, Center, Box, Image} from '@chakra-ui/react';
import SearchBox from './SearchBox';

const Top = () => {

  return (
    <>
    <Center>
    <VStack p={5}>
    <Image
          width="30%"
          //height="50px"
          objectFit="contain"
          src="twitter_header_photo_1.png" // ここにロゴのURLまたはパスを指定します
          alt="Logo"
        />
    <Box as="h2" fontSize="xl" fontWeight="bold" textAlign="center">
    amazon・楽天市場
    <br />
    総合検索・ランキングサイト
    </Box>
    </VStack>
    </Center>
      <Container maxW="container.xl">
          <SearchBox />
      </Container>
    </>
  );
};

export default Top;
