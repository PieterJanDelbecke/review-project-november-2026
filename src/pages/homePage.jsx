import { useEffect, useState } from "react";
import api from "../api/api";
import styled from "@emotion/styled";

import Card from "../components/card";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: yellow;
  border: 1px solid red;
`;

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function getPopularMovies() {
      try {
        const data = await api.getPopularMovies();
        console.log("### DATA:", data.results);
        if (!isCancelled) {
          setPopularMovies(data.results);
        }
      } catch {
        setApiError(true);
      }
    }
    getPopularMovies();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <Container>
        {popularMovies.map((movie) => {
          return (
            <div key={movie.id}>
              <Card movie={movie} size="w500" />
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
