import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../../api/context";

import {
  Container,
  Wrapper,
  InputField,
  InputGroup,
  SendButton,
  StyledLink,
} from "./styles";

const Payment = () => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [city, setCity] = useState();
  const [postal, setPostal] = useState();

  const { booksInCart, postData } = useShopContext();

  const sendData = () => {
    const booksInCartForPayment = [
      ...booksInCart.map((element) => {
        return { id: element.id, quantity: element.quantity };
      }),
    ];

    const obj = {
      order: booksInCartForPayment,
      first_name: name,
      last_name: surname,
      city: city,
      zip_code: postal,
    };

    postData(obj);

  };

  return (
    <>
      <Container>
        <Wrapper>
          <form>
            <InputGroup>
              <span>Imię</span>
              <InputField
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </InputGroup>
            <InputGroup>
              <span>Nazwisko</span>
              <InputField
                type="text"
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
            </InputGroup>
            <InputGroup>
              <span>Miejscowość</span>
              <InputField
                type="text"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </InputGroup>
            <InputGroup>
              <span>Kod pocztowy</span>
              <InputField
                type="text"
                onChange={(e) => {
                  setPostal(e.target.value);
                }}
              />
            </InputGroup>
            <SendButton type="button" onClick={sendData}>
              Zamawiam i płacę
            </SendButton>
            <StyledLink as={Link} to="/cart">
              <SendButton type="button">Anuluj</SendButton>
            </StyledLink>
          </form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Payment;
