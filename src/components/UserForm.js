import { useRef } from "react";

const UserForm = (props) => {
  const inputRef = useRef(null);

  const handleSubmission = (e) => {
    e.preventDefault();
    if (inputRef.current.value === "") {
      alert("Please enter a valid name!");
      return;
    }
    // Send username to parent - which will in turn start the game
    props.handleFormSubmission(inputRef.current.value);
  };

  return (
    <form className="UserForm">
      <div className="form-gameRules">
        <h2 className="form-title">Game Set-Up!</h2>
        <br />
        <ul>
          <li>
            - Find 3 Pokemons: Minun, Pichu, and Plusle (see icons above for
            reference)
          </li>
          <li>- You will be timed as soon as you select start game.</li>
          <li>
            - Check out the hall of fame page to see how you did compared to
            others!
          </li>
        </ul>
      </div>
      <br />
      {/* BEGIN FORM INPUT */}
      <label className="form-title" htmlFor="name">
        Enter Username To Begin...
      </label>{" "}
      <br />
      <input ref={inputRef} type="text" id="name" /> <br />
      <input
        id="beginGame-btn"
        type="submit"
        value="Start!"
        onClick={(e) => handleSubmission(e)}
      />
    </form>
  );
};

export default UserForm;
