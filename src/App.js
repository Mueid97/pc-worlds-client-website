import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reviews from './pages/Home/Reviews';

import Purchase from './pages/Purchase/Purchase';
import NotFound from './pages/NotFound/NotFound';
import Blogs from './pages/Blogs/Blogs';
import NavBar from './pages/Share/NavBar';
import RequireAuth from './RequireAuth/RequireAuth';
import Login from './Login/Login';
import SignUp from './Login/SignUp';

function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='purchase' element={
        <RequireAuth>
          <Purchase></Purchase>
          </RequireAuth>} >
          </Route>
        <Route path='blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='login' element={<Login></Login>} ></Route>
        <Route path='signup' element={<SignUp></SignUp>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
