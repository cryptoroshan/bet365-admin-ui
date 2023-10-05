interface InputProps {
  className: string,
  value: string,
  disable_value: boolean,
  onHandleChange: any
}

const Input = ({ className, value, disable_value, onHandleChange }: InputProps) => {
  return (
    <input
      type="text"
      className={className}
      value={value}
      disabled={disable_value === false ? true : false}
      onChange={(e) => onHandleChange(e.target.value)}
    />
  );
};

export default Input;
