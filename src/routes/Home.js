import { dbService } from "fbase";
import { useState, useEffect } from "react";
import Gweet from "./Gweet";

const Home = ({ userObj }) => {
  const [gweet, setGweet] = useState("");
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

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService
      .collection("gweet")
      .add({ text: gweet, createAt: Date.now(), createId: userObj.uid });
    setGweet("");
  };

  const onChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setGweet(value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={gweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Gweet" />
      </form>
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
