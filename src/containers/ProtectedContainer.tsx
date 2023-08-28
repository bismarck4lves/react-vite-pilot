import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import MainToolbar from "components/MainToolbar";
import UserProfile from "components/UserProfile";
import MainMenu from "components/MainMenu";
import { Container, Stack } from "@mui/material";

const drawerWidth = 220;

export default function ClippedDrawer({ children }: React.PropsWithChildren) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: "white",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <MainToolbar action={<UserProfile />} />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Stack
          sx={{
            margin: '10px 5px'
          }}
        >
          <MainMenu />
        </Stack>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container maxWidth="lg">
        {children}
        </Container>
      </Box>
    </Box>
  );
}
