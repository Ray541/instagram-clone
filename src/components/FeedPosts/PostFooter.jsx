import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";

const PostFooter = ({ username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <>
      <Box marginTop={"auto"}>
        <Flex alignItems={"center"} gap={5} w={"full"} pt={2} mt={"auto"}>
          <Box onClick={handleLike} cursor={"pointer"} fontSize={20}>
            {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
          </Box>
          <Box>
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

        <Flex mt={2} alignItems={"center"} justifyContent={"center"} gap={2}>
          <InputGroup>
            <Input
              type="text"
              variant={"flushed"}
              p={2}
              placeholder="Add a Comment..."
              fontSize={"sm"}
            />
            <InputRightElement>
              <Button
                mr={2}
                cursor={"pointer"}
                color={"purple.500"}
                bg={"transparent"}
                _hover={{ color: "white" }}
                transition={"all .1s ease"}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>
    </>
  );
};

export default PostFooter;
