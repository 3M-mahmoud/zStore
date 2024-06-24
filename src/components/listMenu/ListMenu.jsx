import { ArrowRight } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import React from "react";
import SubListMenu from "./SubListMenu";

const ListMenu = ({Links}) => {
  return (
    <Paper className="list-menu" sx={{ position: "absolute", zIndex: 9999999, width: "150px", borderRadius: 0}}>
      <nav aria-label="secondary mailbox folders">
        <List sx={{display: "flex", flexDirection: "column", padding: 0,}}>
        {Links.map((link) => {
          return (
            <ListItem key={link.id} className="sub-link" disablePadding sx={{position: "relative"}}>
            <ListItemButton>
              <ListItemText primary={link.name} />
              {link.subLink.length > 0 ? <ArrowRight sx={{fontSize: 16}}/> : null}
            </ListItemButton>
            <SubListMenu links={link.subLink} />
          </ListItem>
          )
        }
        )}
        </List>
      </nav>
    </Paper>
  );
};

export default ListMenu;
