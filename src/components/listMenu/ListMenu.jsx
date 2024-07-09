import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import SubListMenu from "./SubListMenu";

const ListMenu = ({ Links }) => {
  const { t, i18n } = useTranslation();
  return (
    <Paper
      className="list-menu"
      sx={{
        position: "absolute",
        zIndex: 9999999,
        width: "150px",
        borderRadius: 0,
      }}
    >
      <nav aria-label="secondary mailbox folders">
        <List sx={{ display: "flex", flexDirection: "column", padding: 0}}>
          {Links.map((link) => {
            return (
              <ListItem
                key={link.id}
                className="sub-link"
                disablePadding
                sx={{ position: "relative" }}
              >
                <ListItemButton
                className="button-link"
                sx={i18n.language === "en" ? {paddingRight: 0} : {paddingLeft: 0}}
                >
                  <ListItemText primary={t(`ListMenu${link.name}`)} sx={{fontSize: 20, textAlign: `${i18n.language === "en" ? "left" : "right"}`}} />
                  {link.subLink.length ? (
                    i18n.language === "en" ? <ArrowRight sx={{ fontSize: 16 }} />: <ArrowLeft sx={{ fontSize: 16 }} />
                  ) : null}
                </ListItemButton>
                <SubListMenu links={link.subLink} />
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Paper>
  );
};

export default ListMenu;
