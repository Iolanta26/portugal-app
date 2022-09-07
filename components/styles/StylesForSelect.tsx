import { CSSObjectWithLabel, OptionProps, StylesConfig } from "react-select";
import { theme } from "../../theme";

export const StylesForSelect: StylesConfig<any> = {
  container: (provided) => ({
    ...provided,
    ...containerStyles,
  }),
  menu: (provided) => ({
    ...provided,
    ...menuStyles,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    backgroudColor: state.isFocused && theme.colors.brownPalette,
  }),
  control: (provided) => ({
    ...provided,
    ...controlStyles,
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    color: theme.colors.darkBluePalette,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
  }),
  option: (provided, state) => ({
    ...provided,
    ...getOptionStyles(state),
  }),
  singleValue: (provided) => ({
    ...provided,
    ...singleValueStyles,
  }),
};

export const containerStyles = {
  display: "flex",
  width: "100%",
  maxWidth: "230px",
  height: "40px",
  borderRadius: "4px",
  border: "1px solid rgba(252, 183, 67, 1)",
};

export const menuStyles = {
  marginTop: "1px",
  width: "100%",
  zIndex: 10,
  borderRadius: "4px",
  overflow: "hidden",
};

export const controlStyles = {
  marginTop: "5%",
  width: "100%",
  fontSize: "12px",
  cursor: "pointer",
  margin: 0,
  boxShadow: "none",
  border: "none",
};

export const getOptionStyles = (
  state: OptionProps<Record<string, any>>
): CSSObjectWithLabel => ({
  backgroundColor: state.isSelected ? theme.colors.darkBluePalette : "white",
  color: state.isSelected
    ? "white"
    : state.isFocused
    ? theme.colors.beigePallete
    : theme.colors.brownPalette,
  fontSize: "13px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  cursor: "pointer",
  height: "35px",
  lineHeight: "15px",
  padding: "0 10px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  ":active": {
    background: "white",
  },
});

export const singleValueStyles = {
  height: "20px",
  lineHeight: "20px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
};
