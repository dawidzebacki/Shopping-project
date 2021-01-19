import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import { ShopContext } from "../../api/context";
import theme from "../../assets/styles/theme";
import ScrollToTop from "../../routes";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Store from "../../pages/Store";
import Cart from "../../pages/Cart";
import Payment from "../../pages/Payment";
import Navbar from "../../views/Navbar";
import Footer from "../../views/Footer";

const Layout = () => {
  const booksInStorage = JSON.parse(localStorage.getItem("books"));
  const [books, setBooks] = useState([]);
  const [booksInCart, setBooksInCart] = useState(booksInStorage || []);
  const [booksInCache, setBooksInCache] = useState({});
  const [actualPage, setActualPage] = useState(1);
  const [allPages, setAllPages] = useState();
  const [loadingData, setLoadingData] = useState("true");

  setTimeout(() => {
    if (books.length === 0) {
      setLoadingData("error");
    } else setLoadingData("false");
  }, 5000);

  const calculatePages = (recordsPerPage, totalRecords) => {
    return Math.ceil(totalRecords / recordsPerPage);
  };

  const API_URL = `http://localhost:3001/api/`;

  const fetchData = async () => {
    const response = await fetch(`${API_URL}book?page=${actualPage}`);
    const responseData = await response.json();
    console.info("Pobrano dane:", responseData);
    setBooks(responseData.data);
    setAllPages(
      calculatePages(
        responseData.metadata.records_per_page,
        responseData.metadata.total_records
      )
    );
    setLoadingData("false");
  };

  const postData = async (data = {}) => {
    const response = await fetch(`${API_URL}order`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.info("Wysłano dane:", responseData);
    return responseData;
  };

  const cacheBooks = () => {
    if (!booksInCache.hasOwnProperty(actualPage)) {
      const obj = JSON.parse(JSON.stringify(booksInCache));
      obj[actualPage] = books;
      setBooksInCache(obj);
    }
  };

  useEffect(() => {
    if (booksInCache.hasOwnProperty(actualPage)) {
      setBooks(booksInCache[actualPage]);
    } else {
      fetchData();
    }
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPage]);

  useEffect(() => {
    if (books.length > 1) cacheBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [books]);

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
            loadingData,
          }}
        >
          <Router>
            <ScrollToTop />
            <Navbar />
            <Switch>
              <Route path="/payment" component={Payment} />
              <Route exact path="/" component={Store} />
              <Route path="/cart" component={Cart} />
              <Redirect to="/" />
            </Switch>
            <Footer />
          </Router>
        </ShopContext.Provider>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default Layout;
