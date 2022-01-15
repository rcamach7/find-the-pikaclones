import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const WebFooter = (props) => {
  return (
    <footer className="footer">
      <a href="https://github.com/rcamach7">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <FontAwesomeIcon icon={faLinkedin} size="3x" />
    </footer>
  );
};

export default WebFooter;
