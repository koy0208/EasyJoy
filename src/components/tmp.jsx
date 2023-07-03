import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {
  VStack,
  Button,
  Collapse,
  Text,
  IconButton,
  Input,
  FormControl,
  Image
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Temp = () => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Image
              // width="80px"
              height="50px"
              objectFit="contain"
              src="twitter_header_photo_1.png" // ここにロゴのURLまたはパスを指定します
              alt="Logo"
      />
    </>
  );
};
export default Temp;


// https://search/ミルク/?filter=fs&max=10000&s=11

