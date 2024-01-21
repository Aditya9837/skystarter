
import JobCard from './Job-Card';
import Style from './Style.css'
export default function Jobs() {
    const jobData = [
        {
            job_id: "J123456",
            company_name: "XYZ Tech Solutions",
            job_role: "Junior Software Developer",
            qualification: "Bachelor's degree in Computer Science or related field",
            job_title: "Entry Level Software Developer",
            salary: "$50,000 - $60,000 per year"
        },
        {
            job_id: "J123457",
            company_name: "ABC Innovations",
            job_role: "Web Developer",
            qualification: "Bachelor's degree in Web Development or related field",
            job_title: "Entry Level Web Developer",
            salary: "$45,000 - $55,000 per year"
        },
        {
            job_id: "J123458",
            company_name: "TechGenius Solutions",
            job_role: "Data Analyst",
            qualification: "Bachelor's degree in Statistics or related field",
            job_title: "Entry Level Data Analyst",
            salary: "$48,000 - $58,000 per year"
        },
        {
            job_id: "J123459",
            company_name: "InnovateCorp",
            job_role: "Marketing Specialist",
            qualification: "Bachelor's degree in Marketing or related field",
            job_title: "Entry Level Marketing Specialist",
            salary: "$42,000 - $52,000 per year"
        },
        {
            job_id: "J123460",
            company_name: "CodeMasters",
            job_role: "Junior Frontend Developer",
            qualification: "Bachelor's degree in Computer Science or related field",
            job_title: "Entry Level Frontend Developer",
            salary: "$48,000 - $58,000 per year"
        },
        {
            job_id: "J123461",
            company_name: "DataTech Innovations",
            job_role: "Data Scientist",
            qualification: "Master's degree in Data Science or related field",
            job_title: "Entry Level Data Scientist",
            salary: "$55,000 - $65,000 per year"
        },
        {
            job_id: "J123462",
            company_name: "EcoSolutions",
            job_role: "Environmental Analyst",
            qualification: "Bachelor's degree in Environmental Science or related field",
            job_title: "Entry Level Environmental Analyst",
            salary: "$45,000 - $55,000 per year"
        },
        {
            job_id: "J123463",
            company_name: "HealthTech Solutions",
            job_role: "Healthcare IT Specialist",
            qualification: "Bachelor's degree in Healthcare Informatics or related field",
            job_title: "Entry Level Healthcare IT Specialist",
            salary: "$50,000 - $60,000 per year"
        },
        {
            job_id: "J123464",
            company_name: "GreenEnergy Innovations",
            job_role: "Renewable Energy Engineer",
            qualification: "Bachelor's degree in Renewable Energy Engineering or related field",
            "job_title": "Entry Level Renewable Energy Engineer",
            salary: "$52,000 - $62,000 per year"
        },
        {
            job_id: "J123465",
            company_name: "CyberGuard Solutions",
            job_role: "Cybersecurity Analyst",
            qualification: "Bachelor's degree in Cybersecurity or related field",
            job_title: "Entry Level Cybersecurity Analyst",
            salary: "$55,000 - $65,000 per year"
        }
    ];
    return (
        <>
            <div className='jobs'>
                <div className='sidebar'>
                    <form className='form-group'>
                        <input type='text' placeholder='Enter job Title'className='form-control' name='jobtitle'/>
                        <br/>
                        <input type='text' placeholder='Enter job Location'className='form-control' name='joblocation'/>
                        <br/>
                        <input className='btn  btn-warning' type='submit' value='Search'/>
                    </form>
                </div>
                <div className='maincontent'>
                    <JobCard jobData={jobData} />
                </div>
            </div>
        </>
    );
}