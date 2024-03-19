import { Box, Link, Tooltip } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <Tooltip
      hasArrow
      label={"Home"}
      placement="right"
      ml={1}
      openDelay={200}
      display={{ base: "block", md: "none" }}
    >
      <Link
        display={"flex"}
        to={"/"}
        as={RouterLink}
        alignItems={"center"}
        gap={5}
        _hover={{ bg: "whiteAlpha.400" }}
        _focus={{ boxShadow: "unset", bg: "whiteAlpha.400" }}
        borderRadius={5}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <AiFillHome size={25} color="#F1F2F2" />
        <Box color={"white"} display={{ base: "none", md: "block" }}>
          Home
        </Box>
      </Link>
    </Tooltip>
  );
};

export default Home;
