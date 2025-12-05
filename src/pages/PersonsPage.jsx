import { useEffect, useState } from "react";
import PersonsTable from "../components/PersonsTable";
import axios from "axios";

export default function PersonsPage() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((res) => setPersons(res.data))
      .catch((err) => console.error("Failed to load employees", err));
  }, []);

  // delete handler
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/employees/${id}`).then(() => {
      setPersons(persons.filter((p) => p.id !== id));
    });
  };

  // favorite toggle
  const handleToggleFavorite = (id) => {
    const person = persons.find((p) => p.id === id);
    axios
      .patch(`http://localhost:3001/employees/${id}`, {
        isFavorite: !person.isFavorite,
      })
      .then(() => {
        setPersons(
          persons.map((p) =>
            p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
          )
        );
      });
  };

  // calculate years worked (same logic as in PersonCard)
  const enrichedPersons = persons.map((p) => {
    const start = new Date(p.startDate);
    const today = new Date();

    const yearsWorked = today.getFullYear() - start.getFullYear();

    const hasHadAnniversary =
      today.getMonth() > start.getMonth() ||
      (today.getMonth() === start.getMonth() &&
        today.getDate() >= start.getDate());

    const fullYearsWorked = hasHadAnniversary ? yearsWorked : yearsWorked - 1;

    return {
      ...p,
      yearsWorked: fullYearsWorked,
    };
  });

  return (
    <div>
      <h1>Employees</h1>

      <PersonsTable
        persons={enrichedPersons}
        onDelete={handleDelete}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
