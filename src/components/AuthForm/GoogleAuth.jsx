import { Flex, Image, Text } from "@chakra-ui/react";

const GoogleAuth = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      gap={{ base: "10px", md: "10px" }}
      cursor={"pointer"}
    >
      <Image w={7} src="/google.png" alt="Google Logo" />
      <Text
        color={"purple.100"}
        _hover={{ color: "purple.300" }}
        transition={"all 0.17s ease"}
      >
        Log in with google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
