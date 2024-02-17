import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const PostHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src="img1.png" alt="User Profile Pic" />
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          Clear River
          <Box color={"gray.500"}>• 1w</Box>
        </Flex>
      </Flex>
      <Box>
        <Text
          fontSize={12}
          color={"blue.500"}
          cursor={"pointer"}
          p={"1.5"}
          borderRadius={5}
          _hover={{ color: "white", bg: "whiteAlpha.300" }}
          transition={"all 0.2s ease"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
