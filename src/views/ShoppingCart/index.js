import React from "react";
import { Link } from "react-router-dom";

import {
  MainTitle,
  SecondaryTitle,
  StyledLink,
} from "../../components/StyledComponents/styles";

import {
  Container,
  Wrapper,
  Summary,
  SummaryKeys,
  SummaryButton,
  SummaryButtonWrapper,
  DeleteAllButton,
  MainWrapper,
  Text,
  StyledLine,
} from "./styles";

import { useShopContext } from "../../api/context";

import BookInCart from "../../components/BookInCart";

import { getCorrectVariety } from "../../utils";

const Cart = () => {
  const { booksInCart, setBooksInCart } = useShopContext();

  const pricesWithCurrencies = {};

  const sumOfPages =
    booksInCart.length > 1
      ? booksInCart.reduce((prev, curr) => {
          if (typeof prev === "number") return prev + curr.pages;
          else return prev.pages + curr.pages;
        })
      : booksInCart.length > 0
      ? booksInCart[0]["pages"]
      : 0;

  const sumOfKindsOfBooks =
    booksInCart.length > 1
      ? booksInCart.reduce((prev, curr) => {
          if (typeof prev === "number") return prev + curr.quantity;
          else return prev.quantity + curr.quantity;
        })
      : booksInCart.length > 0
      ? booksInCart[0]["quantity"]
      : 0;

  for (let i = 0; i < booksInCart.length; i++) {
    if (!pricesWithCurrencies.hasOwnProperty(booksInCart[i]["currency"])) {
      pricesWithCurrencies[booksInCart[i]["currency"]] =
        booksInCart[i]["price"] * booksInCart[i]["quantity"];
    } else {
      pricesWithCurrencies[booksInCart[i]["currency"]] +=
        booksInCart[i]["price"] * booksInCart[i]["quantity"];
    }
  }

  const deleteBooksInCart = () => {
    booksInCart.forEach((element) => {
      const bookQuantity = JSON.parse(localStorage.getItem(element.id));
      localStorage.setItem(
        element.id,
        JSON.stringify(bookQuantity + element.quantity)
      );
    });
    localStorage.setItem("books", JSON.stringify(null));
    setBooksInCart([]);
  };

  return (
    <>
      <Container>
        <MainTitle>Książki w koszyku</MainTitle>
        <MainWrapper>
          <Wrapper>
            {booksInCart.length > 1 && (
              <>
                <DeleteAllButton onClick={deleteBooksInCart}>
                  Usuń wszystkie pozycje
                </DeleteAllButton>
                <StyledLine />
              </>
            )}

            {booksInCart &&
              booksInCart.map((book) => {
                const {
                  id,
                  author,
                  currency,
                  pages,
                  price,
                  title,
                  quantity,
                } = book;
                return (
                  <BookInCart
                    key={id}
                    id={id}
                    author={author}
                    currency={currency}
                    pages={pages}
                    price={price}
                    title={title}
                    quantity={quantity}
                    booksInCart={booksInCart}
                    setBooksInCart={setBooksInCart}
                  />
                );
              })}
            {booksInCart.length === 0 && (
              <SecondaryTitle>Brak książek w koszyku</SecondaryTitle>
            )}
          </Wrapper>
          <Summary>
            <SummaryKeys>
              <span>
                Cena:
                <Text>
                  {" "}
                  {Object.keys(pricesWithCurrencies).length > 0
                    ? Object.entries(pricesWithCurrencies).map((element) => {
                        return (
                          <span key={element[0]}>
                            {element[1]} {element[0]},{" "}
                          </span>
                        );
                      })
                    : 0}
                </Text>
              </span>
              <span>
                Ilość unikalnych stron:
                <Text>{sumOfPages}</Text>
              </span>
              <span>
                Ilość książek:
                <Text>
                  {sumOfKindsOfBooks}{" "}
                  {getCorrectVariety(sumOfKindsOfBooks, "książka")}
                </Text>
              </span>
              <span>
                Rodzaje książek:
                <Text>
                  {booksInCart && booksInCart.length}{" "}
                  {getCorrectVariety(booksInCart.length, "książka")}{" "}
                </Text>
              </span>
            </SummaryKeys>
            <SummaryButtonWrapper>
              <StyledLink as={Link} to="/">
                <SummaryButton>Powrót</SummaryButton>
              </StyledLink>
              <StyledLink as={Link} to="/payment">
                <SummaryButton disabled={!booksInCart.length > 0}>
                  Dalej
                </SummaryButton>
              </StyledLink>
            </SummaryButtonWrapper>
          </Summary>
        </MainWrapper>
      </Container>
    </>
  );
};

export default Cart;
