import { createContext, useState } from "react";

const PersonContext = createContext();

const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState([]);
  return (
    <PersonContext.Provider value={{ person, setPerson }}>
      {children}
    </PersonContext.Provider>
  );
};

export default PersonProvider;
export { PersonContext };
