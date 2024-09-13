import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import JobBoard from "./components/JobBoard";
import { deepmerge } from "@mui/utils";
import CssBaseline from "@mui/material/CssBaseline";
import { UpdateTheme } from "./components/Theme";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const themeMode = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  const mergedTheme = deepmerge(UpdateTheme, themeMode);
  const handleSwitch = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={mergedTheme}>
      <CssBaseline />
      <JobBoard handleSwitch={handleSwitch} darkMode={darkMode} />
    </ThemeProvider>
  );
}
