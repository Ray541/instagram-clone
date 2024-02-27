import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constants";

const Search = () => {
  return (
    <>
      <Tooltip
        hasArrow
        label={"Search"}
        placement="right"
        ml={1}
        openDelay={200}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={5}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={5}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <SearchLogo />
          <Box color={"white"} display={{ base: "none", md: "block" }}>
            Search
          </Box>
        </Flex>
      </Tooltip>
    </>
  );
};

export default Search;
