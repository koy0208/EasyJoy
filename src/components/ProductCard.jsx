import React, {useState} from 'react';
import {
    Box,
    VStack,
    HStack,
    Image,
    Text,
    Link,
    Badge,
    useBreakpointValue,
    Button,
    Collapse,
    Skeleton,
    LinkBox,   // Import LinkBox
    LinkOverlay,   // Import LinkOverlay
  } from "@chakra-ui/react";

const ProductCard = ({ item }) => {
  const imageSize = useBreakpointValue({ base: "100px", md: "100px" });
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  let bgColor;
    switch(item.ranking) {
      case "1":
        bgColor = "yellow.500";
        break;
      case "2":
        bgColor = "teal.500";
        break;
      case "3":
        bgColor = "purple.500";
        break;
      default:
        bgColor = "gray.500";
        break;
    }
    return (
      <LinkBox as="article"> {/* Use LinkBox instead of Box */}
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={0}>
          <HStack spacing={4} p={1}>
          {item.ranking > 0  && (
            <Box
            minHeight="20px" // 高さを20pxに設定
            minWidth="20px" // 幅を20pxに設定
            fontSize="0.8em"
            bgColor={bgColor}
            borderRadius="full"
            color="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontWeight="bold">{item.ranking}</Text>
          </Box>
          )}
            <Box boxSize={imageSize}> 
              <Skeleton boxSize={imageSize} isLoaded={item.image}>
                <Image
                  boxSize={imageSize}
                  objectFit="cover"
                  src={item.image}
                  alt={item.title}
                />
              </Skeleton>
            </Box>
            <VStack align="start" spacing={2}>
              <Badge variant='outline' colorScheme={item.shop==="楽天" ? "red" : "twitter"}  fontSize="0.8em">
                {item.shop}
              </Badge>
              <Text fontWeight="bold" fontSize="xs" noOfLines={2}>
                <LinkOverlay href={item.url}>{item.title}</LinkOverlay>  {/* Use LinkOverlay instead of Link */}
              </Text>
              <Text fontSize="sm" color="teal" fontWeight="bold">
                {item.price.toLocaleString()}円
              </Text>
              {item.shop === '楽天' && (
              <Text fontSize="xs" color="gray.500" fontWeight="bold">
                +{item.item_point.toLocaleString()}ポイント({item.point_rate}倍)
              </Text>
              )}
            {item.description.length > 0 && (
              <>
                <Button variantcolor="blue" onClick={handleToggle} size='xs' fontSize="xs">
                  商品詳細
                </Button>
                {show ? (
                  <Text fontSize="xs" noOfLines={5}>
                    {item.description}
                  </Text>
                ) : (
                  <Text fontSize="xs" noOfLines={1}>
                    {item.description}
                  </Text>
                )}
              </>
            )}
            </VStack>
          </HStack>
        </Box>
      </LinkBox>
    );
  };

export default ProductCard;


