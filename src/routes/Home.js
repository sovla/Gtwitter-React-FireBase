import { dbService } from "fbase";
import { useState, useEffect } from "react";
import Gweet from "./Gweet";
import NweetFactory from "component/NweetFactory";

const Home = ({ userObj }) => {
  const [gweets, setGweets] = useState([]);

  useEffect(() => {
    dbService
      .collection("gweet")
      .orderBy("createAt", "desc")
      .onSnapshot((snapshot) => {
        const newArray = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data(),
        }));
        setGweets(newArray);
      });
  }, []);

  return (
    <div className="container">
      <NweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {gweets.map((gweet) => (
          <Gweet
            key={gweet.id}
            gweetObj={gweet}
            isOwner={gweet.createId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
