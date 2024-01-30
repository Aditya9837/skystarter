import Cookies from 'js-cookie';
import logo from './image/logo.png'
export default function JobCard(props) {
    return (
        <>
           {props.jobData.map(
            (data,index)=>(
                <div className="container mt-5">
                <div className="my-card">

                    <div className="card-body" onClick={()=>Cookies.set('current_job_index',index)}>
                        <h5 className="card-title">Job ID: {data.job_id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Company Name: {data.employer_name}</h6>
                       
                        <table className='table table-hover'>
                            <tbody>
                                <tr>
                                    <th  scope="row">Job Role</th>
                                    <td>{data.job_role}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Qualification</th>
                                    <td>{data.qualification}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Experience</th>
                                    <td>0-1 Year</td>
                                </tr>
                                <tr>
                                    <th scope="row">Job Title</th>
                                    <td>{data.job_title}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Salary</th>
                                    <td>{data.salary}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Deadline</th>
                                    <td>{data.deadline}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Location</th>
                                    <td>{data.location}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Apply Now</th>
                                    <td><a href={data.link} className="card-link">Apply Now</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            )
           )}
           
        </>
    );
}