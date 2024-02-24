import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = ({ username }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, index) => (
          <>
            <VStack key={index} alignItems={"flex-start"} gap={2}>
              <Skeleton w={"full"}>
                <Box h="300px"></Box>
              </Skeleton>
            </VStack>
          </>
        ))}
      <ProfilePost username={username} img="img1.png" />
      <ProfilePost username={username} img="img2.png" />
      <ProfilePost username={username} img="img3.png" />
      <ProfilePost username={username} img="img4.png" />
    </Grid>
  );
};

export default ProfilePosts;
