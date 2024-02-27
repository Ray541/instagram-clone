import { Tooltip, Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const { handleLogout, loading } = useLogout();

  return (
    <>
      <Box
        h={"100dvh"}
        borderRight={"1px solid"}
        color={"whiteAlpha.300"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={{ base: 2, md: 4 }}
      >
        <Flex
          direction={"column"}
          alignItems={"center"}
          gap={10}
          w={"full"}
          h={"full"}
        >
          <Link as={RouterLink} to="/" display={{ base: "none", md: "block" }}>
            <InstagramLogo />
          </Link>
          <Link
            as={RouterLink}
            to="/"
            p={2}
            display={{ base: "block", md: "none" }}
          >
            <InstagramMobileLogo />
          </Link>

          <Flex direction={"column"} gap={5} cursor={"pointer"}>
            <SidebarItems />
          </Flex>

          {/* Log Out Button */}
          <Tooltip
            hasArrow
            label={"Log Out"}
            placement="right"
            ml={1}
            openDelay={200}
            alignItems={"center"}
            justifyContent={"center"}
            display={{ base: "block", md: "none" }}
          >
            <Flex
              onClick={handleLogout}
              alignItems={"center"}
              justifyContent={{ base: "center", md: "center" }}
              gap={5}
              p={2}
              borderRadius={5}
              w={"full"}
              _hover={{ bg: "whiteAlpha.400" }}
              mt={"auto"}
            >
              <BiLogOut size={25} color="#F5F5F5" />
              <Button
                display={{ base: "none", md: "block" }}
                variant={"ghost"}
                _hover={{ bg: "transparent" }}
                isLoading={loading}
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </Flex>
          </Tooltip>
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
