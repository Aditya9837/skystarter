import { useState } from 'react';
import Style from './Style.css'

export default function AddExperience() {
    const [institution_name,setInstitution_name]=useState()
    const [degree,setDegree]=useState()
    const [field_of_study,setField_of_study]=useState()
    const [graduation_year,setGraduation_year]=useState()
    const [gpa,setGpa]=useState()
    const [isvalidGpa,setvalidGpa]=useState(true)

     const UpdateInstitution_name=(e)=>{
        setInstitution_name(e.target.value)
     }
     const UpdateDegree=(e)=>{
        setDegree(e.target.value)
     }
    const UpdateField_of_study=(e)=>{
        setField_of_study(e.target.value)
    }
    const UpdateGraduation_year=(e)=>{
        setGraduation_year(e.target.value)
    }
    const UpdateGpa=(e)=>{
        setvalidGpa(()=>{
            if(e.target.value<0 || e.target.value>10)
            {
                return false
            }
            else{
                return true
            }
        })
    }

    return (
        <>
            <div className='container mt-5 pad10'>
                <form className="form">
                    <div className='blur'>
                        <div className='form-group'>
                            <label htmlFor="institution_name">institution Name</label>
                            <input type="text" name="institution_name" onChange={UpdateInstitution_name} placeholder=" Enter Your Institution Name" className="form-control1 "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="degree">Degree</label>
                            <select className='form-control1' onChange={UpdateDegree}>
                                <option value="">Select a Degree</option>


                                <optgroup label="General Degrees">

                                    <option value="bachelor_of_arts">Bachelor of Arts (BA)</option>
                                    <option value="bachelor_of_science">Bachelor of Science (BS)</option>
                                    <option value="bachelor_of_business_administration">Bachelor of Business Administration (BBA)</option>
                                    <option value="master_of_arts">Master of Arts (MA)</option>
                                    <option value="master_of_science">Master of Science (MS)</option>
                                    <option value="master_of_business_administration">Master of Business Administration (MBA)</option>
                                    <option value="doctor_of_philosophy">Doctor of Philosophy (Ph.D.)</option>
                                    <option value="certificate_program">Certificate Program</option>
                                    <option value="diploma_program">Diploma Program</option>
                                </optgroup>


                                <optgroup label="Technical Degrees">
                                    <option value="bachelor_of_technology">Bachelor of Technology (B.Tech)</option>
                                    <option value="master_of_technology">Master of Technology (M.Tech)</option>
                                    <option value="diploma_in_computer_science">Diploma in Computer Science</option>
                                    <option value="diploma_in_information_technology">Diploma in Information Technology</option>
                                    <option value="bachelor_of_computer_applications">Bachelor of Computer Applications (BCA)</option>
                                    <option value="master_of_computer_applications">Master of Computer Applications (MCA)</option>
                                    <option value="bachelor_of_engineering_in_computer_science">Bachelor of Engineering  (BE)</option>
                                    <option value="master_of_engineering_in_computer_science">Master of Engineering  (ME)</option>
                                </optgroup>


                            </select>


                        </div>
                        <div className='form-group'>
                            <label htmlFor="field_of_study">Field Of Study</label>
                            <select id="degree" className='form-control1' onChange={UpdateField_of_study}>
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
                            <input type="date" id="graduation_year" placeholder="Graduation year" onChange={UpdateGraduation_year} className="form-control1 "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="gpa">Gpa</label>
                            <input type="number" id="gpa" placeholder="Enter Your Gpa" onChange={UpdateGpa} className="form-control1 "></input>
                             {
                                !isvalidGpa && <p className='error'>GPA Should be Postitve and less then 10</p>
                             }
                        </div>

                        <br />
                        <div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}