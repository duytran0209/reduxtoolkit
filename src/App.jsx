import React, { memo, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./utils/constants.jsx";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home.jsx";
const App = memo(() => {
  const { theme } = useSelector((state) => state.ui);
  const currentTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;
