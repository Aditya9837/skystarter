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
import JobseekerRegister from './component/JobseekerRegister';
import RecruiterRegister from './component/RecruiterRegister';
import JobSeekerLogin from './component/JobSeekerLogin';
import AddExperience from './component/AddExperience';
import JobSeekerHome from './component/JobSeekerHome';
import RecruiterHome from './component/RecruiterHome';
import AddEducation from './component/AddEducation'
import AddSkill from './component/AddSkills'
import Otp from './component/Otp';
import JobseekerProfile from './component/Profile';
import TermsOfService from './component/TermsOfService';
import PrivacyPolicy from './component/Policies';
import AboutUs from './component/AboutUs';


function App() {
  return (
    <>

    <Header/>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/jobs' element={<Jobs></Jobs>}></Route>
      <Route path='/recruiterHome' element={<RecruiterHome></RecruiterHome>}></Route>
      <Route path='/jobseekerHome' element={<JobSeekerHome></JobSeekerHome>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/recruiterlogin' element={<RecruiterLogin></RecruiterLogin>}></Route>
      <Route path='/JobSeekerLogin' element={<JobSeekerLogin></JobSeekerLogin>}></Route>
      <Route path='/jobseekerRegister' element={<JobseekerRegister></JobseekerRegister>}></Route>
      <Route path='/recruiterRegister' element={<RecruiterRegister></RecruiterRegister>}></Route>
      <Route path='/addExperience' element={<AddExperience></AddExperience>}></Route>
      <Route path='/addEducation' element={<AddEducation></AddEducation>}></Route>
      <Route path='/addSkill' element={<AddSkill></AddSkill>}></Route>
      <Route path='/otpform' element={<Otp></Otp>}></Route>
      <Route path='/jobseekerprofile' element={<JobseekerProfile></JobseekerProfile>}></Route>
      <Route path='/termsofservice' element={<TermsOfService></TermsOfService>}></Route>
      <Route path='/policies' element={<PrivacyPolicy></PrivacyPolicy>}></Route>
      <Route path='about' element={<AboutUs></AboutUs>}></Route>
      
     </Routes>
    
    </>
  );
}

export default App;
