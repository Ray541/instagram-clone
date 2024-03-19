import {
  Avatar,
  Box,
  Flex,
  SkeletonCircle,
  Button,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
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
          <Link
            as={RouterLink}
            to={`/${creatorProfile.username}`}
            transition={"all .2s ease"}
            _hover={{ transform: "scale(1.025)" }}
            _focus={{ boxShadow: "unset", transform: "scale(1.05)" }}
          >
            <Avatar src={creatorProfile.profilePicURL} alt="User Profile Pic" />
          </Link>
        ) : (
          <SkeletonCircle size="10" />
        )}

        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
          {creatorProfile ? (
            <Link
              as={RouterLink}
              to={`/${creatorProfile.username}`}
              _hover={{ color: "whiteAlpha.600" }}
              _focus={{ boxShadow: "unset", color: "whiteAlpha.600" }}
            >
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
          // size={"xs"}
          bg={"transparent"}
          fontSize={14}
          color={"purple.500"}
          cursor={"pointer"}
          p={3.5}
          borderRadius={4}
          _hover={{ color: "white", bg: "whiteAlpha.300" }}
          _focus={{ boxShadow: "unset", color: "white", bg: "whiteAlpha.300" }}
          transition={"all 0.2s ease"}
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
