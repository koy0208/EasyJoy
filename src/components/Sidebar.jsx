import React from 'react';
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Link,
  VStack
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const baseURL = "http://localhost:3000";


const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody>
              {/* Add your navigation links here */}
              <VStack align="start">
                <Link href={`${baseURL}/home`} >
                  ホーム
                </Link>
                <Link href={`${baseURL}/privacy_policy`} >
                  プライバシーポリシー
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Sidebar;
