import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { getFirestore, doc, setDoc } from "firebase/firestore";

export default function EndGame(props) {
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
    if (props.userTime > 0) {
      pushToDatabase();
    }
  }, [props.userName, props.userTime]);

  const viewLeaderBoards = (e) => {
    // Process user data and prevent page refreshing
    e.preventDefault();

    alert("To Be Implemented");
  };

  return (
    <div className="EndGame">
      <h2>Congratulations!</h2>
      <h3>You have caught em' all!</h3> <br />
      <p>Username: {props.userName}</p>
      <p>Time: {props.userTime} seconds</p> <br />
      <p>Your result has been submitted!</p>
      <button
        onClick={(e) => {
          viewLeaderBoards(e);
        }}
        className="endGame-btn"
      >
        View Hall Of Fame
      </button>
    </div>
  );
}
