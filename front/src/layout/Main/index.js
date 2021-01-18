import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import { ShopContext } from "../../api/context";
import theme from "../../assets/styles/theme";
import ScrollToTop from "../../routes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Store from "../../pages/Store";
import Cart from "../../pages/Cart";
import Payment from "../../pages/Payment";
import Navbar from "../../views/Navbar";
import Footer from "../../views/Footer";

const Layout = () => {
  const [books, setBooks] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [allPages, setAllPages] = useState();
  const booksInStorage = JSON.parse(localStorage.getItem('books'));
  const [booksInCart, setBooksInCart] = useState(booksInStorage || []);

  const calculatePages = (recordsPerPage, totalRecords) => {
    return Math.ceil(totalRecords / recordsPerPage);
  };

  const API_URL = `http://localhost:3001/api/`;

  const fetchData = async () => {
    const response = await fetch(`${API_URL}book?page=${actualPage}`);
    const responseData = await response.json();
    setBooks(responseData.data);
    setAllPages(
      calculatePages(
        responseData.metadata.records_per_page,
        responseData.metadata.total_records
      )
    );
  };

  async function postData(data = {}) {
    // Default options are marked with *
    const response = await fetch(`${API_URL}order`, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })
    return response.json();
  }

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
            booksInCart,
            setBooksInCart,
            setActualPage,
            postData,
          }}
        >
          <Router>
            <ScrollToTop />
            <Navbar />

            <Switch>
              <Route path="/payment" component={Payment} />
              <Route exact path="/" component={Store} />
              <Route path="/cart" component={Cart} />
              {/* <Route path="*" component={NotFound} /> */}
            </Switch>
            <Footer />
          </Router>
        </ShopContext.Provider>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default Layout;
