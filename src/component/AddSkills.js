import { useState } from 'react';
import Style from './Style.css'

export default function AddExperience() {
    const [skill_name,setSkill_name]=useState()
    const [proficiency_level,setProficiency_level]=useState()
    const [years_of_experience,setYears_of_experience]=useState()
    const [certifications,setCertifications]=useState()

    const UpdateSkill_name=(e)=>{
        setSkill_name(e.target.value)
    }
    const UpdateProficiency_level=(e)=>{
        setProficiency_level(e.target.value)
    }
    const UpdateYears_of_experience=(e)=>{
        setYears_of_experience(e.target.value)
    }
    const UpdateCertificaions=(e)=>{
        setCertifications(e.target.value)
    }
    return (
        <>
            <div className='container mt-5 pad10'>
                <form className="form">
                    <div className='blur'>
                        <div className='form-group'>
                            <label htmlFor="skill_name">Skill Name</label>
                            <input type="text" id="skill_name" onChange={UpdateSkill_name} placeholder=" Enter Your Skill" className="form-control1 "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="proficiency_level">Proficiency Level</label>
                            <select type="Choice" id="proficiency_level" onChange={UpdateProficiency_level} className="form-control1 ">
                                <option>Select an option</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Expert</option>
                            </select>

                        </div>
                        <div className='form-group'>
                            <label htmlFor=" years_of_experiencen">Years Of Experience</label>
                            <input type="number" id="years_of_experience" onChange={UpdateYears_of_experience} placeholder="Enter Year of Experience" className="form-control1 "></input>

                        </div>
                        <div className='form-group'>
                            <label htmlFor="certifications">Certifications</label>
                            <input type="text" id="certifications" onChange={UpdateCertificaions} placeholder="" className="form-control1 "></input>

                        </div>
                       
                        <br/>
                        <div>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}