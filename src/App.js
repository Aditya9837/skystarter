import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import Jobs from './component/Jobs';
import Contact from './component/Contact';
import RecruiterLogin from './component/RecruiterLogin'
import {Route} from 'react-router-dom'
import { Routes } from 'react-router-dom';
import Register from './component/Register';
import JobSeekerLogin from './component/JobSeekerLogin';


function App() {
  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/jobs' element={<Jobs></Jobs>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/recruiterlogin' element={<RecruiterLogin></RecruiterLogin>}></Route>
      <Route path='/JobSeekerLogin' element={<JobSeekerLogin></JobSeekerLogin>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
     </Routes>
    <Footer/>
    </>
  );
}

export default App;
