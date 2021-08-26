import { dbService } from "fbase";
import { useState, useEffect } from "react";
import Gweet from "./Gweet";
import NweetFactory from "component/NweetFactory";

const Home = ({ userObj }) => {
  const [gweets, setGweets] = useState([]);

  useEffect(() => {
    dbService.collection("gweet").onSnapshot((snapshot) => {
      const newArray = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      setGweets(newArray);
    });
  }, []);

  return (
    <>
      <NweetFactory />
      <div>
        {gweets.map((gweet) => (
          <Gweet
            key={gweet.id}
            gweetObj={gweet}
            isOwner={gweet.createId === userObj.uid}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
