import { useState, useEffect } from "react";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { Player } from "../objects/Player";

export default function LeaderBoard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadDatabase();
  }, []);

  const loadDatabase = async () => {
    const curData = [];

    const querySnapshot = await getDocs(
      query(collection(getFirestore(), "hallOfFame"))
    );
    querySnapshot.forEach((record) => {
      const rawData = record.data();
      curData.push(Player(rawData.userName, rawData.userTime));
    });

    setData(curData);
  };

  return (
    <div className="LeaderBoard">
      <p>Here is our leaderboard: </p>
      <button onClick={() => console.log(data)}>Print Data</button>
      <ul className="records-list">
        {data.map((record, i) => {
          return (
            <li key={i}>
              {record.userName} : {record.userTime}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
