
import './App.css';
import Login from './component/Login'
// import Register from './component/Register'
import Navbar from './component/Navbarmain';
import Room from './component/Room'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './component/Footer';
import'bootstrap/dist/css/bootstrap.css';
import'bootstrap/dist/js/bootstrap.js';
function App() {
  return (
    
 <>
 <BrowserRouter>
  <Routes>
    <Route path='/'  element={<Navbar/>}/>
    <Route path='/login'  element={<Login/>}/>
  </Routes>
  <Room/>
  <Footer />
 </BrowserRouter>
 </>
  );
}

export default App;
