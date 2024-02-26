import { Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase/firebase";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";

const GoogleAuth = ({ prefix }) => {
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);

  const showToast = useShowToast();

  const loginUser = useAuthStore((state) => state.login);

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle();

      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }

      const userRef = doc(firestore, "users", newUser.user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        // login

        const userDocument = userSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userDocument));
        loginUser(userDocument);
      } else {
        // signup

        if (newUser) {
          const userDocument = {
            uid: newUser.user.uid,
            email: newUser.user.email,
            username: newUser.user.email.split("@")[0],
            fullName: newUser.user.displayName,
            bio: "",
            profilePicURL: newUser.user.photoURL,
            followers: [],
            following: [],
            posts: [],
            createAt: Date.now(),
          };

          await setDoc(doc(firestore, "users", newUser.user.uid), userDocument);
          localStorage.setItem("user-info", JSON.stringify(userDocument));
          loginUser(userDocument);
        }
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      gap={{ base: "10px", md: "10px" }}
      cursor={"pointer"}
      onClick={handleGoogleAuth}
    >
      <Image w={7} src="/google.png" alt="Google Logo" />
      <Text
        color={"purple.100"}
        _hover={{ color: "purple.300" }}
        transition={"all 0.17s ease"}
      >
        {prefix} with google
      </Text>
    </Flex>
  );
};

export default GoogleAuth;
