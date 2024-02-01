import { Input, Label } from "./Filter.styled";

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contact by name
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        required
      />
    </Label>
  );
};
