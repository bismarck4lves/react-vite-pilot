import React, { PropsWithChildren } from "react";
import Toolbar from "./Toolbar";
import { Container } from "@mui/material";

function MainContainer({ children }: PropsWithChildren) {
  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <Toolbar />
      </div>
      <Container maxWidth="lg">{children}</Container>
    </div>
  );
}

export default MainContainer;
