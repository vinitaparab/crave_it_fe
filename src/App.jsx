// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import { Navbar } from "./component/Navbar";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "./Theme/DarkTheme";
import Home from "./component/Home/Home";


function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Home/>
      </ThemeProvider>
    </div>
  );
}

export default App;
