import { Avatar, Stack, Typography } from "@mui/material";
import colors from "theme/colors";

function UserProfile() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        mr: 2,
      }}
      spacing={2}
    >
      <Avatar
        sx={{ width: 50, height: 50 }}
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <Stack>
        <Typography fontWeight="bold" color={colors.neutral1} textAlign="right">
          Walter
        </Typography>
        <Typography color={colors.neutral3} textAlign="right">
          Diretoria
        </Typography>
      </Stack>
    </Stack>
  );
}

export default UserProfile;
