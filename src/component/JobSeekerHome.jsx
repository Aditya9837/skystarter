import { Link } from 'react-router-dom';
import Style from './Style.css'
import logo from './image/logo.png'
import { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
export default function JobSeekerHome() {
    // Assuming you have multiple instances of the education model
   

    



    return (
        <>
            <div className='jobs '>
                <div className='jobseeker-sidebar '>
                    <div className='align-center'>
                        <img className='user-dp' src={logo}></img>
                        <h5 className='center'>Hi {Cookies.get('username')}</h5>
                    </div>

                   
                
                   
                </div>
               
            </div>
        </>
    );
}