import { Button } from "react-bootstrap";
import Header from "../components/Header/Header";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';




const AboutPage = () => {
    return (
        <>
            <div>
                <Header />

            </div>

            <div className="call">

                <Card id="join">
                    {/* <Card.Img variant="top" src="../public/Images/vck1.png" height={300} width={500} /> */}
                    <Card.Body>
                        <Card.Text>
                            <h2 className="message2"> About Vivekanand College </h2>
                            <br />
                            <p> Vivekanand College, Kolhapur which was established in 1964 is known as one of the best quality colleges in Maharashtra. The U.G.C. granted autonomy to this college from the academic year 2018-19.
                                About 8000 students are enrolled every year for various programmes. Besides the conventional programmes like B.A., B.Com.and B.Sc., the college offers the professional programmes like B.B.A., B.C.A., B.C.S.,
                                B.Sc. (Biotechnology) ,B.Sc. Microbiology, B.Voc. , Community College and M. B. A. The college also provides opportunity to undertake degrees like B.A.,B.Com.,B.Sc. , B.Lib.,M.Lib. and M.B.A. of YCMOU, Nashik.  </p>

                            <br/>
                            <h2> Our Mission </h2>
                            <br/>
                            <ul>
                                <li> To provide equal opportunity of quality education to all by means of sheer hard work, dedication and devotion. </li>
                                <li> To promote scientific attitude and inculcate cultural values into the students. </li>
                                <li> To enhance the commitment of faculty, staff and students towards diversity, social justice, truth, honesty, character and democratic citizenship. </li>
                                <li> To aim at overall personality development through various activities. </li>
                                <li> To provide a platform to develop skills necessary to grab new opportunities and face challenges in the ever-changing society. </li>
                            </ul>
                            <br/>
                            <h2> Our Values </h2>
                            <br/>
                            <p> Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. 
                            We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p>
                            <br/>
                            <h2> Our History </h2>
                            <br/>
                            <p> [Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous 
                            alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that 
                            legacy today.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
            
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

export default AboutPage;