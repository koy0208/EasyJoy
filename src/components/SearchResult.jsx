import React, {useState} from 'react';
import ProductCard from './ProductCard';
import {
    VStack,
  } from "@chakra-ui/react";

const SearchResult = ({ results }) => {
    return (
      <VStack spacing={4} align="stretch">
        {results.map((item) => (
          <ProductCard item={item} key={item.id}/>
        ))}
      </VStack>
    );
  };

export default SearchResult;


