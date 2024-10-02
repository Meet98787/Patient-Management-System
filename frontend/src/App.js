import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './patient/Authpage/Register';
import Login from './patient/Authpage/Login';
import Forgotpassword from './patient/Authpage/Forgotpassword';

function App() {
  return (
     <BrowserRouter>
         <Routes>
           <Route path='/' element={<Register/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
           <Route path='/forgot-password' element={<Forgotpassword/>}></Route>
         </Routes>
     </BrowserRouter>
  );
}

export default App;
