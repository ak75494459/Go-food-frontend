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
import Private from './components/Private';


function App() {
  


  return (
    <div>
      <CartProvider>
      <BrowserRouter>
     
        <Routes>
          <Route element={<Private/>}>
          <Route path='/' element={ <><Navbar/><div className='mt-1'><Carousel1 /></div>,<Cards/>,<Footer /></>}/>
          <Route path='/myorder' element={<><Navbar/><MyOrder/></>}/>
          </Route>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
