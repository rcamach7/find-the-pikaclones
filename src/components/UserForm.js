import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <h2 className="form-title">Capture The Pikaclones!</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon="check-square" size="1x" /> Find 3 Pokemons:
            Minun, Pichu, and Plusle (see icons above for reference)
          </li>
          <li>
            <FontAwesomeIcon icon="check-square" size="1x" /> You will be timed
            as soon as you start.
          </li>
          <li>
            <FontAwesomeIcon icon="check-square" size="1x" /> Check out the hall
            of fame page to see how you did compared to others!
          </li>
        </ul>
      </div>
      <br />
      <br />
      <input
        ref={inputRef}
        placeholder="Enter Username"
        type="text"
        id="form-nameInput"
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
