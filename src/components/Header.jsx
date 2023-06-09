import React from 'react';
import { Box, Flex, Container, HStack, VStack, Center} from '@chakra-ui/react';
import SearchBox from './SearchBox';
import RankingHeader from './RankingHeader';
import SearchHeader from './SearchHeader';

const Header = () => {

  return (
    <>
    <Flex as="header" p={1} border="solid" borderColor="gray.100">
        <Container maxW="container.xl">
            <SearchHeader />
        </Container>
    </Flex>
    <RankingHeader/>
    </>
  );
};

export default Header;
