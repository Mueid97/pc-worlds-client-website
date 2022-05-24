import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

import Purchase from './pages/Purchase/Purchase';
import NotFound from './pages/NotFound/NotFound';
import Blogs from './pages/Blogs/Blogs';
import NavBar from './pages/Share/NavBar';
import RequireAuth from './RequireAuth/RequireAuth';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Deshboard from './pages/Deshboard/Deshboard';
import MyOrder from './pages/Deshboard/MyOrder';
import MyReview from './pages/Deshboard/MyReview';
import MyProfile from './pages/Deshboard/MyProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div >
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        
        <Route path='purchase' element={
        <RequireAuth>
          <Purchase></Purchase>
          </RequireAuth>} >
          </Route>
        <Route path='purchase/:purchaseId' element={
        <RequireAuth>
          <Purchase></Purchase>
          </RequireAuth>} >
          </Route>
        <Route path='deshboard' element={
        <RequireAuth>
          <Deshboard></Deshboard>
        </RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          </Route>
        <Route path='blogs' element={<Blogs></Blogs>} ></Route>
        
        <Route path='login' element={<Login></Login>} ></Route>
        <Route path='signup' element={<SignUp></SignUp>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
