import React from "react";
import DeskTopMenu from "./desktopMenu/DeskTopMenu";
import MidBar from "./midbar/MidBar";
import TopHeader from "./TopHeader/TopHeader";

export default function Header() {
  return (
    <div>
      <TopHeader />
      <MidBar />
      <DeskTopMenu />
    </div>
  );
}
