import {
  Container,
  VStack,
  Skeleton,
  Flex,
  SkeletonCircle,
  Box,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useState, useEffect } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((index) => (
          <VStack key={index} gap={4} alignItems={"flex-start"} mb={2} p={2}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"380px"}>contents wrapped</Box>
            </Skeleton>
            <VStack alignItems={"start"} w={"full"}>
              <Flex alignItems={"center"} gap={5}>
                <SkeletonCircle size="7"></SkeletonCircle>
                <SkeletonCircle size="7"></SkeletonCircle>
              </Flex>
              <Skeleton height={"10px"} width={"100px"}></Skeleton>
              <Skeleton height={"10px"} width={"full"}></Skeleton>
              <Skeleton height={"10px"} width={"full"}></Skeleton>
              <Skeleton height={"30px"} width={"full"}></Skeleton>
            </VStack>
          </VStack>
        ))}
      <FeedPost username="clear_rivers" img="img1.png" avatar="img1.png" />
      <FeedPost username="philMiller" img="img2.png" avatar="img2.png" />
      <FeedPost username="lora_Craft" img="img3.png" avatar="img3.png" />
      <FeedPost username="methildaNewmen" img="img4.png" avatar="img4.png" />
    </Container>
  );
};

export default FeedPosts;
