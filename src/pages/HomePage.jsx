import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



import Header from "../components/Header/Header";

const HomePage = () => {


    return (
        <>
            <div>
                <Header />


            </div>

            <div className="call">

                <Card id="join">
                    <Card.Img variant="top" src="../public/Images/vck1.png" height={300} width={500} />
                    <Card.Body>
                        <Card.Text>
                            <br />
                            <strong>  Vivekanand College </strong> is a premier educational institution dedicated to fostering academic excellence,
                            innovation, and holistic development. Established in 1980, we have proudly served generations of students,
                            empowering them to achieve their full potential.
                            <br /><br />

                            At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks.
                            Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where
                            curiosity thrives and future leaders are shaped.
                            <br /><br />

                            <h2> Why Choose Vivekanand College? </h2>
                            <br />

                            <ul>
                                <li><strong> Legacy of Excellence: </strong>Decades of commitment to quality education. </li>
                                <li><strong> Experienced Faculty: </strong>Learn from renowned experts and passionate educators.</li>
                                <li><strong> Modern Facilities: </strong>Well-equipped labs, expansive library, and comfortable campus.</li>
                                <li><strong> Holistic Development: </strong>Focus on co-curricular activities, sports, and community service.</li>
                                <li><strong> Strong Placements: </strong>Excellent career opportunities with leading companies.</li>

                            </ul>
                            <br /><br />

                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card id="join">
                    <Card.Body>
                        <Card.Text>
                            <h2> Campus Life & Facilities </h2>
                            <br/>

                        </Card.Text>
                        <Card.Img variant="bottom" src=" ../public/Images/students-studying.jpg" height={300} width={500} id='study'/>
                        <br/><br/>
                        <Card.Img variant="bottom" src=" ../public/Images/campus.jpg" height={300} width={500} />
                        <Card.Text>
                            <br />
                            <p> Explore our vibrant campus and state-of-the-art facilities designed to enhance your
                                learning experience and personal growth.</p>
                            <br /><br />

                            <center>
                                <p> Ready to explore our courses? </p>
                            
                            <br />

                            <Button className='btn3'> <a href="/course"> Explore Courses </a></Button>
                            </center>
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Img variant="bottom" src=" ../public/Images/campus.jpg"  height={300}  width={500}/> */}
                </Card>

                
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

export default HomePage;
