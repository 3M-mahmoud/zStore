import { Box } from "@mui/material";
import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "./Hero/Hero";

export default function Home() {
  return (
    <>
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
    </>
  );
}
