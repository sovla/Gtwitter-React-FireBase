import { dbService, storageService } from "fbase";
import { useState, useEffect } from "react";
import Gweet from "./Gweet";
import { v4 as uuidv4 } from "uuid";

const Home = ({ userObj }) => {
  const [gweet, setGweet] = useState("");
  const [gweets, setGweets] = useState([]);
  const [attachment, setAttachment] = useState("");

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
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    await dbService.collection("gweet").add({
      text: gweet,
      createAt: Date.now(),
      createId: userObj.uid,
      attachmentUrl,
    });
    setGweet("");
    setAttachment("");
  };

  const onChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setGweet(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => setAttachment("");

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
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Gweet" />

        <div>
          {attachment && <img src={attachment} width="50px" height="50px" />}
          <button onClick={onClearAttachment}>Clear</button>
        </div>
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
