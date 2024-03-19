import { Avatar, Box, Button, Flex, VStack, Link } from "@chakra-ui/react";
import useFollowAndUnFollowUser from "../../hooks/useFollowAndUnFollowUser";
import useAuthStore from "../../store/authStore";
import { Link as RouterLink } from "react-router-dom";

const SuggestedUser = ({ user, setUser }) => {
  const { isFollowing, isUpdating, handleFollowUser } =
    useFollowAndUnFollowUser(user.uid);
  const authUser = useAuthStore((state) => state.user);

  const onFollowUser = async () => {
    await handleFollowUser();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser],
    });
  };

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Link
          as={RouterLink}
          to={`${user.username}`}
          transition={"all .2s ease"}
          _hover={{ transform: "scale(1.025)" }}
          _focus={{ boxShadow: "unset", transform: "scale(1.05)" }}
        >
          <Avatar src={user.profilePicURL} size={"md"} />
        </Link>
        <VStack spacing={2}>
          <Link
            as={RouterLink}
            to={`${user.username}`}
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "grey" }}
            _focus={{ boxShadow: "none", color: "grey" }}
          >
            {user.username}
          </Link>
          <Box fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            {user.followers.length} followers
          </Box>
        </VStack>
      </Flex>
      {authUser.uid != user.uid && (
        <Button
          fontSize={13}
          p={2}
          colorScheme="gray"
          color={"purple.300"}
          h={"max-content"}
          onClick={onFollowUser}
          isLoading={isUpdating}
          _focus={{ boxShadow: "none", bg: "whiteAlpha.300" }}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
