import { dbService } from "fbase";
import { useState, useEffect } from "react";

const Home = ({ userObj }) => {
  const [gweet, setGweet] = useState("");
  const [gweets, setGweets] = useState([]);
  console.log(userObj);
  const getGweets = async () => {
    const dbGweets = await dbService.collection("gweet").get();

    dbGweets.forEach((document) => {
      const nweetObject = { ...document.data(), id: document.id };
      setGweets((prev) => [nweetObject, ...prev]);
    });
  };

  useEffect(() => {
    getGweets();
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
          <div key={gweet.id}>
            <h4>{gweet.text}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
