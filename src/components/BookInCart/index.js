import React from "react";
import { Wrapper, Title, Text, Button, StyledLine } from "./styles";
import { getCorrectVariety } from "../../utils";

const BookInCart = ({
  id,
  author,
  currency,
  pages,
  price,
  title,
  quantity,
  booksInCart,
  setBooksInCart,
}) => {
  const deleteFromCart = () => {
    const restOfBooksInCart = [...booksInCart].filter(
      (element) => id !== element.id
    );
    const bookQuantity = JSON.parse(localStorage.getItem(id));
    localStorage.setItem(id, JSON.stringify(bookQuantity + quantity));
    localStorage.setItem("books", JSON.stringify(restOfBooksInCart));
    setBooksInCart(restOfBooksInCart);
  };

  return (
    <>
      <Wrapper>
        <Title>{title}</Title>
        <Text>{author}</Text>
        <Text>
          Cena za sztukę: {price} {currency}
        </Text>
        <Text>
          {pages} {getCorrectVariety(pages, "strona")}
        </Text>
        <Text>
          Ilość: {quantity} {getCorrectVariety(quantity, "sztuka")}
        </Text>
        <StyledLine />
        <Button onClick={deleteFromCart}>Usuń pozycję</Button>
      </Wrapper>
    </>
  );
};

export default BookInCart;
