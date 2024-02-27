import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import EditProfile from "./EditProfile";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import useFollowAndUnFollowUser from "../../hooks/useFollowAndUnFollowUser";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isFollowing, isUpdating, handleFollowUser } =
    useFollowAndUnFollowUser(userProfile?.uid);

  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username;

  const visitingAnotherProfileAndAuth =
    authUser && authUser.username !== userProfile.username;

  return (
    <>
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
          <Avatar src={userProfile.profilePicURL} alt={userProfile.username} />
        </AvatarGroup>
        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
          <Flex
            gap={5}
            direction={{ base: "column", sm: "row" }}
            justifyContent={{ base: "center", sm: "flex-start" }}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={{ base: "small", md: "large" }}>
              {userProfile.username}
            </Text>
            {visitingOwnProfileAndAuth && (
              <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
                <Button
                  color={"black"}
                  bg={"white"}
                  _hover={{
                    bg: "whiteAlpha.700",
                    color: "purple.500",
                    textShadow: "1px solid black",
                  }}
                  size={{ base: "xs", md: "sm" }}
                  onClick={onOpen}
                >
                  Edit Profile
                </Button>
              </Flex>
            )}
            {visitingAnotherProfileAndAuth && (
              <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
                <Button
                  color={"black"}
                  bg={"white"}
                  _hover={{
                    bg: "whiteAlpha.700",
                    color: "purple.500",
                    textShadow: "1px solid black",
                  }}
                  size={{ base: "xs", md: "sm" }}
                  onClick={handleFollowUser}
                  isLoading={isUpdating}
                >
                  {isFollowing ? "Unfollow" : "Follow"}
                </Button>
              </Flex>
            )}
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={{ base: 2, sm: 4 }}
          >
            <Text>
              <Text as="span" fontWeight={"bold"} mr={1}>
                {userProfile.posts.length}
              </Text>
              Posts
            </Text>
            <Text>
              <Text as="span" fontWeight={"bold"} mr={1}>
                {userProfile.followers.length}
              </Text>
              Followers
            </Text>
            <Text>
              <Text as="span" fontWeight={"bold"} mr={1}>
                {userProfile.following.length}
              </Text>
              Following
            </Text>
          </Flex>

          <Flex alignItems={"center"} justifyContent={"flex-start"}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {userProfile.username}
            </Text>
          </Flex>
          <Text fontWeight={"bold"} fontSize={15}>
            {userProfile.bio}
          </Text>
        </VStack>
      </Flex>
      <Flex>{isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}</Flex>
    </>
  );
};

export default ProfileHeader;
