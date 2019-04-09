import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";

import { GlobalProvider } from "./GlobalState/store";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { ApolloProvider } from "react-apollo";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import client from "./apollo";

import GlobalStyle from "./global-styles";

ReactDOM.render(
  <>
    <GlobalProvider>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Routes />
        </ApolloHooksProvider>
      </ApolloProvider>
      <GlobalStyle />
    </GlobalProvider>
    <ToastContainer
      draggable={true}
      position={"bottom-left"}
      hideProgressBar={true}
    />
  </>,
  document.getElementById("root")
);
