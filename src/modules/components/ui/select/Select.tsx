import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@material-ui/core";
import { OptionSelect } from "src/models/ui";

interface SelectProps {
  defaultValue: string | number;
  helperText: any;
  idSelect?: string;
  label: string;
  name: string;
  options: OptionSelect[];
  error: boolean | undefined;
  onBlur: (event: any) => void;
  onChange: (event: any) => void;
}

const UISelect: React.FC<SelectProps> = ({
  defaultValue,
  helperText,
  idSelect= "native-simple",
  name,
  label,
  options,
  error,
  onBlur,
  onChange,
}) => {
  return (
    <FormControl variant="outlined">
      <InputLabel
        htmlFor={idSelect}
        className={
          defaultValue ? "MuiInputLabel-shrink MuiFormLabel-filled" : undefined
        }
      >
        {label}
      </InputLabel>
      <Select
        native
        value={defaultValue}
        onChange={onChange}
        label={label}
        inputProps={{
          name: name,
          id: idSelect
        }}
        onBlur={onBlur}
      >
        <option value="" disabled key="empty" />
        {options.map(({ label, key }) => (
          <option value={key} key={key}>
            {label}
          </option>
        ))}
      </Select>
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export { UISelect };
