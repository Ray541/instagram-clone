import { Avatar, Flex, Text, Button, Link } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  const { handleLogout, loading } = useLogout();

  const authUser = useAuthStore((state) => state.user);

  if (!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link
          as={RouterLink}
          to={`${authUser.username}`}
          transition={"all .2s ease"}
          _hover={{ transform: "scale(1.025)" }}
          _focus={{ boxShadow: "unset", transform: "scale(1.05)" }}
        >
          <Avatar size={"md"} src={authUser.profilePicURL} alt="You" />
        </Link>
        <Link
          as={RouterLink}
          to={`${authUser.username}`}
          _hover={{ boxShadow: "unset", color: "whiteAlpha.700" }}
          _focus={{ boxShadow: "unset", color: "whiteAlpha.700" }}
        >
          <Text fontSize={13} fontWeight={400}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>
      <Button
        size={"xs"}
        _hover={{ bg: "whiteAlpha.300" }}
        _focus={{ boxShadow: "none", bg: "whiteAlpha.300" }}
        cursor={"pointer"}
        color={"purple.300"}
        fontSize={15}
        fontWeight={500}
        p={5}
        transition={"all .1s ease"}
        isLoading={loading}
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
