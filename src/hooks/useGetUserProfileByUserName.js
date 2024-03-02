import { useState, useEffect } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserProfileByUserName = (username) => {
  const [isLoding, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const { userProfile, setUserProfile } = useUserProfileStore();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", username)
        );
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) return setUserProfile(null);

        let userDocument;
        querySnapshot.forEach((doc) => {
          userDocument = doc.data();
        });

        setUserProfile(userDocument);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, [setUserProfile, showToast, username]);

  return { isLoding, userProfile };
};

export default useGetUserProfileByUserName;
