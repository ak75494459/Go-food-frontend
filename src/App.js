import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Cards from './components/Cards';
import Carousel1 from './components/Carousel1';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './components/MyOrder';


function App() {
  
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <><div className='mt-1'><Carousel1 /></div>,<Cards/>,<Footer /></>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/myorder' element={<MyOrder/>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
