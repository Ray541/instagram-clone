import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";
import CommentsModal from "../Modals/CommentsModal";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const { handleLikePost, isLiked, likes } = useLikePost(post);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
    <>
      <Box marginTop={"auto"}>
        {!creatorProfile && (
          <VStack alignItems={"start"} w={"full"} mt={5}>
            <Flex alignItems={"center"} gap={5}>
              <SkeletonCircle size="7"></SkeletonCircle>
              <SkeletonCircle size="7"></SkeletonCircle>
            </Flex>
            <Skeleton height={"10px"} width={"100px"}></Skeleton>
            <Skeleton height={"10px"} width={"full"}></Skeleton>
            <Skeleton height={"10px"} width={"full"}></Skeleton>
            <Skeleton height={"30px"} width={"full"}></Skeleton>
          </VStack>
        )}
        {creatorProfile && (
          <>
            <Flex alignItems={"center"} gap={5} w={"full"} pt={2} mt={"auto"}>
              <Box onClick={handleLikePost} cursor={"pointer"} fontSize={20}>
                {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
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

            <Text fontSize={12} color={"grey"}>
              Posted {timeAgo(post.createdAt)}
            </Text>

            {!isProfilePage && (
              <>
                <Text mt={1} fontSize={"sm"} fontWeight={700}>
                  {creatorProfile?.username}{" "}
                  <Text as="span" fontWeight={500}>
                    {post.caption}
                  </Text>
                </Text>
                {post.comments.length > 0 && (
                  <Text
                    mt={1}
                    fontSize={"sm"}
                    fontWeight={400}
                    color={"grey"}
                    cursor={"pointer"}
                    onClick={onOpen}
                  >
                    View all {post.comments.length} comments
                  </Text>
                )}

                {/* Comments model will open only in home page */}

                {isOpen ? (
                  <CommentsModal
                    isOpen={isOpen}
                    onClose={onClose}
                    post={post}
                  />
                ) : null}
              </>
            )}

            {authUser && (
              <Flex
                mt={2}
                alignItems={"center"}
                justifyContent={"center"}
                gap={2}
              >
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
          </>
        )}
      </Box>
    </>
  );
};

export default PostFooter;
