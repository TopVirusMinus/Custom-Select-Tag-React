type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  value?: SelectOption;
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
};
const Select = ({ value, onChange, options }: SelectProps) => {
  return <input type="select" />;
};

export default Select;
