import { AccountCircleOutlined, PersonAddAltOutlined } from "@mui/icons-material";
import {
  Box,
  ListItemButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const Info = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  return (
    <Box
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      <Stack direction={"row"} alignItems="center" columnGap={2}>
        <ListItemButton
          sx={{
            "&:hover": {
              background: "none",
            },
            columnGap: 0.5,
            padding: 0,
          }}
        >
          <AccountCircleOutlined sx={{ fontSize: 18 }} />
          <Typography
            variant="body2"
            sx={{ fontSize: 15, lineHeight: 0, letterSpacing: 0 }}
          >
            {t("login")}
          </Typography>
        </ListItemButton>
        <ListItemButton
          sx={{
            "&:hover": {
              background: "none",
            },
            columnGap: 0.5,
            padding: 0,
          }}
        >
          <PersonAddAltOutlined sx={{ fontSize: 18 }} />
          <Typography
            variant="body2"
            sx={{ fontSize: 15, lineHeight: 0, letterSpacing: 0 }}
          >
            {t("register")}
          </Typography>
        </ListItemButton>
      </Stack>
    </Box>
  );
};

export default Info;