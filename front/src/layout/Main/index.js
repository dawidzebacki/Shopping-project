import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from 'styled-react-modal'
import { ShopContext } from "../../api/context";
import theme from "../../assets/styles/theme";

import Home from "../../views/Home";

const Layout = () => {
  const [books, setBooks] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [allPages, setAllPages] = useState();

  const calculatePages = (recordsPerPage, totalRecords) => {
    return Math.ceil(totalRecords / recordsPerPage);
  };

  const API_URL = `http://localhost:3001/api/`

  const fetchData = async () => {
    const response = await fetch(
      `${API_URL}book?page=${actualPage}`
    );
    const responseData = await response.json();
    console.log(responseData);
    setBooks(responseData.data);
    setAllPages(
      calculatePages(
        responseData.metadata.records_per_page,
        responseData.metadata.total_records
      )
    );
  };

  useEffect(() => {
    fetchData();
  }, [actualPage]);

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
      <ShopContext.Provider
        value={{
          books,
          allPages,
          actualPage,
          setActualPage,
        }}
      >
        <Home
          books={books}
          allPages={allPages}
          actualPage={actualPage}
          setActualPage={setActualPage}
        />
      </ShopContext.Provider>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default Layout;
