import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Container, Image } from "@chakra-ui/react";

const FeedPost = ({ username, img, avatar }) => {
  return (
    <Container py={2}>
      <PostHeader username={username} avatar={avatar} />
      <Box borderRadius={3} overflow={"hidden"}>
        <Image src={img} alt={username} />
      </Box>
      <PostFooter username={username} />
    </Container>
  );
};

export default FeedPost;
