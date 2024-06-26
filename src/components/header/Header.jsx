import { useMediaQuery } from "@mui/material";
import React from "react";
import DeskTopMenu from "./desktopMenu/DeskTopMenu";
import MidBar from "./midbar/MidBar";
import TopHeader from "./TopHeader/TopHeader";

export default function Header() {
  return (
    <header>
      {<TopHeader />}
      <MidBar />
      {useMediaQuery("(min-width: 1000px)") && <DeskTopMenu />}
      
    </header>
  );
}
