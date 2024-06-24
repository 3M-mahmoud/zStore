import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import { useTheme, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useTranslation } from "react-i18next";
import TopHeaderPc from "./TopHeaderPC/TopHeaderPc";
import TopHeaderMobile from "./TopHeaderMobile/TopHeaderMobile";
function TopHeader() {
  const theme = useTheme();
  const [lang, setLang] = React.useState("en");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <>
      <Box>
        <Container maxWidth="lg">
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            // textAlign={"start"}
            sx={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
            }}
          >
            {/* pc */}
            <TopHeaderPc />

            {/* mobile */}
            <TopHeaderMobile />

            <Stack direction={"row"} gap={1} alignItems={"center"}>
              {/* Select Language */}
              <FormControl FormControl fullWidth placeholder={lang}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={lang}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    maxHeight: "40px",
                  }}
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
      </Box>
    </>
  );
}

export default TopHeader;
