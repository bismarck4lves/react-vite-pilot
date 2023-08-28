import { useRef, useState, forwardRef } from "react";
import { Stack } from "@mui/material";
import { isNumber } from "utils/math";
import MuiTextField, { TextFieldProps } from "@mui/material/TextField";
import { styled } from "@mui/material";


export const TextField = styled(MuiTextField)(({ theme }) => ({
  width: 60,
  "& input": {
    color: theme.palette.primary.main,
    fontSize: 24,
    fontWeight: 700
  },
}));

export const InputCode = forwardRef((props:TextFieldProps, ref) => {
  return <TextField ref={ref} {...props} />;
});

interface DividedFieldProps {
  size: number;
  onChange: (value) => unknown;
  onlyNumbers?: boolean;
}
function DividedField({
  size,
  onlyNumbers = true,
  onChange,
}: DividedFieldProps) {
  const [code, setCode] = useState(new Array(size).fill(""));
  const inputRefs = useRef([]);

  const handleInputChange = (index, event) => {
    const newValue = event.target.value.slice(0, 1);
    if (onlyNumbers && !isNumber(newValue)) {
      return;
    }
    const newCode = [...code];
    newCode[index] = newValue;
    setCode(newCode);
    onChange(newCode);
    if (newValue !== "") {
      inputRefs?.current[index + 1].focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("text").slice(0, 5);

    const newCode = [...code];
    pastedData.split("").forEach((char, index) => {
      newCode[index] = char;
    });
    setCode(newCode);
    onChange(newCode);
  };

  return (
    <Stack
      spacing={1}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      {code.map((_, index) => (
        <InputCode
          key={index}
          value={code[index]}
          onChange={(event) => handleInputChange(index, event)}
          ref={(input) => (inputRefs.current[index] = input)}
          onPaste={handlePaste}
        />
      ))}
    </Stack>
  );
}

export default DividedField;
