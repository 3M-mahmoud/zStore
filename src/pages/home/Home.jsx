import { Box } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";
import Hero from "./Hero/Hero";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { i18n } = useTranslation();

  return (
    <Box   sx={{
      direction: i18n.language === "ar" ? "rtl" : "ltr",
    }}>
      <Header />
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
      <Footer />
    </Box>
  );
}
