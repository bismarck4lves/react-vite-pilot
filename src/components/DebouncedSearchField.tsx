import React, { useCallback, useMemo, useState } from "react";
import { RoundedTextField } from "./Forms/TextField";
import { TextFieldProps } from "@mui/material/TextField";
import { CircularProgress, IconButton, Stack, debounce } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface AdornmentContentProps {
  loading: boolean;
  value: string;
  onClear?: () => unknown;
}
function AdornmentContent({ loading, value, onClear }: AdornmentContentProps) {
  return (
    <Stack spacing={1} direction="row" alignItems="center">
      {value && (
        <IconButton onClick={onClear}>
          <CloseIcon />
        </IconButton>
      )}
      {loading ? (
        <CircularProgress color="inherit" size={20} />
      ) : (
        <InputAdornment position="start">
          <SearchIcon sx={{ color: "black" }} />
        </InputAdornment>
      )}
    </Stack>
  );
}
export type CustomTextFieldProps = {
  rounded?: boolean;
} & TextFieldProps;

export interface SearchFieldProps {
  onSearch?: (val) => unknown;
  onClear?: () => unknown;
  textFieldProps?: CustomTextFieldProps;
  debounceTime?: number;
  allowBlankAction?: boolean;
  loading?: boolean;
}

function DebouncedSearchField({
  debounceTime = 300,
  onSearch,
  onClear,
  loading = false,
  allowBlankAction = false,
  textFieldProps,
}: SearchFieldProps) {
  const [value, setValue] = useState("");

  const onHandleSearch = useCallback((event) => {
    const value = event.target.value;
    setValue(value);
    if (allowBlankAction) {
      onSearch(value);
    } else {
      if (value !== "") {
        onSearch(value);
      }
    }
  }, []);

  const onHandleClear = () => {
    setValue("");
    if (onClear) {
      onClear();
    }
  };

  const debouncedEventHandler = useMemo(
    () => debounce(onHandleSearch, debounceTime),
    [onHandleSearch]
  );

  return (
    <RoundedTextField
      value={value}
      {...textFieldProps}
      onChange={(event) => {
        setValue(event.target.value);
        debouncedEventHandler(event);
      }}
      InputProps={{
        endAdornment: (
          <AdornmentContent
            loading={loading}
            value={value}
            onClear={onHandleClear}
          />
        ),
      }}
    />
  );
}

export default DebouncedSearchField;
