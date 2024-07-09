import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import MainSlider from "../mainSlider/MainSlider";

const ContentProducts = ({name, site, products }) => {
  const { t, i18n } = useTranslation();
  return (
    <Box sx={{ py: 5 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          component="h3"
          variant="h3"
          className={`${site === "left" ? "main-heading-left" : "main-heading-bottom"} ${i18n.language === "ar" ? "main-heading-ar" : null}`} 
          sx={{
            textTransform: "uppercase",
            fontSize: "25px",
            fontWeight: "bold",
            color: "#047AC2",
            letterSpacing: "1px",
            lineHeight: "0",
            position: "relative",
          }}
        >
          {t(`mainHeading${name}`)}
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            textTransform: "uppercase",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            "&:hover": {color: "#047AC2"}
          }}
        >
          {t("contentProductSpan")}
        </Typography>
      </Stack>
      <Box sx={{pt: 6}}>
      <MainSlider numPerGroup={3} numPerView={5} products={products} type={"products"} />
      </Box>
    </Box>
  );
};

export default ContentProducts;
