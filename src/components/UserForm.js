import { useRef, useEffect } from "react";

const UserForm = (props) => {
  const inputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (props.hideForm) {
      formRef.current.style.display = "none";
    } else {
      formRef.current.style.display = "block";
    }
  }, [props.hideForm]);

  const handleSubmission = (e) => {
    e.preventDefault();
    if (inputRef.current.value === "") {
      alert("Enter A Username");
      return;
    }
    // Send username to parent - which will in turn start the game
    props.handleFormSubmission(inputRef.current.value);
  };

  return (
    <form ref={formRef} className="UserForm">
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
      <br />
      <input
        ref={inputRef}
        placeholder="Enter Username"
        type="text"
        id="name"
      />
      <br />
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
