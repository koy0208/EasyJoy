import React from 'react';
import { Header, Flex, Container, HStack, Heading, Center} from '@chakra-ui/react';
import CategoryButton from './CategoryButton';

const RankingHeader = () => {
    const categories = [
        "チャイルドシート",
        "抱っこ紐",
        "ベビーカー",
        "ベビーサークル",
        "ベビーベッド",
        "おむつ",
        "セレモニードレス",
    ];

  return (
    <>
    <Flex as="header" p={4} border="solid" borderColor="gray.100">
        <Container maxW="container.xl">
            <Center>
            <Heading as='h2' size="sm">人気ランキング</Heading>
            </Center>
            <HStack spacing={2} overflowX="auto" m={2}>
                {categories.map((category, index) => (
                <CategoryButton key={index} category={category}/>
                ))}
            </HStack>
        </Container>
    </Flex>
    </>
  );
};

export default RankingHeader;
