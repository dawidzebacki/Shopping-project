import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../../api/context";

import {
  MainTitle,
  Error,
  Success,
  StyledLink
} from "../../components/StyledComponents/styles";

import {
  Container,
  Wrapper,
  InputField,
  InputGroup,
  SendButton,
  StyledForm,
} from "./styles";

import { getCorrectLetterCasing } from '../../utils';

const Payment = () => {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [city, setCity] = useState();
  const [postal, setPostal] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const { booksInCart, setBooksInCart, postData, loadingData } = useShopContext();

  const sendData = () => {
    const booksInCartForPayment = [
      ...booksInCart.map((element) => {
        return { id: element.id, quantity: element.quantity };
      }),
    ];

    validateForm(booksInCartForPayment);
  };

  const deleteBooksInCart = () => {
    localStorage.setItem("books", JSON.stringify(null));
    setBooksInCart([]);
  };

  const validateForm = (items) => {
    const regexPostal = /^\d{2}-\d{3}$/gm;
    const regexLetters = /^[a-zA-Ząćśńółę\s]+$/;

    if (loadingData === "error")
      setError("Nie można wysłać formularza, problem po stronie serwera.");
    else if (items.length < 1) setError("Koszyk nie może być pusty.");
    else if (!name || name.length < 4 || name.length > 20 || !regexLetters.test(name))
      setError(
        "Imię musi składać się tylko z liter oraz nie może być krótsze niż 4 znaki i dłuższe niż 20 znaków."
      );
    else if (!surname || surname.length < 5 || surname.length > 20 || !regexLetters.test(surname))
      setError(
        "Nazwisko musi składać się tylko z liter oraz nie może być krótsze niż 5 znaków i dłuższe niż 20 znaków."
      );
    else if (!city || city.length < 4 || city.length > 20 || !regexLetters.test(city))
      setError(
        "Miejscowość musi składać się tylko z liter oraz nie może być krótsza niż 4 znaki i dłuższe niż 20 znaków."
      );
    else if (!postal || !regexPostal.test(postal))
      setError(
        'Kod pocztowy musi być w formacie: "XX-XXX" gdzie "X" to liczba.'
      );
    else {
      postData({
        order: items,
        first_name: getCorrectLetterCasing(name),
        last_name: getCorrectLetterCasing(surname),
        city: getCorrectLetterCasing(city),
        zip_code: postal,
      });
      setError();
      setSuccess("Dane zostały wysłane.");
      deleteBooksInCart();
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <MainTitle>Formularz do zamówienia</MainTitle>
          <StyledForm>
            <InputGroup>
              <span>Imię</span>
              <InputField
                type="text"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </InputGroup>
            <InputGroup>
              <span>Nazwisko</span>
              <InputField
                type="text"
                required
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
            </InputGroup>
            <InputGroup>
              <span>Miejscowość</span>
              <InputField
                type="text"
                required
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </InputGroup>
            <InputGroup>
              <span>Kod pocztowy</span>
              <InputField
                type="text"
                required
                onChange={(e) => {
                  setPostal(e.target.value);
                }}
              />
            </InputGroup>
            <SendButton type="button" onClick={sendData} disabled={success}>
              Zamawiam i płacę
            </SendButton>
            <StyledLink as={Link} to="/cart">
              <SendButton type="button">{success ? 'Powrót' : 'Anuluj'}</SendButton>
            </StyledLink>
          </StyledForm>
          {error && <Error>{error}</Error>}
          {success && <Success>{success}</Success>}
        </Wrapper>
      </Container>
    </>
  );
};

export default Payment;
