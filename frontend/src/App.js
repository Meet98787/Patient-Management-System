import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './patient/Authpage/Register';
import Login from './patient/Authpage/Login';
import Forgotpassword from './patient/Authpage/Forgotpassword';
import Otp from './patient/Authpage/Otp';
import Resetpassword from './patient/Authpage/Resetpassword';
import PersonalHealthRecord from './patient/Dashboard/PersonalHealthRecord';
import ProfileSetting from './patient/Dashboard/ProfileSetting';
import Prescriptions from './patient/Dashboard/Prescriptions';
import TestReport from './patient/Dashboard/TestReport';
import MedicalHistory from './patient/Dashboard/MedicalHistory';
import Allappoiment from './patient/Dashboard/Allappoiment';

import Appointment from './patient/Dashboard/AppoinmentBooking/Appointment';
import AppointmentBooking from './patient/Dashboard/AppoinmentBooking/AppointmentBooking';
import AppointmentTimeSlot from './patient/Dashboard/AppoinmentBooking/AppointmentTimeSlot';



function App() {
  return (
     <BrowserRouter>
         <Routes>
           <Route path='/' element={<Register/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
           <Route path='/forgot-password' element={<Forgotpassword/>}></Route>
           <Route path='/otp' element={<Otp/>}></Route>
           <Route path='/reset-password' element={<Resetpassword/>}></Route>

            {/* patient Dashboard */}
           <Route path='/personal-health-record' element={<PersonalHealthRecord/>}></Route>
           <Route path='/profile-setting' element={<ProfileSetting/>}></Route>
           <Route path='/prescriptions' element={<Prescriptions/>}></Route>
           <Route path='/test-report' element={<TestReport/>}></Route>
           <Route path='/medical-history' element={<MedicalHistory/>}></Route>
           <Route path='/medical-history/allappoiment' element={<Allappoiment/>}></Route>
           <Route path='/appointment' element={<Appointment/>}></Route>
           <Route path='/appointment-booking' element={<AppointmentBooking/>}></Route>
           <Route path='/appointmenttime' element={<AppointmentTimeSlot/>}></Route>
           

         </Routes>
     </BrowserRouter>
  );
}

export default App;
