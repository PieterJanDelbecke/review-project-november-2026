import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.nav`
  background-color: yellow;
  border: 1px solid red;
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  margin: 15px;
`;

const NavBar = () => {
  return (
    <>
      <Container>
        <StyledLink to="/">HOME</StyledLink>
        <StyledLink to="/favourites">FAVOURITES</StyledLink>
        <StyledLink to="/about">ABOUT</StyledLink>
      </Container>
    </>
  );
};

export default NavBar;
