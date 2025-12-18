import { useContext, useState } from "react";
import axios from "axios";
import { PersonContext } from "../contexts/PerconContexts";

const usePerson = () => {
  const { person, setPerson } = useContext(PersonContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPersons = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/employees"); // путь к API
      console.log("API response:", response.data); // проверка данных
      setPerson(response.data || []); // напрямую массив
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const addPerson = async (newPerson) => {
    try {
      const res = await axios.post("/employees", newPerson);
      setPerson((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Add person error:", err);
    }
  };
  return {
    fetchPersons,
    addPerson,
    persons: person,
    loading,
    error,
  };
};

export default usePerson;
