import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const SubFourMenu = ({links}) => {
  const { t, i18n } = useTranslation();
  let dirMenu = `${i18n.language === "en" ? "right" : "left"}`;
  return (
    <Paper
      className="sub-three-menu"
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
            <ListItem key={link.id} disablePadding>
            <ListItemButton>
              <ListItemText primary={t(`ListMenu${link.name}`)} sx={{textAlign: `${i18n.language === "en" ? "left" : "right"}`}} />
            </ListItemButton>
          </ListItem>
          )
        }
        )}
        </List>
      </nav>
    </Paper>
  );
};

export default SubFourMenu;
