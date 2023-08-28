import { Stack } from "@mui/material";
import { ToolbarContent } from "./style";
import { BlurBackground } from "components/BlurBackground";

interface MainToolbarProps {
  action?: React.ReactNode;
}
function MainToolbar({ action }: MainToolbarProps) {
  return (
    <div style={{ position: "relative", height: 70 }}>
      <BlurBackground
        height="70px"
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
          {action && <Stack> {action}</Stack>}
        </Stack>
      </ToolbarContent>
    </div>
  );
}

export default MainToolbar;
