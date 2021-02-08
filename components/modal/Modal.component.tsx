import { ModalPropsTypes } from './modal.types';

const Modal: React.FC<ModalPropsTypes> = ({children, isOpen, onClose}) => {
  if(!isOpen) return <></>;
  return (      
    <div>
      <p onClick={ onClose}>X</p>
      <p>Hello Modal</p>
      
      <div>
        {children}
      </div> 
    </div>    
  )
};

export default Modal;