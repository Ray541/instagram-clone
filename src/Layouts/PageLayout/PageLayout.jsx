// import React from "react";
import { useLocation } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      <Flex>
        {/* Sidebar on the Left */}
        {pathname !== "/auth" ? (
          <Box w={{ base: "70px", md: "240px" }}>
            <Sidebar />
          </Box>
        ) : null}

        {/* Page Content on the Right */}
        <Box
          flex={1}
          w={{ base: "calc(100% - 70px", md: "calc(100% - 240px)" }}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default PageLayout;
