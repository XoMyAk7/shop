import { FC, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

type TItem = {
  id: number;
  title: string;
  img: string;
  desc: string;
  category: string;
  price: string;
};

const App: FC = () => {
  const items = [
    {
      id: 1,
      title: "Стул серый",
      img: "chair-grey.jpeg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      category: "chairs",
      price: "2999",
    },
    {
      id: 2,
      title: "Стол",
      img: "table.webp",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      category: "tables",
      price: "11999",
    },
    {
      id: 3,
      title: "Стул белый",
      img: "chair-white.jpeg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      category: "chairs",
      price: "2999",
    },
    {
      id: 4,
      title: "Диван",
      img: "sofa.jpeg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      category: "sofa",
      price: "39999",
    },
    {
      id: 5,
      title: "Настенный светильник",
      img: "wall-light.jpeg",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      category: "light",
      price: "1499",
    },
  ];

  const [currentItems, setCurrentItems] = useState<TItem[]>(items);
  const [orders, setOrder] = useState<TItem[]>([]);
  const chooseCategory = (category: string) => {
    if (category === "all") {
      setCurrentItems(items);
      return;
    }

    setCurrentItems(items.filter(el => el.category === category));
  };

  const addToOrders = (el: TItem): void => {
    let isInArray = false;

    orders.forEach(item => {
      if (item.id === el.id) isInArray = true;
    });

    if (!isInArray) setOrder(prev => [...prev, el]);
  };

  const deleteOrder = (itemId: number): void => {
    const arr = orders.filter(item => item.id !== itemId);
    setOrder(arr);
  };

  const resetOrders = () => {
    setOrder([]);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onRemove={deleteOrder} onReset={resetOrders} />
      <Categories chooseCategory={chooseCategory} />
      <Items items={currentItems} onAdd={addToOrders} />
      <Footer />
    </div>
  );
};

export default App;
