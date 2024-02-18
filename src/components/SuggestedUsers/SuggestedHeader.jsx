import { Avatar, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = ({ avatar, username }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar size={"md"} src={avatar} alt="You" />
        <Text fontSize={13} fontWeight={400}>
          {username} ray_renalds
        </Text>
        <Link
          as={RouterLink}
          to={"/auth"}
          cursor={"pointer"}
          color={"purple.100"}
          fontSize={15}
          fontWeight={500}
          p={5}
          _hover={{ color: "purple.300" }}
          transition={"all .1s ease"}
        >
          Log Out
        </Link>
      </Flex>
    </Flex>
  );
};

export default SuggestedHeader;
