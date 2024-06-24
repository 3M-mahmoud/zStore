import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import {  useTheme, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InsightsIcon from "@mui/icons-material/Insights";
import { useTranslation } from "react-i18next";
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
            <Stack
              direction={"row"}
              gap={2}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "center",
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"row"}
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  },
                }}
              >
                <HomeOutlinedIcon fontSize="small" />
                <Typography variant="body1">{t("TopHeaderHome")}</Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"row"}
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  },
                }}
              >
                <InsightsIcon fontSize="small" />
                <Typography variant="body1">
                  {t("TopHeaderAboutStore")}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                alignItems={"row"}
                sx={{
                  "&:hover": {
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  },
                }}
              >
                <MailOutlineIcon fontSize="small" />
                <Typography variant="body1">{t("TopHeaderContact")}</Typography>
              </Stack>
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
