import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Container, Image } from "@chakra-ui/react";

const FeedPost = () => {
  return (
    <Container py={2}>
      <PostHeader />
      <Box>
        <Image src="img1.png" alt="User Post" />
      </Box>
      <PostFooter />
    </Container>
  );
};

export default FeedPost;
