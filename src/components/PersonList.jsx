import PersonCard from "./PersonCard";

function PersonList({ employees }) {
  return (
    <div className="person-list">
      {employees.map((person) => (
        <PersonCard key={person.id} {...person} />
      ))}
    </div>
  );
}

export default PersonList;
