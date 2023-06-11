import { FC } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const App: FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Footer />
    </div>
  )
}

export default App