import { FC } from "react";
import { useActions } from "../hooks/useActions";

type TItem = {
  id: number;
  title: string;
  img: string;
  desc: string;
  category: string;
  price: string;
};
interface IItem {
  item: TItem;
  onAdd(el: TItem): void;
}

const Item: FC<IItem> = ({ item, onAdd }) => {
  const { increment } = useActions();

  return (
    <div className="item">
      <img src={"./img/" + item.img} alt={"item.title"} />
      <div className="item-descr">
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}₽</b>
        <div
          className="add-to-cart"
          onClick={() => {
            onAdd(item);
            increment();
          }}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default Item;
