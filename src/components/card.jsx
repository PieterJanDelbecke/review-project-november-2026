import styled from "@emotion/styled";

const Container = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: pink;
  border: 1px solid black;
`;

const Card = ({ movie }) => {
  return (
    <Container>
      <h3>{movie.title}</h3>
    </Container>
  );
};

export default Card;
