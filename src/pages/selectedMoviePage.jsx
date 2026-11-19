import { useContext } from "react";
import AppContext from "../context/AppContext";
import styled from "@emotion/styled";

import { PageTitle } from "../styling/styles";

const BASE_URL = "https://image.tmdb.org/t/p/";
const SIZE = "w500";

const GREY = "#6a6a6a";
const GREY_DARK = "#2c3333";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 0 30px;
  background-color: #6a6a6a;
`;

const Image = styled.img`
  display: block;
  width: 500px;
  aspect-ratio: 300 / 380; /* keeps poster proportions */
  object-fit: cover;
  border-radius: 8px;
`;

const Summary = styled.div`
  width: 450px;
`;

const SelectedMoviePage = () => {
  const { appContext: movie, setAppContext } = useContext(AppContext);

  return (
    <>
      <PageTitle>Selected Movie</PageTitle>
      <Container>
        <CardContainer>
          <h3>{movie.title}</h3>
          <Image src={`${BASE_URL}${SIZE}${movie.poster_path}`}></Image>
          <Summary>
            <p>{movie.overview}</p>
          </Summary>
        </CardContainer>
      </Container>
    </>
  );
};

export default SelectedMoviePage;
