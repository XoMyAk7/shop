import { FC, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";
import { useCounter } from "../hooks/useCounter";
import { useActions } from "../hooks/useActions";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

type TItem = {
  id: number;
  title: string;
  img: string;
  desc: string;
  category: string;
  price: string;
};
interface IHeader {
  orders: TItem[];
  onRemove(itemId: number): void;
  onReset(): void;
}
type onRemoveFunc = {
  (itemId: number): void;
};
type onResetFunc = {
  (): void;
};

const showOrders = (
  orders: TItem[],
  onRemove: onRemoveFunc,
  onReset: onResetFunc,
  clearShopCart: ActionCreatorWithoutPayload,
) => {
  let sum = 0;
  orders.forEach(item => (sum += Number.parseFloat(item.price)));

  return (
    <div>
      <div className="orders-reset">
        <div className="orders-reset-descr">Товары в корзине</div>
        <button onClick={() => {onReset(); clearShopCart()}} className="orders-reset-btn">
          Очистить корзину
        </button>
      </div>
      {orders.map(item => (
        <Order key={item.id} item={item} onRemove={onRemove} />
      ))}
      <div className="orders-more">
        <p className="sum">Сумма: {sum}₽</p>
        <button className="orders-more__buy">Купить</button>
      </div>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Корзина пуста</h2>
    </div>
  );
};

const Header: FC<IHeader> = ({ orders, onRemove, onReset }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const counter = useCounter();
  const {clearShopCart} = useActions();

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <div
          className={`shop-cart-button ${cartOpen && "active"}`}
          onClick={() => setCartOpen(!cartOpen)}
        >
          <FaShoppingCart />
          <div className="counter">{counter}</div>
        </div>

        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0
              ? showOrders(orders, onRemove, onReset, clearShopCart)
              : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
