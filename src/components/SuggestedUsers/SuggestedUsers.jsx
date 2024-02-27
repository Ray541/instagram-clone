import { Box, Flex, Text, VStack, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
const SuggestedUsers = () => {
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();

  if (isLoading) return null;
  return (
    <VStack py={8} px={6} gap={5}>
      <SuggestedHeader />

      {suggestedUsers.length !== 0 && (
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
      )}

      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} />
      ))}

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
