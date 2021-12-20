import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/theme";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>,
  rootElement
);
