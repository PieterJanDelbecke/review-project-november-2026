import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import AppContext from "../context/AppContext";

const BASE_URL = "https://image.tmdb.org/t/p/";
const RED = "#ff6363";
const GREEN = "#28ffbf";

const Container = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: pink;
  border: 1px solid black;
`;

const CardImage = styled.img`
  display: block;
  width: 300px;
  aspect-ratio: 300 / 380; /* keeps poster proportions */
  object-fit: cover;
  border-radius: 8px;
`;

const MovieTitle = styled.p`
  color: ${(props) => (props.colorScheme ? RED : GREEN)};
  height: 50px;
  margin: 0px;
  padding: 5px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const ReleaseDate = styled.p`
  color: black;
  margin: 5px;
  padding: 5px;
`;

const color = true;

const Card = ({ movie, size }) => {
  const navigate = useNavigate();
  const { appContext, setAppContext } = useContext(AppContext);

  const handleClick = (movie) => {
    setAppContext(movie);
    navigate("/selected");
  };

  return (
    <Container onClick={() => handleClick(movie)}>
      <MovieTitle colorScheme={color}>{movie.title}</MovieTitle>
      <CardImage
        src={`${BASE_URL}${size}${movie.poster_path}`}
        alt={movie.title}
      ></CardImage>
      <ReleaseDate>{movie.release_date?.slice(0, 4)}</ReleaseDate>
    </Container>
  );
};

export default Card;
