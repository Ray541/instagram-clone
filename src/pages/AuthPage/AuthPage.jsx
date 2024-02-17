import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <>
      <Flex
        minH={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingX={1}
      >
        <Container maxW={"container.md"} paddingY={2}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
            <Box display={{ base: "none", md: "block" }}>
              <Image src="/auth.png" height={"100%"} alt="Auth Image" />
            </Box>

            <VStack spacing={5} align={"stretch"}>
              <AuthForm />
              <Box textAlign={"center"}>Get the App.</Box>
              <Flex gap={5} justifyContent={"center"}>
                <Image
                  src="/playstore.png"
                  height={"10"}
                  alt="Playstore Logo"
                  cursor={"pointer"}
                />
                <Image
                  src="/microsoft.png"
                  height={"10"}
                  alt="Microsoft Logo"
                  cursor={"pointer"}
                />
              </Flex>
            </VStack>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default AuthPage;
