import { Stack } from "@mui/material";
import React from "react";
import { ToolbarContent } from "./style";
import { BlurBackground } from "components/BlurBackground";

function Toolbar() {
  return (
    <div style={{ position: "relative", height: 100 }}>
      <BlurBackground
        height="100px"
        width="100%"
        imageUrl="/header-backgroud.svg"
      />
      <ToolbarContent>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Stack sx={{ p: 2 }}>
            <img src="/min-logo.svg" />
          </Stack>
        </Stack>
      </ToolbarContent>
    </div>
  );
}

export default Toolbar;
