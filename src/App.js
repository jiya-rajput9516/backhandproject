import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import UserProfile from './Component/Userprofile/Userprofile';
import Signup from './Component/Signup/Signup';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import { Route, Routes } from 'react-router-dom';
import Contact from './Component/Contact/Contact';
import AddToCart from './Component/AddToCart/AddToCart';
import AddToCategory from './Component/AddToCategory/AddToCategory';
function App() {
   return<>
  
    {/* <UserProfile/> */}
   {/* <Footer/> */}
    {/* <Signup/>  */}
    {/* <AddToCart/> */}
    {/* <AddToCategory/> */}
    <Routes> 
      <Route path='/Header' element={<Header/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/> 
      <Route path='/Footer' element={<Footer/>}/> 
       <Route path='/Contact' element={<Contact/>}/>
    </Routes>

   </>
}

export default App;
