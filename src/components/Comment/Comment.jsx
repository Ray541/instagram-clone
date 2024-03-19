import {
  Avatar,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  Link,
} from "@chakra-ui/react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";
import { Link as RouterLink } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";

const Comment = ({ comment }) => {
  const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy);

  if (isLoading) return <CommentSkeleton />;
  return (
    <Flex gap={4}>
      <Link
        as={RouterLink}
        to={`/${userProfile.username}`}
        _focus={{ boxShadow: "unset", transform: "scale(1.025)" }}
      >
        <Avatar src={userProfile.profilePicURL} size={"sm"} />
      </Link>
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Link
            as={RouterLink}
            to={`/${userProfile.username}`}
            _hover={{ color: "grey" }}
            _focus={{ boxShadow: "unset", color: "grey" }}
            color={"whiteAlpha.800"}
            fontWeight={"bold"}
            fontSize={12}
          >
            {userProfile.username}
          </Link>
          <Text fontSize={13}>{comment.comment}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {timeAgo(comment.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;

const CommentSkeleton = () => {
  return (
    <Flex gap={4} w={"full"} alignItems={"center"}>
      <SkeletonCircle h={10} w="10" />
      <Flex gap={1} flexDir={"column"}>
        <Skeleton height={2} width={100} />
        <Skeleton height={2} width={50} />
      </Flex>
    </Flex>
  );
};
