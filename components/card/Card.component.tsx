import { CardPropsTypes } from './card.types';

const Card: React.FC<CardPropsTypes> = ({name}) => {
  return (
    <div>
      <p>Recipe name: {name}</p>
      <p>Card component</p>
    </div>
  )
}

export default Card;