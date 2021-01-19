import React, { useState, useEffect } from "react";
import {
  Error,
  Success,
  InputGroup,
  InputField,
} from "../StyledComponents/styles";
import {
  StyledModal,
  StyledLine,
  ModalWrapper,
  ModalCover,
  ModalTitle,
  ModalAuthor,
  ModalButton,
  ModalText,
  TextGroup,
  AddToCartButton,
} from "./styles";

import { getCorrectVariety } from "../../utils";

const BookModal = ({
  id,
  author,
  cover,
  currency,
  pages,
  price,
  title,
  availableQuantity,
  setAvailableQuantity,
  isOpen,
  setIsOpen,
  booksInCart,
  setBooksInCart,
}) => {
  const [booksQuantity, setBooksQuantity] = useState(0);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const toggleModal = () => {
    setSuccess();
    setError();
    setIsOpen(!isOpen);
    if (availableQuantity <= 0) setError("Produkt niedostępny.");
  };

  const addBook = () => {
    const bookObj = {
      id: id,
      title: title,
      author: author,
      quantity: Number(booksQuantity),
      pages: pages,
      price: price,
      currency: currency,
    };

    for (let i = 0; i < booksInCart.length; i++) {
      if (booksInCart[i]["id"] === bookObj.id) {
        booksInCart[i]["quantity"] += bookObj.quantity;
        localStorage.setItem("books", JSON.stringify(booksInCart));
        return;
      }
    }

    setBooksInCart([...booksInCart, bookObj]);
    localStorage.setItem("books", JSON.stringify([...booksInCart, bookObj]));
  };

  const addToCart = () => {
    if (availableQuantity <= 0) {
      setError("Produkt niedostępny.");
      setSuccess();
    } else if (booksQuantity > availableQuantity) {
      setError("Podaj liczbę nie większą niż dostępna liczba książek.");
      setSuccess();
    } else if (booksQuantity <= 0 || !booksQuantity) {
      setError("Podaj liczbę większą niż 0.");
      setSuccess();
    } else if (booksQuantity % 1 !== 0) {
      setError("Podaj liczbę całkowitą.");
      setSuccess();
    } else {
      setError();
      setSuccess("Produkt został dodany do koszyka.");
      setAvailableQuantity(availableQuantity - booksQuantity);
      localStorage.setItem(
        id,
        JSON.stringify(availableQuantity - booksQuantity)
      );
      addBook(id);
    }
  };

  useEffect(() => {
    if (availableQuantity <= 0 && !success) setError("Produkt niedostępny.");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableQuantity]);

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
          <StyledLine />
          <TextGroup>
            <ModalText>
              Ilość stron <br /> {pages}
            </ModalText>
            <ModalText>
              Cena za sztukę <br /> {price} {currency}
            </ModalText>
            <ModalText>
              Dostępność <br /> {availableQuantity}{" "}
              {getCorrectVariety(availableQuantity, "sztuka")}
            </ModalText>
          </TextGroup>
          <StyledLine />
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
          <AddToCartButton onClick={addToCart}>
            Dodaj do koszyka
          </AddToCartButton>
          {error && <Error>{error}</Error>}
          {success && <Success>{success}</Success>}
        </ModalWrapper>
        <ModalButton onClick={toggleModal}>X</ModalButton>
      </StyledModal>
    </>
  );
};

export default BookModal;
