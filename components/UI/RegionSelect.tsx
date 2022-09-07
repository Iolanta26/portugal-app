import Select from "react-select";
import { StylesForSelect } from "../styles";

export const RegionSelect = () => {
  const options = [
    { value: "Lisbon Area", label: "Lisbon Area" },
    { value: "North", label: "North" },
    { value: "Central Portugal", label: "Central Portugal" },
    { value: "Alentejo", label: "Alentejo" },
    { value: "Algarve", label: "Algarve" },
  ];

  return (
    <Select
      options={options}
      styles={StylesForSelect}
      placeholder="Choose region"
    />
  );
};
