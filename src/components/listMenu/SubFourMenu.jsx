import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";

const SubFourMenu = ({links}) => {
  return (
    <Paper
      className="sub-three-menu"
      sx={{
        position: "absolute",
        zIndex: 9999,
        width: "150px",
        borderRadius: 0,
        right: -150,
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
              <ListItemText primary={link.name} />
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
