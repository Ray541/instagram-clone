import { Box, Flex, Text, VStack, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={5}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={13} fontWeight={"bold"} color={"white"}>
          Suggested for you
        </Text>
        <Text
          fontSize={13}
          fontWeight={"bold"}
          color={"gray"}
          _hover={{ color: "white" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser
        name="Den Abramov"
        followers={"554"}
        avatar={"https://bit.ly/den-abramov"}
      />
      <SuggestedUser
        name="Ryan Florence"
        followers={"672"}
        avatar={"https://bit.ly/den-abramov"}
      />
      <SuggestedUser
        name="Christian Nwamba"
        followers={"479"}
        avatar={"https://bit.ly/den-abramov"}
      />

      <Box fontSize={15} color={"white"} mt={5} alignSelf={"flex-start"}>
        &copy; Built By{" "}
        <Link
          href="https://github.com/Ray541"
          target="_blank"
          color={"purple.100"}
          _hover={{ color: "purple.300" }}
          transition={"all .1s ease"}
        >
          | Pranav Rao |
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
