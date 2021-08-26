import { dbService, storageService } from "fbase";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Gweet = ({ gweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newGweet, setNewGweet] = useState(gweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("삭제 하시겠습니까?");
    if (ok) {
      await dbService.doc(`gweet/${gweetObj.id}`).delete();
      if (gweetObj.attachmentUrl !== "") {
        await storageService.refFromURL(gweetObj.attachmentUrl).delete();
      }
    }
  };

  const toggleEditClick = () => {
    setEditing((prev) => !prev);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewGweet(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`gweet/${gweetObj.id}`).update({ text: newGweet });
    setEditing(false);
  };
  return (
    <div className="nweet">
      {editing ? (
        <>
          <form onSubmit={onSubmit} className="container nweetEdit">
            <input
              value={newGweet}
              onChange={onChange}
              required
              className="formInput"
            />
            <input type="submit" value="Update Gweet" className="formBtn" />
          </form>
          <button onClick={toggleEditClick} className="formBtn cancelBtn">
            Cancel
          </button>
        </>
      ) : (
        <>
          <h4>{gweetObj.text}</h4>
          {gweetObj.attachmentUrl && (
            <img src={gweetObj.attachmentUrl} width="50px" height="50px" />
          )}
          {isOwner && (
            <div className="nweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditClick}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Gweet;
