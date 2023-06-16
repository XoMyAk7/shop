import { FC } from 'react'
import Item from './Item';

interface IItems {
  items: {
    id: number;
    title: string;
    img: string;
    desc: string;
    category: string;
    price: string;
  }[]
}

const Items: FC<IItems> = ({items}) => {
  return (
    <main>
      {items.map(el => 
        <Item key={el.id} item={el} />
      )}
    </main>
    )
}

export default Items