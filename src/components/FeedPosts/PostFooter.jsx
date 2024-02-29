import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";

const PostFooter = ({ post, username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
    <>
      <Box marginTop={"auto"}>
        <Flex alignItems={"center"} gap={5} w={"full"} pt={2} mt={"auto"}>
          <Box onClick={handleLike} cursor={"pointer"} fontSize={20}>
            {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
          </Box>
          <Box
            onClick={() => commentRef.current.focus()}
            cursor={"pointer"}
            fontSize={20}
          >
            <CommentLogo cursor={"pointer"} fontSize={20} />
          </Box>
        </Flex>
        <Text mt={1} fontSize={14} fontWeight={600}>
          {likes} likes
        </Text>

        {!isProfilePage && (
          <>
            <Text mt={1} fontSize={"sm"} fontWeight={700}>
              {username}{" "}
              <Text as="span" fontWeight={500}>
                Clear ✨
              </Text>
            </Text>
            <Text mt={1} fontSize={"sm"} fontWeight={400} color={"grey"}>
              View all 1,000 comments
            </Text>
          </>
        )}

        {authUser && (
          <Flex mt={2} alignItems={"center"} justifyContent={"center"} gap={2}>
            <InputGroup>
              <Input
                type="text"
                variant={"flushed"}
                p={2}
                placeholder="Add a Comment..."
                fontSize={"sm"}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                ref={commentRef}
              />
              <InputRightElement>
                <Button
                  mr={2}
                  cursor={"pointer"}
                  color={"purple.500"}
                  bg={"transparent"}
                  _hover={{ color: "white" }}
                  transition={"all .1s ease"}
                  onClickCapture={handleSubmitComment}
                  isLoading={isCommenting}
                >
                  Post
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        )}
      </Box>
    </>
  );
};

export default PostFooter;
