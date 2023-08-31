import { FC } from "react";
import { FaTrash } from "react-icons/fa"
import { useActions } from "../hooks/useActions";

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
  const {decrement} = useActions();

  return (
    <div className="order-item">
      <div className="order-item__info">
        <img src={"./img/" + item.img} alt={"item.title"} />
        <div className="order-descr">
          <h2>{item.title}</h2>
          <b>{item.price} ₽/шт</b>
        </div>
      </div>
      <FaTrash onClick={() => {onRemove(item.id); decrement()}} className="delete-icon" />
    </div>
  );
};

export default Order;
