import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";
import { theme } from "../../theme";

const DEFAULT_SX = {
  "& .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${theme.colors.orangePalette}`,
    borderRadius: "5px",
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    "& > fieldset": {
      borderColor: `${theme.colors.orangePalette}`,
    },
  },
  "& label.Mui-focused": {
    color: `${theme.colors.orangePalette}`,
  },
  ".MuiOutlinedInput-root": {
    display: "flex",
    alignItems: "center",
    height: "40px",
    width: "230px",
    fontSize: "12px",
    fontFamily: "Quicksand",
  },
};

const DEFAULT_INPUT_LABEL_PROPS = {
  style: {
    fontSize: "12px",
    fontFamily: "Quicksand",
    display: "flex",
    alignItems: "center",
  },
};

export const GeneralInput = forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => (
    <MuiTextField
      {...props}
      fullWidth={true}
      InputLabelProps={{
        ...DEFAULT_INPUT_LABEL_PROPS,
        ...props.InputLabelProps,
      }}
      sx={{ ...DEFAULT_SX, ...props.sx }}
      ref={ref}
    />
  )
);

GeneralInput.displayName = "GeneralInput";
