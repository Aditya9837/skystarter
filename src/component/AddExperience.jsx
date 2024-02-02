import { useState } from 'react';
import Style from './Style.css'
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function AddExperience() {
    const nevigate =useNavigate()
    const [job_title,setJob_title]=useState()
    const [company_name,setCompany_name]=useState()
    const [location,setLocation]=useState()
    const [employment_type,setEmployment_type]=useState()
    const [start_date,setStart_date]=useState()
    const [end_date,setEnd_date]=useState()
    const [responsibilities,setResponsibilities]=useState()
    const [achievements,setAchievements]=useState()

    function showMessage(message, type) {
        var messageContainer = document.getElementById("messageContainer");
        
        // Set background color based on the message type
        var backgroundColor;
        switch(type) {
            case "success":
                backgroundColor = "lightgreen";
                break;
            case "error":
                backgroundColor = "lightcoral";
                break;
            case "warning":
                backgroundColor = "lightsalmon";
                break;
            default:
                backgroundColor = "lightgray";
                break;
        }
        
        // Apply styles and display the message
        messageContainer.textContent = message;
        messageContainer.style.backgroundColor = backgroundColor;
        messageContainer.style.display = "block";
        
        // Hide the message after 20 seconds
        setTimeout(function() {
            messageContainer.style.display = "none";
        }, 5000);
    }

    const UpdateJob_title=(e)=>{
        setJob_title(e.target.value)
    }
    const UpdateCompany_name=(e)=>{
        setCompany_name(e.target.value)
    }
    const UpdateLocation=(e)=>{
        setLocation(e.target.value)
    }
    const UpdateEmployment_type=(e)=>{
        setEmployment_type(e.target.value)
    }
    const UpdateStart_date=(e)=>{
        setStart_date(e.target.value)
    }
    const UpdateEnd_date=(e)=>{
        setEnd_date(e.target.value)
    }
    const UpdateResponsibilities=(e)=>{
        setResponsibilities(e.target.value)
    }
    const UpdateAchievements=(e)=>{
        setAchievements(e.target.value)
    }
    
    const handleSubmit= async (e) =>{
            e.preventDefault()
            const formdata = new FormData()
            formdata.append('job_title',job_title)
            formdata.append('company_name',company_name)
            formdata.append('location',location)
            formdata.append('employment_type',employment_type)
            formdata.append('start_date',start_date)
            formdata.append('end_date',end_date)
            formdata.append('responsibilities',responsibilities)
            formdata.append('achievements',achievements)
            formdata.append('user_id',Cookies.get('user_id'))
           try{
            const response=await axios.post('https://skystarter.pythonanywhere.com/experience/',formdata,{
                headers:{
                    "Content-Type":'multipart/form-data',
                }
            })
            console.log(response.data)
            if(response.data['message']=='Success')
            {
                showMessage('Experience added successfully','success')
                setAchievements('')
                setCompany_name('')
                setEnd_date('')
                setJob_title('')
                setStart_date('')
                setResponsibilities('')
                nevigate('/jobSeekerHome')
            }
           }
           catch (error){
            showMessage(error,'error')
           }
        }
        useEffect(() => {
            const isJobSeekerLoggedIn = Cookies.get('isJobSeekerLoggedIn');
            if (isJobSeekerLoggedIn !== 'true') {
              nevigate('/jobSeekerLogin'); // Use your custom nevigate function
            }
          }, [nevigate]);
    
    return (
        <>
         <div className='float-error' id='messageContainer'>
          
          </div>
            <div className='container mt-5 pad10'>
                <form className="form" onSubmit={handleSubmit}>
                    <div className='blur'>
                        <div className='form-group'>
                            <label htmlFor="jobtitle">Job Title</label>
                            <input type="text" name="job-title" value={job_title} required onChange={UpdateJob_title} placeholder=" Enter Your Job Title" className="form-control "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="companyname">Company Name</label>
                            <input type="text" id="company-name" value={company_name} required onChange={UpdateCompany_name} placeholder=" Enter Your Company Name" className="form-control "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="location">Location</label>
                            <input type="text" id="location" value={location} required onChange={UpdateLocation} placeholder="enter location" className="form-control "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="employmenttype">Employment Type</label>
                           <select onChange={UpdateEmployment_type} className='form-control dropdown'>
                               <option value='Full Time'>Full Time</option>
                               <option value='Part Time'>Part Time</option>
                           </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="startdate">Start Date</label>
                            <input type="date" id="start-date" value={start_date} onChange={UpdateStart_date} required placeholder="Start Date" className="form-control "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="enddate">End Date</label>
                            <input type="date" id="end-date" value={end_date} onChange={UpdateEnd_date} required placeholder="End Date" className="form-control "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="responsibilities">Resposibilities</label>
                            <input type="text" id="responsibilities" value={responsibilities} onChange={UpdateResponsibilities} placeholder="Responsibilities" className="form-control "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="achievements">achievements</label>
                            <input type="text" id="achievements" value={achievements} onChange={UpdateAchievements} placeholder="Achievements" className="form-control "></input>

                        </div>
                        <br/>
                        <div>
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}