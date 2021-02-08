import { InputPropsTypes } from './input.types';

const Input: React.FC<InputPropsTypes> = ({type, label, onChange, value, name}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} type={type} value={value} onChange={({target}) => onChange(target.value)} />
    </div>
  )
};

export default Input;