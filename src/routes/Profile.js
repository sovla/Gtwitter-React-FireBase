import { authService, dbService } from "fbase";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({ displayName: newDisplayName });
      refreshUser();
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={newDisplayName}
          placeholder="Display Name"
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
// const getMyGweets = async () => {
//   const gweets = await dbService
//     .collection("gweets")
//     .where("createId", "==", userObj.uid)
//     .orderBy("createAt", "asc")
//     .get();
//   console.log(gweets);
// };

// useEffect(() => {
//   getMyGweets();
// }, []);
// 필터링 코드
