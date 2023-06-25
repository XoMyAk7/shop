import { FC } from "react";
import { FaTrash } from "react-icons/fa"

interface IOrder {
  item: {
    id: number;
    title: string;
    img: string;
    desc: string;
    category: string;
    price: string;
  };
  onRemove(itemId: number): void;
}

const Order: FC<IOrder> = ({ item, onRemove }) => {
  return (
    <div className="order-item">
      <div className="order-item__info">
        <img src={"./img/" + item.img} alt={"item.title"} />
        <div className="order-descr">
          <h2>{item.title}</h2>
          <b>{item.price} ₽/шт</b>
        </div>
      </div>
      <FaTrash onClick={() => onRemove(item.id)} className="delete-icon" />
    </div>
  );
};

export default Order;
