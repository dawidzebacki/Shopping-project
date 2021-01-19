import React from "react";

import { AiFillHeart, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { Container, Wrapper, Text, TextSpan, Icons, Icon } from "./styles";

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Text>
            developed with{" "}
            <TextSpan>
              <AiFillHeart />
            </TextSpan>{" "}
            by Dawid Zębacki, {new Date().getFullYear()}
          </Text>
          <Icons>
            <a href="https://github.com/dawidzebacki">
              <Icon>
                <AiFillGithub />
              </Icon>
            </a>

            <a href="https://www.linkedin.com/in/dawidzebacki">
              <Icon>
                <AiFillLinkedin />
              </Icon>
            </a>
          </Icons>
        </Wrapper>
      </Container>
    </>
  );
};

export default Footer;
