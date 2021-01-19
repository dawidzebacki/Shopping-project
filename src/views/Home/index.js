import React from "react";
import { useShopContext } from "../../api/context";

import Book from "../../components/Book";
import { MainTitle } from "../../components/StyledComponents/styles";
import { Container, Wrapper, WrapperButtons, Button } from "./styles";

const Home = () => {
  const {
    books,
    actualPage,
    allPages,
    setActualPage,
    loadingData,
    booksInCart,
    setBooksInCart,
  } = useShopContext();

  const nextPage = () => {
    setActualPage(actualPage + 1);
  };

  const previousPage = () => {
    setActualPage(actualPage - 1);
  };

  return (
    <Container>
      <MainTitle>Lista książek</MainTitle>
      <Wrapper>
        {books.map((book) => {
          const { id, author, cover_url, currency, pages, price, title } = book;
          return (
            <Book
              key={id}
              id={id}
              author={author}
              cover={cover_url}
              currency={currency}
              pages={pages}
              price={price}
              title={title}
              booksInCart={booksInCart}
              setBooksInCart={setBooksInCart}
            />
          );
        })}
        {books.length === 0 && loadingData === "true" && (
          <MainTitle>Ładowanie danych...</MainTitle>
        )}
        {books.length === 0 && loadingData === "error" && (
          <MainTitle>Błąd w ładowaniu danych.</MainTitle>
        )}
      </Wrapper>

      <WrapperButtons>
        <Button onClick={previousPage} disabled={actualPage <= 1}>
          Prev page
        </Button>
        <Button onClick={nextPage} disabled={actualPage >= allPages}>
          Next page
        </Button>
      </WrapperButtons>
    </Container>
  );
};

export default Home;
