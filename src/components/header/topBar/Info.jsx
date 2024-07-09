import { HomeOutlined, MailOutlined, StarsOutlined } from "@mui/icons-material";
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
        color: theme.palette.textColor.main,
        display: { xs: "none", md: "block" },
      }}
    >
      <Stack direction={"row"} alignItems="center" columnGap={1.5}>
        <ListItemButton
          sx={{
            "&:hover": {
              background: "none",
              color: theme.palette.primary.main,
            },
            columnGap: 0.3,
            padding: 0,
          }}
        >
          <HomeOutlined sx={{ fontSize: 18 }} />
          <Typography
            variant="body2"
            sx={{ fontSize: 13.5, lineHeight: 0, letterSpacing: 0 }}
          >
            {t("TopHeaderHome")}
          </Typography>
        </ListItemButton>
        <ListItemButton
          sx={{
            "&:hover": {
              background: "none",
              color: theme.palette.primary.main,
            },
            columnGap: 0.3,
            padding: 0,
          }}
        >
          <StarsOutlined sx={{ fontSize: 18 }} />
          <Typography
            variant="body2"
            sx={{ fontSize: 13.5, lineHeight: 0, letterSpacing: 0 }}
          >
            {t("TopHeaderAboutStore")}
          </Typography>
        </ListItemButton>
        <ListItemButton
          sx={{
            "&:hover": {
              background: "none",
              color: theme.palette.primary.main,
            },
            columnGap: 0.3,
            padding: 0,
          }}
        >
          <MailOutlined sx={{ fontSize: 18 }} />
          <Typography
            variant="body2"
            sx={{ fontSize: 13.5, lineHeight: 0, letterSpacing: 0 }}
          >
            {t("TopHeaderContact")}
          </Typography>
        </ListItemButton>
      </Stack>
    </Box>
  );
};

export default Info;
