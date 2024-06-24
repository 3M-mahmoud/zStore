import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import SubThreeMenu from "./SubThreeMenu";

const SubListMenu = ({links}) => {
  return (
    <Paper
    className="sub-menu"
      sx={{
        position: "absolute",
        zIndex: 9999,
        width: "150px",
        borderRadius: 0,
        right: -150.3,
        top: 0,
        boxShadow: "0 2px 4px #ddd"
      }}
    >
      <nav aria-label="secondary mailbox folders">
        <List sx={{ display: "flex", flexDirection: "column", padding: 0 }}>
        {links.map((link) => {
          return (
            <ListItem key={link.id} className="sub-two-link" disablePadding sx={{ position: "relative" }}>
            <ListItemButton>
              <ListItemText primary={link.name} />
              {link.subLink.length > 0 ? <ArrowRight sx={{fontSize: 16}}/> : null}
            </ListItemButton>
            <SubThreeMenu links={link.subLink} />
          </ListItem>
          )
        }
        )}
        </List>
      </nav>
    </Paper>
  );
};

export default SubListMenu;
