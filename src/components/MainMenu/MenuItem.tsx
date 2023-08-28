import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,

} from "@mui/material";
import React from "react";

interface MenuItemProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
}
function MenuItem({ label, icon }: MenuItemProps) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}

        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
}

export default MenuItem;
