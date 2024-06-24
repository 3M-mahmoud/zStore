import { useTheme } from '@emotion/react';
import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InsightsIcon from "@mui/icons-material/Insights";
function TopHeaderPc() {
  const theme = useTheme();

  const { t, i18n } = useTranslation();

  return (
    <div> <Stack
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
      <HomeOutlinedIcon fontSize="small"  />
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
  </Stack></div>
  )
}

export default TopHeaderPc