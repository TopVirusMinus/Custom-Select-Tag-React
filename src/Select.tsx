import CSS from "./select.module.css";

type SelectOption = {
  label: string;
  value: any;
};

type SelectProps = {
  value?: SelectOption;
  options: SelectOption[];
  onChange: (value: SelectOption | undefined) => void;
};

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <div tabIndex={0} className={CSS.container}>
      <div className={CSS.value}>Value</div>
      <button className={CSS["clear-btn"]}>&times;</button>
      <button className={CSS.divider}></button>
      <button className={CSS.caret}></button>
      <div className={CSS.options}>
        {options.map((option) => {
          return (
            <li key={option.value} className={CSS.option}>
              {option.label}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
