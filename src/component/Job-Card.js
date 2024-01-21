import logo from './image/logo.png'
export default function JobCard(props) {
    return (
        <>
           {props.jobData.map(
            (data,index)=>(
                <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Job ID: {data.job_id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Company Name: {data.company_name}</h6>
                        <img src={logo} className='icon-size'></img>
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
                                    <th scope="row">Apply Now</th>
                                    <td><a href="#" className="card-link">Apply Now</a></td>
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