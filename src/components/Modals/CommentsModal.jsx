import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Comment from "../Comment/Comment";
import usePostComment from "../../hooks/usePostComment";
import { useEffect, useRef } from "react";

const CommentsModal = ({ isOpen, onClose, post }) => {
  const { handlePostComment, isCommenting } = usePostComment();
  const commentRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollToBottom = () => {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    };
    if (isOpen) {
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [isOpen, post.comments.length]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    await handlePostComment(post.id, commentRef.current.value);
    commentRef.current.value = "";
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
        <ModalHeader>Comments</ModalHeader>
        <ModalCloseButton
          _focus={{ boxShadow: "unset", bg: "whiteAlpha.400" }}
        />
        <ModalBody pb={6}>
          <Flex
            mb={4}
            gap={4}
            flexDir={"column"}
            maxH={"250px"}
            overflowY={"auto"}
            ref={scrollRef}
          >
            {post.comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </Flex>
          <form style={{ marginTop: "2rem" }} onSubmit={handleSubmitComment}>
            <Input
              placeholder="Comment"
              size={"sm"}
              ref={commentRef}
              _focus={{ boxShadow: "unset", border: "1px solid white" }}
            />
            <Flex w={"full"} justifyContent={"flex-end"}>
              <Button
                type="submit"
                ml={"auto"}
                size={"sm"}
                my={4}
                isLoading={isCommenting}
                _focus={{ boxShadow: "unset", bg: "whiteAlpha.300" }}
              >
                Post
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CommentsModal;
