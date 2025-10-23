function Person({ name, title, salary, phone, email, animal }) {
  return (
    <div className="person-card">
      <h2>{name}</h2>
      <p>
        <b>Title:</b> {title}
      </p>
      <p>
        <b>Salary:</b> ${salary}
      </p>
      <p>
        <b>Phone:</b> {phone}
      </p>
      <p>
        <b>Email:</b> {email}
      </p>
      <p>
        <b>Favorite animal:</b> {animal}
      </p>
    </div>
  );
}
export default Person;
