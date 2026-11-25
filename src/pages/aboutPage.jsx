import { useState } from "react";
import { PageTitle } from "../styling/styles";
import { v6 as UUID } from "uuid";

import styled from "@emotion/styled";

const Container = styled.div``;

const FormContainer = styled.form`
  padding: 20px;
  margin: 20px;
  border: 1px solid red;
  display: flex;
  justify-content: flex-end;
`;

const TicketsContainer = styled.div`
  border: 1px solid red;
`;

const Ticket = styled.div`
  border: 1px solid black;
`;

const data = [
  { id: UUID(), firstName: "Liam", lastName: "Vance", married: true },
  { id: UUID(), firstName: "Maya", lastName: "Lin", married: false },
  { id: UUID(), firstName: "Noah", lastName: "Sterling", married: true },
  { id: UUID(), firstName: "Elena", lastName: "Rostova", married: false },
  { id: UUID(), firstName: "Caleb", lastName: "O'Connor", married: true },
];

const About = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isMarried, setIsMarried] = useState(false);
  const [ticketsData, setTicketsData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      id: UUID(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      married: isMarried,
    };

    setTicketsData((prev) => [...prev, newTicket]);
  };
  return (
    <Container>
      <PageTitle>ABOUT</PageTitle>
      <FormContainer onSubmit={handleSubmit}>
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
      </FormContainer>
      <TicketsContainer>
        {ticketsData.map((ticket) => {
          return (
            <Ticket key={ticket.id}>
              <span>{ticket.firstName}</span>
              <span>{ticket.lastName}</span>
              <span>{ticket.married ? "true" : "false"}</span>
            </Ticket>
          );
        })}
      </TicketsContainer>
    </Container>
  );
};

export default About;
