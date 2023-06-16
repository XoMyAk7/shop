import { FC } from 'react'

interface IItem {
  item: {
    id: number;
    title: string;
    img: string;
    desc: string;
    category: string;
    price: string;
  }
}

const Item: FC<IItem> = ({item}) => {
  return (
    <div className='item'>
      <img src={"./img/" + item.img} alt={"item.title"} />
      <div className='item-descr'>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}₽</b>
        <div className='add-to-card'>+</div>
      </div>
    </div>
  )
}

export default Item