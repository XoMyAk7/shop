import { FC } from "react";
import Item from "./Item";

type TItem = {
  id: number;
  title: string;
  img: string;
  desc: string;
  category: string;
  price: string;
}
interface IItems {
  items: TItem[];
  onAdd(el: TItem): void;
}

const Items: FC<IItems> = ({ items, onAdd }) => {
  return (
    <main>
      {items.map(el => (
        <Item key={el.id} item={el} onAdd={onAdd} />
      ))}
    </main>
  );
};

export default Items;
