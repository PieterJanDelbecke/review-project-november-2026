import { useState } from "react";

const About = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isMarried, setIsMarried] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`### ${firstName} ### ${lastName} ### ${isMarried}`);
  };
  return (
    <>
      <h1>About Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="firstname"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label htmlFor="firstName">FirstName</label>
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="lastname"
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <label htmlFor="lastName">LastName</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="marriedStatus"
            checked={isMarried}
            onChange={(e) => setIsMarried(e.target.checked)}
          ></input>
          <label htmlFor="marriedStatus">Married</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default About;
