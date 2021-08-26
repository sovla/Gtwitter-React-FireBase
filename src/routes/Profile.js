import { authService, dbService } from "fbase";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Profile = ({ userObj }) => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  const getMyGweets = async () => {
    const gweets = await dbService
      .collection("gweets")
      .where("createId", "==", userObj.uid)
      .orderBy("createAt", "asc")
      .get();
  };

  useEffect(() => {
    getMyGweets();
  }, []);

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
