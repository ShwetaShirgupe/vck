import { Button } from "react-bootstrap";
import Header from "../components/Header/Header";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';



const CoursesPage = () => {
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
              <h2 className="message2"> Our Academic Programs </h2>
              <br />
              <p> Vivekanand College offers a comprehensive range of
                undergraduate and postgraduate programs designed to equip students
                with the knowledge and skills demanded by today's dynamic global landscape.
                Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
              <br />
              <h2> Discover Campus Life </h2>
              <br />
            </Card.Text>
            {/* <Video variant="top" controls loop autoplay> 
            <source src="../public/Videos/college-tour.mp4" type="video/mp4" /> 
          </Video> */}

            <Card.Img variant="top" src="../public/Images/campus-life.jpg" height={400} width={400} />
          </Card.Body>
          <Card.Text>
            <p className="center"> Get a glimpse of the vibrant academic and social life at Vivekanand College. </p>
          </Card.Text>
        </Card>

        <br />
        <Card id="join">
          <Card.Body>
            <Card.Text>
              <h2> Undergraduate Programs (UG) </h2>
              <br />

              <ul>
                <li> <strong> Bachelor of Science (B.Sc.) </strong></li>
                <br />
                <ul>
                  <li className="container"> Computer Science (3 years) </li>
                  <li className="container"> Information Teachnology (3 years) </li>
                  <li className="container"> Biotechnology (3 years) </li>
                </ul>
                <br />
                <li> <strong> Bachelor of Commerce (B.Com) </strong></li>
                <br />
                <ul>
                  <li className="container"> Accounting & Finance (3 years) </li>
                  <li className="container"> Banking & Insurance (3 years) </li>
                </ul>
                <br />
                <li> <strong> Bachelor of Arts (B.A.) </strong></li>
                <br />
                <ul>
                  <li className="container"> English Literature (3 years) </li>
                  <li className="container"> Psychology (3 years) </li>
                </ul>
                <br />
              </ul>

              <h2> Postgraduate Programs (PG) </h2>
              <br />

              <ul>
                <li> <strong> Master of Science (M.Sc.) </strong></li>
                <br />
                <ul>
                  <li className="container"> Computer Science (2 years) </li>
                  <li className="container"> Information Technology (2 years) </li>
                </ul>
                <br />
                <li> <strong> Master of Commerce (M.Com) (2 years) </strong></li>
                <li> <strong> Master of Arts (M.A.) (2 years) </strong></li>
              </ul>

              <br />
              <h2> Program Details & Fee Structure (Annual)</h2>
              <br />

              <Table striped bordered hover size="sm" className='table'>
                <thead>
                  <tr>

                    <th> Program Type </th>
                    <th> Course Name </th>
                    <th> Duration </th>
                    <th> Annual Fee (INR) </th>
                    <th> Eligibility </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> UG </td>
                    <td> B.Sc. Computer Science </td>
                    <td> 3 Years </td>
                    <td> Rs. 85,000 </td>
                    <td> 10+2 with PCM (50%) </td>

                  </tr>
                  <tr>
                    <td> UG </td>
                    <td> B.Com. Accounting & Finance </td>
                    <td> 3 Years </td>
                    <td> Rs. 70,000 </td>
                    <td> 10+2 Commerce (45%) </td>

                  </tr>
                  <tr>
                    <td> PG </td>
                    <td> M.Sc. Information Technology </td>
                    <td> 2 Years </td>
                    <td> Rs. 95,000 </td>
                    <td> B.Sc. IT/CS (50%) </td>
                  </tr>
                </tbody>
              </Table>

              <br />
              <h2> Specialized & Vocational Courses </h2>
              <br />

              <p> In addition to traditional degree programs,
                we offer various certificate and diploma courses in areas
                like Digital Marketing, Web Development, Data Analytics, and
                Soft Skills Development, providing specialized training for career enhancement.</p>
              <br />

              <center>
                <p> Have questions about a specific course? </p>
                <br />

                <Button className="btn3"> <a href="/contact"> Inquire About Courses </a> </Button>
              </center>
            </Card.Text>
          </Card.Body>
          {/* <Card.Img variant="bottom" src="" height={300}  width={500}/> */}
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

export default CoursesPage;