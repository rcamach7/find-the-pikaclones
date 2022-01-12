export default function EndGame(props) {
  return (
    <div className="EndGame">
      <h2>Congratulations!</h2>
      <h3>You have caught em' all!</h3> <br />
      <p>Username: {props.userName}</p>
      <p>Time: {props.userTime * -1} seconds</p> <br />
      <button className="endGame-btn">Submit Record</button>
    </div>
  );
}
