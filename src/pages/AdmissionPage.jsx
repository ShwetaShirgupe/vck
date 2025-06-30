import Header from "../components/Header/Header";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


const AdmissionPage = () => {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className="call">

                <Card id="join">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Text>
                            <h2 className="message2"> Amissions at Vivekanand College </h2>
                            <br />
                            <p> Welcome to the Admissions page of Vivekanand College! We are delighted
                                you're considering joining our vibrant academic community. Our admission process
                                is designed to be straightforward and accessible.</p>

                            <p> Please review the eligibility criteria and key dates below for the upcoming
                                academic year. For any queries, feel free to contact our admissions office.</p>
                            <br />
                            <h2> Eligibility Criteria for Undergraduate Programs </h2>
                            <br />

                            <Table striped bordered hover size="sm" className='table'>
                                <thead>
                                    <tr>

                                        <th> Program </th>
                                        <th> Minimum Qualification </th>
                                        <th> Required Subjects </th>
                                        <th> Minimum Marks (%) </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> B.Sc. Computer Science </td>
                                        <td> 10+2 (or equivalent) </td>
                                        <td> Physics, Chemistry, Maths </td>
                                        <td> 50% </td>


                                    </tr>
                                    <tr>
                                        <td> B.Com. Accounting & Finance </td>
                                        <td> 10+2 (or equivalent) </td>
                                        <td> OCM, SP, Book Keeping & Accounting </td>
                                        <td> 45% </td>


                                    </tr>
                                    <tr>
                                        <td> B.A. English Literature </td>
                                        <td> 10+2 (or equivalent) </td>
                                        <td> Any Stream </td>
                                        <td> 40% </td>

                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Text>
                        {/* <Video variant="top" controls loop autoplay> 
            <source src="../public/Videos/college-tour.mp4" type="video/mp4" /> 
          </Video> */}

                        {/* <Card.Img variant="top" src="../public/Images/campus-life.jpg" height={400} width={400} /> */}
                    </Card.Body>
                    <Card.Text id="join">
                        <h2> Application Process </h2>
                        <br />

                        <ol>
                            <li> <strong> Online Application: </strong> Fill out the application form available on our portal. </li>
                            <br />
                            <li> <strong> Document Submission: </strong> Upload scanned copies of required documents (mark sheets, ID proof, etc.). </li>
                            <br />
                            <li> <strong> Entrance Exam (if applicable): </strong> Appear for the college's entrance examination. </li>
                            <br />
                            <li> <strong> Merit List & Interview: </strong> Check the merit list and attend the interview if shortlisted. </li>
                            <br />
                            <li> <strong> Fee Payment: </strong> Complete the admission by paying the required fees. </li>
                        </ol>
                        <br />
                        <p> For detailed information on postgraduate program admissions, specific program syllabi, 
                        and fee structures, please visit our Courses page or  Contact us directly.</p>

                    </Card.Text>
                </Card>



            </div>
            <br />
            <div className="rights">
                <p>
                    © 2025 Vivekanand College. All rights reserved.
                </p>
            </div>
        </>
    )
}

export default AdmissionPage;