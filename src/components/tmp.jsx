import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {
  VStack,
  Button,
  Collapse,
  Text,
  IconButton,
  Input,
  FormControl
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Temp = () => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Button variantcolor="blue" onClick={handleToggle}>
        Toggle
      </Button>
      <Collapse in={show}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </Collapse>
    </>
  );
};
export default Temp;


// https://search/ミルク/?filter=fs&max=10000&s=11

