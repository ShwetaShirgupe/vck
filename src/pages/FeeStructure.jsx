import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


const FeeStructure = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <div>

                <h2> Welcome To Fee Structure !! </h2>
                <br /><br />

                <Button variant="primary" onClick={handleShow}>
                    Fee Structure
                </Button>

                <br/><br/>
                <img src=" ../public/Images/fee-structure.jpg"  height={500} width={1000}/>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title> Categories </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.

                        <br/><br/>
                        <Button > <a href="/about" className='click'> Go Back </a> </Button>
                    </Offcanvas.Body>
                </Offcanvas>

                <br/><br/>

                {/* <Button > <a href="/about" className='click'> Click here </a> </Button> */}

            </div>
        </>
    )
}

export default FeeStructure;