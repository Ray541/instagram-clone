import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import useFollowAndUnFollowUser from "../../hooks/useFollowAndUnFollowUser";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

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
        <Link to={`${user.username}`}>
          <Avatar src={user.profilePicURL} size={"md"} />
        </Link>
        <VStack spacing={2}>
          <Link to={`${user.username}`}>
            <Box fontSize={12} fontWeight={"bold"} _hover={{ color: "grey" }}>
              {user.username}
            </Box>
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
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      )}
    </Flex>
  );
};

export default SuggestedUser;
