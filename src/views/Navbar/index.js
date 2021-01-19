import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";

import { Container, Wrapper, StyledLink } from "./styles";

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <StyledLink as={Link} to="/">
            <AiOutlineHome />
          </StyledLink>
          <StyledLink as={Link} to="/cart">
            <AiOutlineShoppingCart />
          </StyledLink>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
