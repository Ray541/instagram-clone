import { Avatar, Box, Flex, SkeletonCircle, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollowAndUnFollowUser from "../../hooks/useFollowAndUnFollowUser";
import { timeAgo } from "../../utils/timeAgo";

const PostHeader = ({ post, creatorProfile }) => {
  const { isUpdating, isFollowing, handleFollowUser } =
    useFollowAndUnFollowUser(post.createdBy);
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        {creatorProfile ? (
          <Link to={`/${creatorProfile.username}`}>
            <Avatar src={creatorProfile.profilePicURL} alt="User Profile Pic" />
          </Link>
        ) : (
          <SkeletonCircle size="10" />
        )}

        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {creatorProfile ? (
            <Link to={`/${creatorProfile.username}`}>
              {creatorProfile.username}
            </Link>
          ) : (
            <SkeletonCircle width={"100px"} h={"10px"} />
          )}

          <Box color={"gray.500"}>• {timeAgo(post.createdAt)}</Box>
        </Flex>
      </Flex>
      <Box>
        <Button
          size={"xs"}
          bg={"transparent"}
          fontSize={12}
          color={"purple.500"}
          cursor={"pointer"}
          p={"1.5"}
          borderRadius={5}
          _hover={{ color: "white", bg: "whiteAlpha.300" }}
          transition={"all 0.1s ease"}
          onClick={handleFollowUser}
          isLoading={isUpdating}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </Button>
      </Box>
    </Flex>
  );
};

export default PostHeader;
