import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const ProfileTabs = () => {
  return (
    <Flex
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
      textTransform={"uppercase"}
      fontWeight={"bold"}
    >
      <Flex
        borderTop={"1px solid white"}
        alignItems={"center"}
        padding={3}
        gap={1}
        cursor={"pointer"}
      >
        <Box fontSize={20}>
          <BsGrid3X3Gap />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Posts
        </Text>
        <Text></Text>
      </Flex>
      <Flex alignItems={"center"} padding={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsBookmark />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Saved
        </Text>
        <Text></Text>
      </Flex>
      <Flex alignItems={"center"} padding={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <AiOutlineHeart />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Likes
        </Text>
        <Text></Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
