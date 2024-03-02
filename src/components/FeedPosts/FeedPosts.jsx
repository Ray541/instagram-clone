import {
  Container,
  VStack,
  Skeleton,
  Flex,
  SkeletonCircle,
  Box,
  Text,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2].map((index) => (
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

      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}
      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"lg"} color={"purple.400"}>
            Daaam. Looks like you don&apos;t have any{" "}
            <b style={{ fontSize: "30px" }}>
              <i>f.r.i.e.n.d.s</i>
            </b>
          </Text>
          <Text fontSize={"lg"} color={"purple.400"}>
            First go Make Some 👍
          </Text>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
