import React from "react";
import {
  Wrapper,
  Title,
  Text,
  Button,
} from "./styles";

import { useShopContext } from '../../api/context';

const BookInCart = ({id, author, currency, pages, price, title, quantity }) => {

  const { booksInCart, setBooksInCart } = useShopContext();

  const deleteFromCart = () => {
    const restOfBooksInCart = [...booksInCart].filter((element) => id !== element.id );
    const bookQuantity = JSON.parse(localStorage.getItem(id));
    localStorage.setItem(id, JSON.stringify(bookQuantity + quantity));
    localStorage.setItem('books', JSON.stringify(restOfBooksInCart));
    setBooksInCart(restOfBooksInCart);
  }

  return (
    <>
      <Wrapper >
        <Title>{title}</Title>
        <Text>{author}</Text>
        <Text>Cena za sztukę: {price} {currency}</Text>
        <Text>{pages} stron</Text>
        <Text>Ilość: {quantity}</Text>
        <Button onClick={deleteFromCart}>X</Button>
      </Wrapper>
    </>
  );
};

export default BookInCart;
