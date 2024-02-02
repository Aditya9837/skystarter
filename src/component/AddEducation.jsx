import { useState } from 'react';
import Style from './Style.css'
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
export default function AddExperience() {
    const nevigate=useNavigate()
    const [institution_name, setInstitution_name] = useState()
    const [degree, setDegree] = useState()
    const [field_of_study, setField_of_study] = useState()
    const [graduation_year, setGraduation_year] = useState()
    const [gpa, setGpa] = useState()
    const [isvalidGpa, setvalidGpa] = useState(true)

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

    const UpdateInstitution_name = (e) => {
        setInstitution_name(e.target.value)
    }
    const UpdateDegree = (e) => {
        setDegree(e.target.value)
    }
    const UpdateField_of_study = (e) => {
        setField_of_study(e.target.value)
    }
    const UpdateGraduation_year = (e) => {
        setGraduation_year(e.target.value)
    }
    const UpdateGpa = (e) => {
        setGpa(e.target.value)
        setvalidGpa(() => {
            if (e.target.value < 0 || e.target.value > 10) {
                showMessage('GPA should be positive and less then 10','error')
            }
            else {
                return true
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('institution_name', institution_name);
        formdata.append('degree', degree);
        formdata.append('field_of_study', field_of_study);
        formdata.append('graduation_date', graduation_year);
        formdata.append('gpa', gpa);
        formdata.append('user_id', Cookies.get('user_id'));

        try {
            const response = await axios.post('https://skystarter.pythonanywhere.com/education/', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data['message'])
            if (response.data['message'] == 'ok') {
                showMessage('Your education added successfully','success')
                setInstitution_name('')
                setDegree('')
                setField_of_study('')
                setGraduation_year('')
                setGpa('')
                nevigate('/jobSeekerHome')
            }
            if (response.data['message'].slice(1,5) == '1062') {
                showMessage('This degree already uploaded','warning')
            }

        } catch (error) {
            showMessage(error, 'error');
            // Handle error or display an error message
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
       
        { Cookies.get('isJobSeekerLoggedIn')=='true' &&
           <div>
            <div className='float-error' id='messageContainer'>
          
          </div>
            <div className='container mt-5 pad10'>
                <form className="form" onSubmit={handleSubmit}>
                    <div className='blur'>
                        <div className='form-group'>
                            <label htmlFor="institution_name">institution Name</label>
                            <input type="text" name="institution_name" value={institution_name} required onChange={UpdateInstitution_name} placeholder=" Enter Your Institution Name" className="form-control "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="degree">Degree</label>
                            <select className='form-control' required onChange={UpdateDegree}>
                                <option value="">Select a Degree</option>


                                <optgroup label="General Degrees">

                                    <option value="BA">Bachelor of Arts (BA)</option>
                                    <option value="BSc">Bachelor of Science (BS)</option>
                                    <option value="BBA">Bachelor of Business Administration (BBA)</option>
                                    <option value="MA">Master of Arts (MA)</option>
                                    <option value="MSc">Master of Science (MS)</option>
                                    <option value="MBA">Master of Business Administration (MBA)</option>
                                    <option value="PH.D">Doctor of Philosophy (Ph.D.)</option>
                                   
                                </optgroup>


                                <optgroup label="Technical Degrees">
                                    <option value="B.Tech">Bachelor of Technology (B.Tech)</option>
                                    <option value="M.Tech">Master of Technology (M.Tech)</option>
                                    <option value="BCA">Bachelor of Computer Applications (BCA)</option>
                                    <option value="MCA">Master of Computer Applications (MCA)</option>
                                    <option value="BE">Bachelor of Engineering  (BE)</option>
                                    <option value="ME">Master of Engineering  (ME)</option>
                                </optgroup>


                            </select>


                        </div>
                        <div className='form-group'>
                            <label htmlFor="field_of_study">Field Of Study</label>
                            <select id="degree" className='form-control' required onChange={UpdateField_of_study}>
                                {/* Default option */}
                                <option value="">Select a Field of Study</option>

                                {/* Science and Engineering group */}
                                <optgroup label="Science and Engineering">
                                    <option value="computer_science">Computer Science</option>
                                    <option value="data_science">Data Science</option>
                                    <option value="information_technology">Information Technology</option>
                                    <option value="electrical_engineering">Electrical Engineering</option>
                                    <option value="mechanical_engineering">Mechanical Engineering</option>
                                    <option value="biology">Biology</option>
                                    <option value="chemistry">Chemistry</option>
                                    <option value="physics">Physics</option>
                                </optgroup>

                                {/* Business and Economics group */}
                                <optgroup label="Business and Economics">
                                    <option value="business_administration">Business Administration</option>
                                    <option value="finance">Finance</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="economics">Economics</option>
                                </optgroup>


                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="graduation_year">Graduation year</label>
                            <input type="date" id="graduation_year" value={graduation_year} required placeholder="Graduation year" onChange={UpdateGraduation_year} className="form-control "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="gpa">Gpa</label>
                            <input type="number" id="gpa" value={gpa} required placeholder="Enter Your Gpa" onChange={UpdateGpa} className="form-control "></input>
                           
                        </div>

                        <br />
                        <div>
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
           </div>
            
        }
        </>
    );
}