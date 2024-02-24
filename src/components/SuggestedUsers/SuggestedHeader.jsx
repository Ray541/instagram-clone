import { Avatar, Flex, Text, Button } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
  const { handleLogout, loading } = useLogout();

  const authUser = useAuthStore((state) => state.user);

  if (!authUser) return null;

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link to={`${authUser.username}`}>
          <Avatar size={"md"} src={auth.profilePicURL} alt="You" />
        </Link>
        <Link to={`${authUser.username}`}>
          <Text fontSize={13} fontWeight={400}>
            {authUser.username}
          </Text>
        </Link>
        <Button
          size={"xs"}
          background={"transparent"}
          _hover={{ background: "transparent", color: "purple.300" }}
          cursor={"pointer"}
          color={"purple.100"}
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
    </Flex>
  );
};

export default SuggestedHeader;
