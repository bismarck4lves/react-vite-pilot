import React from "react";
import MenuItem from "./MenuItem";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { List } from "@mui/material";

function MainMenu() {
  return (
    <List>
      <MenuItem label="Importações" icon={<AssignmentIcon />} />
    </List>
  );
}

export default MainMenu;
