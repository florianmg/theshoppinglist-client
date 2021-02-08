import { SelectPropsTypes } from './select.types';

const Select: React.FC<SelectPropsTypes> = ({label, name}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <select name={name}>

      </select>
    </div>
  )
};

export default Select;