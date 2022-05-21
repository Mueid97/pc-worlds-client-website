import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reviews from './pages/Home/Reviews';

import Purchase from './pages/Purchase/Purchase';
import NotFound from './pages/NotFound/NotFound';
import Blogs from './pages/Blogs/Blogs';
import NavBar from './pages/Share/NavBar';

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='purchase' element={<Purchase></Purchase>} ></Route>
        <Route path='blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
