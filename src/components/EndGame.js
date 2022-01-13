import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getFirestore, doc, setDoc } from "firebase/firestore";

export default function EndGame(props) {
  const pushToDatabase = async () => {
    try {
      await setDoc(doc(getFirestore(), "records", uuidv4()), {
        userName: props.userName,
        userTime: props.userTime * -1,
      });
    } catch (error) {
      console.error("Error writing to database", error);
    }
  };

  const submitResult = (e) => {
    // Process user data and prevent page refreshing
    e.preventDefault();
    pushToDatabase();

    alert("Result Sent To DB");
  };

  return (
    <div className="EndGame">
      <h2>Congratulations!</h2>
      <h3>You have caught em' all!</h3> <br />
      <p>Username: {props.userName}</p>
      <p>Time: {props.userTime * -1} seconds</p> <br />
      <button
        onClick={(e) => {
          submitResult(e);
        }}
        className="endGame-btn"
      >
        Submit Record
      </button>
    </div>
  );
}
