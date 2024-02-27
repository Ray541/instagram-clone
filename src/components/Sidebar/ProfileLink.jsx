import { Avatar, Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const ProfileLink = () => {
  const authUser = useAuthStore((state) => state.user);

  return (
    <Tooltip
      hasArrow
      label={"Profile"}
      placement="right"
      ml={1}
      openDelay={200}
      display={{ base: "block", md: "none" }}
    >
      <Link
        display={"flex"}
        to={`/${authUser?.username}`}
        as={RouterLink}
        alignItems={"center"}
        gap={5}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={5}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <Avatar size={"sm"} src={authUser?.profilePicURL || ""} />
        <Box color={"white"} display={{ base: "none", md: "block" }}>
          Profile
        </Box>
      </Link>
    </Tooltip>
  );
};

export default ProfileLink;
