import { useMediaQuery } from "@mui/material";
import React from "react";
import DeskTopMenu from "./desktopMenu/DeskTopMenu";
import MidBar from "./midbar/MidBar";
import TopBar from "./topBar/TopBar";
// import TopHeader from "./TopHeader/TopHeader";

export default function Header() {
  return (
    <header>
      {<TopBar />}
      <MidBar />
      {useMediaQuery("(min-width: 1000px)") && <DeskTopMenu />}
      
    </header>
  );
}
