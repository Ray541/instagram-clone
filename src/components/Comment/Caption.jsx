import { Avatar, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import useUserProfileStore from "../../store/userProfileStore";

const Caption = ({ post }) => {
  const userProfile = useUserProfileStore((state) => state.userProfile);

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
            fontSize={12}
            fontWeight={"bold"}
          >
            {userProfile.username}
          </Link>
          <Text fontSize={13}>{post.caption}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {timeAgo(post.createdAt)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Caption;
