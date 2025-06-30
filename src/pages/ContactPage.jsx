import { Button } from "react-bootstrap";
import Header from "../components/Header/Header";
import Card from 'react-bootstrap/Card';



const ContactPage = () => {
    return (
        <>
            <div>
                <Header />


                {/* <h2> Contact Page !! </h2>
            <p> College Name: Vivekanand College , Kolhapur </p>
            <p> College Address: 2130, E Ward, Tarabai Park, Kolhapur, Maharashtra 416003 </p>
            <p> Email Id: www.vivekanandcollege.ac.in </p>
            <p> Contact no: 0231 265 8612 </p> */}

                {/* <p> Thank you , Visit again. &#128515; </p> */}

            </div>

            <div className="call">

                <Card id="join">
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Text>
                            <h2 className="message2"> Contact Us </h2>
                            <br/>
                            <p> We'd love to hear from you! Whether you have 
                            questions about admissions, programs, or campus life, our team is here to help.</p>
                            <br/>
                            <h2> General Enquiries </h2>
                            <br/>
                            <b> Vivekanand College (Empowered Autonomous) </b>
                            <br/>
                            <p> Address: 2130, E Ward, Tarabai Park, Kolhapur, Maharashtra 416003 , India </p>
                            <p> Contact no.: 0231 265 8612 </p>
                            <p> Website: www.vivekanandcollege.ac.in </p>
                            <p> Email: info@vivekanandcollege.org </p>
                            <p> Office Hours: Monday - Saturday, 9:00 AM - 5:00 PM </p>
                            <br/>
                            <h2> Admissions Office </h2>
                            <br/>
                            <p> For all admission-related queries regarding undergraduate or postgraduate programs: </p>
                            <p> Phone: +91 98765 43210 </p>
                            <p> Email: admissions@vivekanandcollege.edu </p>
                            <br/>
                            <h2> Student Support Services </h2>
                            <br/>
                            <p> For current student support, academic advising, or general assistance: </p>
                            <p> Phone: +91 87654 32109  </p>
                            <p> Email: studentsupport@vivekanandcollege.edu</p>
                            <br/>
                            <h2> Find Us on the Map </h2>
                            <br/>
                            <p> View Us on Google Maps </p>
                            <Button className='btn3'> <a href=" https://maps.app.goo.gl/ok37KeWUj59UHzdm8"> 
                            Location </a> 
                            </Button>
                            <br/><br/>
                            <p> Thank you , Visit again. </p>


                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
               
                {/* <p> Thank you , Visit again. &#128515; </p> */}

            </div>
            <br/>
            <div className="rights">
                <p> 
                    © 2025 Vivekanand College. All rights reserved.
                </p>
            </div>
        </>
    )
}

export default ContactPage;