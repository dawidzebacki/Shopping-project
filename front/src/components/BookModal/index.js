import React, { useState } from "react";
import {
  StyledModal,
  ModalWrapper,
  ModalCover,
  ModalTitle,
  ModalAuthor,
  ModalButton,
  ModalText,
  InputGroup,
  InputField,
  TextGroup,
} from "./styles";

const BookModal = ({
  id,
  author,
  cover,
  currency,
  pages,
  price,
  title,
  availableQuantity,
  isOpen,
  setIsOpen,
}) => {
  const [booksQuantity, setBooksQuantity] = useState(0);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const addToCart = () => {
    console.log(booksQuantity);
  };

  return (
    <>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <ModalCover src={cover} />
        <ModalWrapper>
          <ModalTitle>{title}</ModalTitle>
          <ModalAuthor>{author}</ModalAuthor>
          <TextGroup>
            <ModalText>Ilość stron: {pages},</ModalText>
            <ModalText>
              Cena za sztukę: {price} {currency}
            </ModalText>
            <ModalText>Dostępność: {availableQuantity} sztuk</ModalText>
          </TextGroup>
          <InputGroup>
            <span>Liczba sztuk</span>
            <InputField
              type="text"
              placeholder="podaj liczbę książek"
              onChange={(e) => {
                setBooksQuantity(e.target.value);
              }}
            />
          </InputGroup>
          <button onClick={addToCart}>Dodaj do koszyka</button>
        </ModalWrapper>
        <ModalButton onClick={toggleModal}>X</ModalButton>
      </StyledModal>
    </>
  );
};

export default BookModal;
