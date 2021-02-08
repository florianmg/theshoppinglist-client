import { ModalPropsTypes } from './modal.types';

const Modal: React.FC<ModalPropsTypes> = ({isOpen}) => {
  if(!isOpen) return;
  return (      
    <div>
      <p>Hello Modal</p>
    </div>    
  )
};

export default Modal;