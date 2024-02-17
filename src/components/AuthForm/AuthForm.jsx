import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  VStack,
  Image,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleAuth = () => {
    if (inputs.email === "" || inputs.password === "") {
      alert("Please fill all the fields");
      return;
    }
    navigate("/");
    setInputs({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={5} padding={5}>
        <VStack spacing={5}>
          <Image src="/logo1.png" alt="Instagram" />
          <Input
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            placeholder="Email"
            _placeholder={{ color: "purple.100" }}
            fontSize={15}
            type="email"
          />
          <Input
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            placeholder="Password"
            _placeholder={{ color: "purple.100" }}
            fontSize={15}
            type="password"
          />

          {!isLogin && (
            <Input
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              placeholder="Confirm Password"
              _placeholder={{ color: "purple.100" }}
              fontSize={15}
              type="password"
            />
          )}

          <Button
            colorScheme="purple"
            size={"sm"}
            w={"full"}
            onClick={handleAuth}
          >
            {isLogin ? "Log In" : "Sign Up"}
          </Button>

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
