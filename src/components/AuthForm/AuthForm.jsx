import { useState } from "react";
import { Flex, Box, VStack, Image, Text } from "@chakra-ui/react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={5} padding={5}>
        <VStack spacing={5}>
          <Image src="/logo1.png" alt="Instagram" />

          {isLogin ? <Login /> : <Signup />}

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            w={"full"}
            gap={5}
            my={"1.5"}
          >
            <Box flex={1} h={"1px"} bg={"purple.100"} />
            <Text color={"white"}>OR</Text>
            <Box flex={1} h={"1px"} bg={"purple.100"} />
          </Flex>

          <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
        </VStack>
      </Box>

      <Box
        border={"1px solid gray"}
        borderRadius={5}
        padding={5}
        fontSize={{ base: "14px", md: "17px" }}
      >
        <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
          <Box>
            {isLogin ? "Don't have an Account?" : "Already have an Account!"}
          </Box>
          <Box
            cursor={"pointer"}
            color={"purple.100"}
            _hover={{ color: "purple.300" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
