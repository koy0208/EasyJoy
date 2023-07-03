import React from 'react';
import {Container, HStack, VStack, Center, Box, Image} from '@chakra-ui/react';
import MarkdownComponent from "./MarkdownComponent"

const PrivacyPage = () => {

  return (
    <Box className="my-custom-class" padding="4">
      <MarkdownComponent markdownFile='privacy_policy.md' />
    </Box>
  );
};

export default PrivacyPage;
