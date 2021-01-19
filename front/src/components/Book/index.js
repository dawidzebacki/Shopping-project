import React, { useState, useEffect } from "react";
import { Wrapper, Cover, Title, Author } from "./styles";
import BookModal from "../BookModal";

const Book = ({
  id,
  author,
  cover,
  currency,
  pages,
  price,
  title,
  booksInCart,
  setBooksInCart,
}) => {
  const bookQuantity = JSON.parse(localStorage.getItem(id));

  const getQuantity = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [availableQuantity, setAvailableQuantity] = useState(
    getQuantity(0, 11)
  );

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (bookQuantity !== null) setAvailableQuantity(bookQuantity);
  }, [bookQuantity]);

  return (
    <>
      <Wrapper onClick={toggleModal}>
        <Cover src={cover} />
        <Title>{title}</Title>
        <Author>{author}</Author>
      </Wrapper>

      <BookModal
        id={id}
        title={title}
        author={author}
        cover={cover}
        currency={currency}
        pages={pages}
        price={price}
        availableQuantity={availableQuantity}
        setAvailableQuantity={setAvailableQuantity}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        getQuantity={getQuantity}
        booksInCart={booksInCart}
        setBooksInCart={setBooksInCart}
      />
    </>
  );
};

export default Book;
