import PersonCard from "./PersonCard";
import employees from "../data/employees";

function PersonList() {
  return (
    <div className="person-list">
      {employees.map((person) => (
        <PersonCard key={person.id} {...person} />
      ))}
    </div>
  );
}

export default PersonList;
