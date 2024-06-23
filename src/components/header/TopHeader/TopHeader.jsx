import React, { useContext } from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { ColorModeContext } from "../../Theme/theme";
import { IconButton, useTheme, Button } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useTranslation } from "react-i18next";
function TopHeader() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [lang, setLang] = React.useState("en");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  const { t, i18n } = useTranslation();
  return (
    <>
      <AppBar color="primary">
        <Container maxWidth="lg" className="bo">
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* pc */}
            <Stack
              direction={"row"}
              gap={2}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <Typography variant="h6">home</Typography>
              <Typography variant="h6">home</Typography>
              <Typography variant="h6">home</Typography>
            </Stack>
            {/* mobile */}
            <Stack
              direction={"row"}
              gap={0.5}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <Button
                variant="text"
                sx={{
                  fontSize: "12px",
                  color: "#fff",
                }}
              >
                Rigstar
              </Button>
              <Button
                variant="text"
                sx={{
                  fontSize: "12px",
                  color: "#fff",
                }}
              >
                log in
              </Button>
            </Stack>
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              {/* Select themeMode */}
              <>
                {theme.palette.mode === "light" ? (
                  <IconButton
                    onClick={() => {
                      localStorage.setItem(
                        "mode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );
                      colorMode.toggleColorMode();
                    }}
                    color="inherit"
                  >
                    <LightModeOutlined />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      localStorage.setItem(
                        "mode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );
                      colorMode.toggleColorMode();
                    }}
                    color="inherit"
                  >
                    <DarkModeOutlined />
                  </IconButton>
                )}
              </>

              {/* Select Language */}
              <FormControl FormControl fullWidth placeholder={lang}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={lang}
                  onChange={handleChange}
                  variant="outlined"
                >
                  <MenuItem
                    value={"en"}
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                  >
                    🇬🇧 Englich
                  </MenuItem>
                  <MenuItem
                    value={"ge"}
                    onClick={() => {
                      i18n.changeLanguage("de");
                    }}
                  >
                    🇩🇪 Deutsche
                  </MenuItem>
                  <MenuItem
                    value={"ar"}
                    onClick={() => {
                      i18n.changeLanguage("ar");
                    }}
                  >
                    🇪🇬 العربيه
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Stack>
        </Container>
      </AppBar>
    </>
  );
}

export default TopHeader;
