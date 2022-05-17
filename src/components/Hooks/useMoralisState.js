import { useMoralis } from "react-moralis";

const useMoralisState = () => {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate()
        .then(function (user) {
          console.log(user?.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return {
    login,
    authenticate,
    isAuthenticated,
    logout,
    user,
  };
};
export default useMoralisState;
