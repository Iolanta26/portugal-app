import { Input, InputProps } from "./Input";

type Props = Omit<InputProps, "type" | "accept" | "onChange"> & {
  onChange: (file: File | null) => void;
};

export const ImageInput = ({ onChange, ...inputProps }: Props) => (
  <Input
    {...inputProps}
    type="file"
    accept="image/*"
    onChange={(event) => {
      const file = event.target.files && event.target.files[0];
      onChange(file);
    }}
  />
);
