import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  orderBy,
  limit,
} from "firebase/firestore";
import { Player } from "../objects/Player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LeaderBoard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadDatabase();
  }, []);

  const loadDatabase = async () => {
    const curData = [];

    const querySnapshot = await getDocs(
      query(
        collection(getFirestore(), "hallOfFame"),
        orderBy("userTime", "asc"),
        limit(10)
      )
    );
    querySnapshot.forEach((record) => {
      const rawData = record.data();
      curData.push(Player(rawData.userName, rawData.userTime));
    });

    setData(curData);
  };

  return (
    <div className="LeaderBoard">
      <p>
        <FontAwesomeIcon icon="trophy" /> Hall Of Fame{" "}
        <FontAwesomeIcon icon="trophy" />
      </p>
      <br />
      <ul className="records-list">
        {data.map((record, i) => {
          return (
            <li key={i} className="leaderBoard-record">
              <p>
                {i + 1}. {record.userName}
              </p>
              <p>{record.userTime}s</p>
            </li>
          );
        })}
      </ul>
      <button
        className="refreshPage-btn"
        onClick={() => window.location.reload()}
      >
        Home
      </button>
    </div>
  );
}
