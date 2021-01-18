import React, { useState } from "react";
import {
  Wrapper,
  Cover,
  Title,
  Author,
} from "./styles";
import BookModal from '../BookModal';

const Book = ({id, author, cover, currency, pages, price, title }) => {

  const bookQuantity = JSON.parse(localStorage.getItem(id));

  const getQuantity = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [availableQuantity, setAvailableQuantity] = useState(bookQuantity || getQuantity(0,11))

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

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
      />
    </>
  );
};

export default Book;
