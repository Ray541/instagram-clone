import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useSignUpWithEmailAndPassowrd = () => {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const signup = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullName
    ) {
      showToast("Error", "Please fill all the fields", "error");
      return;
    }

    // Same user handle
    const usersRef = collection(firestore, "users");

    const q = query(usersRef, where("username", "==", inputs.username));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      showToast("Error", "Username already exists", "error");
      return;
    }

    const eq = query(usersRef, where("email", "==", inputs.email));

    const emailquerySnapshot = await getDocs(eq);

    if (!emailquerySnapshot.empty) {
      showToast("Error", "Email already exists", "error");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }

      if (newUser) {
        const userDocument = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createAt: Date.now(),
        };

        await setDoc(doc(firestore, "users", newUser.user.uid), userDocument);
        localStorage.setItem("user-info", JSON.stringify(userDocument));
        loginUser(userDocument);

        showToast("Susscess", "User Account Created", "success");
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassowrd;
