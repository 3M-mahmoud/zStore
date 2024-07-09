import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "./Hero/Hero";
import { useTranslation } from "react-i18next";
import Categories from "./Categories/Categories";
import Content from "./content/Content";

export default function Home() {
  const { i18n } = useTranslation();

  return (
    <Box   sx={{
      direction: i18n.language === "ar" ? "rtl" : "ltr",
      overflow: "hidden"
    }}>
      <Header />
      <Hero />
      <Categories />
      <Content />
      <Footer />
    </Box>
  );
}
