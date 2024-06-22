
import "./app.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./components/Theme/theme";
import Home from "./pages/home/Home";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <div className="App">
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