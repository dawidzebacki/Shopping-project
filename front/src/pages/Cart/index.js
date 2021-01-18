import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Wrapper,
  Summary,
  SummaryKeys,
  SummaryProperties,
  SummaryButton,
  SummaryButtonWrapper,
  StyledLink,
} from "./styles";

import { useShopContext } from "../../api/context";

import BookInCart from "../../components/BookInCart";

const Cart = () => {
  const { booksInCart } = useShopContext();

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

  return (
    <>
      <Container>
        <Wrapper>
          {/* cart here, wanna
          <Link to="/payment">payment</Link>
           */}
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
                />
              );
            })}
        </Wrapper>
        <Summary>
          <SummaryKeys>
            <span>Cena:</span>
            <span>Ilość niepowtarzających się stron:</span>
            <span>Ilość książek:</span>
            <span>Rodzaje książek:</span>
          </SummaryKeys>
          <SummaryProperties>
            {Object.keys(pricesWithCurrencies).length > 0
              ? Object.entries(pricesWithCurrencies).map((element) => {
                  return (
                    <span key={element[0]}>
                      {element[1]} {element[0]}
                    </span>
                  );
                })
              : 0}
            {<span>{sumOfPages}</span>}
            {<span>{sumOfKindsOfBooks}</span>}
            {<span>{booksInCart && booksInCart.length} książki</span>}
          </SummaryProperties>
          <SummaryButtonWrapper>
            <StyledLink as={Link} to="/">
              <SummaryButton>Powrót</SummaryButton>
            </StyledLink>
            <StyledLink as={Link} to="/payment">
              <SummaryButton>Dalej</SummaryButton>
            </StyledLink>
          </SummaryButtonWrapper>
        </Summary>
      </Container>
    </>
  );
};

export default Cart;
