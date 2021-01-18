import React from "react";
import { useShopContext } from "../../api/context";

import Book from "../../components/Book";
import { Wrapper } from "./styles";

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

      <button onClick={previousPage} disabled={actualPage <= 1}>
        prev page
      </button>
      <button onClick={nextPage} disabled={actualPage >= allPages}>
        next page
      </button>
    </>
  );
};

export default Home;
