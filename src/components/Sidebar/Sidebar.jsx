// import React from 'react'
import { Tooltip, Avatar, Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  InstagramLogo,
  InstagramMobileLogo,
  SearchLogo,
  NotificationsLogo,
  CreatePostLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const sideBarItems = [
    {
      icon: <AiFillHome size={25} color="#F5F5F5" />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notification",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} src="" />,
      text: "Profile",
      link: "/ProfilePage",
    },
  ];

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
            {sideBarItems.map((item, index) => (
              <Tooltip
                key={index}
                hasArrow
                label={item.text}
                placement="right"
                ml={1}
                openDelay={200}
                alignItems={"center"}
                justifyContent={"center"}
                display={{ base: "block", md: "none" }}
              >
                <Link
                  display={"flex"}
                  as={RouterLink}
                  to={item.link}
                  alignItems={"center"}
                  justifyContent={{ base: "center", md: "start" }}
                  gap={5}
                  p={2}
                  borderRadius={5}
                  w={"full"}
                  _hover={{ bg: "whiteAlpha.400" }}
                >
                  {item.icon}
                  <Box
                    display={{ base: "none", md: "block" }}
                    color={"whiteAlpha.800"}
                  >
                    {item.text}
                  </Box>
                </Link>
              </Tooltip>
            ))}
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
            <Link
              display={"flex"}
              as={RouterLink}
              to={"/auth"}
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
              <Box
                display={{ base: "none", md: "block" }}
                color={"whiteAlpha.800"}
              >
                Log Out
              </Box>
            </Link>
          </Tooltip>
        </Flex>
      </Box>
    </>
  );
};

export default Sidebar;
