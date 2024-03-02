import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Container, Image, Skeleton } from "@chakra-ui/react";
import useGetUserProfileById from "../../hooks/useGetUserProfileById";

const FeedPost = ({ post }) => {
  const { userProfile, isLoading } = useGetUserProfileById(post.createdBy);

  return (
    <Container py={2}>
      <PostHeader post={post} creatorProfile={userProfile} />
      {isLoading && <Skeleton h={380} />}
      <Box transition={"all .2s ease"} borderRadius={3} overflow={"hidden"}>
        <Image src={post.imageURL} alt={"Feed Post Image"} />
      </Box>
      <PostFooter post={post} creatorProfile={userProfile} />
    </Container>
  );
};

export default FeedPost;
