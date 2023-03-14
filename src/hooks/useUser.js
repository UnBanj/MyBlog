import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
      setIsLoading(false);
    });

    return unsubscribe; //Call this func if the user navigates away from the page
  }, []);

  return { user, isLoading }; //vracamo ih da bi komp mogla da im pristupi
};

export default useUser;
