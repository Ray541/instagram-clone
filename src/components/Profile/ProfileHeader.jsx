import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar name="Ray" src="/img1.png" alt="Ray" />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={5}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "small", md: "large" }}>Ray</Text>
          <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
            <Button
              color={"purple.300"}
              _hover={{ bg: "whiteAlpha.500" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>

        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ base: 2, sm: 4 }}
        >
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              149
            </Text>
            Followers
          </Text>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              136
            </Text>
            Following
          </Text>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"flex-start"}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            Ray username
          </Text>
        </Flex>
        <Text fontWeight={"bold"}>Ray&apos;s Bio</Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
