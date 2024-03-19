import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/constants";

const Notifications = () => {
  return (
    <Tooltip
      hasArrow
      label={"Notifications"}
      placement="right"
      ml={1}
      openDelay={200}
      display={{ base: "block", md: "none" }}
    >
      <Flex
        alignItems={"center"}
        gap={5}
        _hover={{ bg: "whiteAlpha.400" }}
        _focus={{ boxShadow: "unset", bg: "whiteAlpha.400" }}
        borderRadius={5}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <NotificationsLogo />
        <Box color={"white"} display={{ base: "none", md: "block" }}>
          Notifications
        </Box>
      </Flex>
    </Tooltip>
  );
};

export default Notifications;
