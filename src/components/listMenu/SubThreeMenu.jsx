import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import SubFourMenu from "./SubFourMenu";
import { useTranslation } from "react-i18next";

const SubThreeMenu = ({links}) => {
  const { t, i18n } = useTranslation();
  let dirMenu = `${i18n.language === "en" ? "right" : "left"}`;
  return (
    <Paper
      className="sub-two-menu"
      sx={{
        position: "absolute",
        zIndex: 9999,
        width: "150px",
        borderRadius: 0,
        [dirMenu]: -150,
        top: 0,
        boxShadow: "0 2px 4px #ddd",
      }}
    >
      <nav aria-label="secondary mailbox folders">
        <List sx={{ display: "flex", flexDirection: "column", padding: 0 }}>
        {links.map((link) => {
          return (
            <ListItem key={link.id} className="sub-three-link" disablePadding sx={{ position: "relative" }}>
            <ListItemButton
            sx={i18n.language === "en" ? {paddingRight: 0} : {paddingLeft: 0}}
            >
              <ListItemText primary={t(`ListMenu${link.name}`)} sx={{textAlign: `${i18n.language === "en" ? "left" : "right"}`}} />
              {link.subLink.length ? (
                i18n.language === "en" ? <ArrowRight sx={{ fontSize: 16 }} />: <ArrowLeft sx={{ fontSize: 16 }} />
              ) : null}
            </ListItemButton>
            <SubFourMenu links={link.subLink} />
          </ListItem>
          )
        }
        )}
        </List>
      </nav>
    </Paper>
  );
};

export default SubThreeMenu;
