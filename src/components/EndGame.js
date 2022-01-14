import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getFirestore, doc, setDoc } from "firebase/firestore";

export default function EndGame(props) {
  const endGameRef = useRef(null);
  const [maxSubmissions, setMaxSubmissions] = useState(0);
  // Implement Auto-Add to DB
  useEffect(() => {
    const pushToDatabase = async () => {
      try {
        await setDoc(doc(getFirestore(), "hallOfFame", uuidv4()), {
          userName: props.userName,
          userTime: props.userTime,
        });
      } catch (error) {
        console.error("Error writing to database", error);
      }
    };
    if (props.userTime > 0 && maxSubmissions < 1) {
      pushToDatabase();
      setMaxSubmissions(1);
    }
  }, [maxSubmissions, props.userName, props.userTime]);

  const viewLeaderBoards = (e) => {
    // Process user data and prevent page refreshing
    e.preventDefault();

    // Hide myself and show leader board instead
    endGameRef.current.style.display = "none";
    props.setShowLeaderBoard(true);
  };

  return (
    <div ref={endGameRef} className="EndGame">
      <h2>Congratulations!</h2>
      <h3>You have caught em' all!</h3> <br />
      <p>Username: {props.userName}</p>
      <p>Time: {props.userTime} seconds</p> <br />
      <br />
      <p>Your result has been submitted!</p>
      <button
        onClick={(e) => {
          viewLeaderBoards(e);
        }}
        className="endGame-btn"
      >
        Hall Of Fame
      </button>
    </div>
  );
}
