import Home from "pages/home/Home";
import "./app.css";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Hero from "components/header/Hero/Hero";
import TopHeader from "components/header/TopHeader/TopHeader";
import Footer from "components/Footer/Footer";
import { ColorModeContext, useMode } from "components/Theme/theme";

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

          {/* Content */}
          <TopHeader />
          <Box mb={8}></Box>
          <Box
            height={"50vh"}
            sx={{
              height: {
                xs: "20vh",
                md: "50vh",
              },
            }}
          >
            <Hero />
          </Box>

          <Home />
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;