import { FC } from 'react'

const Header: FC = () => {
  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header