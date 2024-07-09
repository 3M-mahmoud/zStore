
import "./app.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./components/Theme/theme";
import Home from "./pages/home/Home";
import { useTranslation } from "react-i18next";
function App() {
  const [theme, colorMode] = useMode();
  const { t, i18n } = useTranslation();


  return (
    <div className={`${i18n.language === "ar" ? "app-ar" : "App"}`}>
          <ColorModeContext.Provider 
// @ts-ignore
          value={colorMode}>
        <ThemeProvider 
// @ts-ignore
        theme={theme}>
          <CssBaseline />
          <Home />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;