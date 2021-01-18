import React from "react";
import { useShopContext } from "../../api/context";

import Book from "../../components/Book";
import { Wrapper, WrapperButtons, Button } from "./styles";

const Home = () => {
  const { books, actualPage, allPages, setActualPage } = useShopContext();

  const nextPage = () => {
    setActualPage(actualPage + 1);
  };

  const previousPage = () => {
    setActualPage(actualPage - 1);
  };

  return (
    <>
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
            />
          );
        })}
      </Wrapper>

      <WrapperButtons>
        <Button onClick={previousPage} disabled={actualPage <= 1}>
          Prev page
        </Button>
        <Button onClick={nextPage} disabled={actualPage >= allPages}>
          Next page
        </Button>
      </WrapperButtons>
    </>
  );
};

export default Home;
