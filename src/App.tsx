import { FC, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

const App: FC = () => {
  const data = [
    {
      id: 1,
      title: 'Стул серый',
      img: 'chair-grey.jpeg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      category: 'chairs',
      price: '2999'
    },
    {
      id: 2,
      title: 'Стол',
      img: 'table.webp',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      category: 'tables',
      price: '11999'
    },
    {
      id: 3,
      title: 'Стул белый',
      img: 'chair-white.jpeg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      category: 'chairs',
      price: '2999'
    },
    {
      id: 4,
      title: 'Диван',
      img: 'sofa.jpeg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      category: 'sofa',
      price: '39999'
    },
    {
      id: 5,
      title: 'Настенный светильник',
      img: 'wall-light.jpeg',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      category: 'light',
      price: '1499'
    },
  ]
  const [items, setItems] = useState(data)

  return (
    <div className='wrapper'>
      <Header />
      <Items items={items} />
      <Footer />
    </div>
  )
}

export default App