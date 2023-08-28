import TextField, { CustomTextFieldProps as TextFieldProps } from "./TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

function SearchField(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchField;
