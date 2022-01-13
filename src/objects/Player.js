import { v4 as uuidv4 } from "uuid";

const Player = (userName, userTime, idIn) => {
  let id = idIn;
  const generateId = () => {
    if (idIn == null) {
      id = uuidv4();
    } else {
      id = idIn;
    }
  };
  generateId();
  return {
    id,
    userName,
    userTime,
  };
};

export { Player };
