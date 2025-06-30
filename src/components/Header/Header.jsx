import { Link } from 'react-router-dom'
import './Header.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';



const Header = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <header className='head'>
                <nav>
                    <pre>

                        <div >
                            <Link to="/" className='clg'> Vivekanand College </Link>

                            <Link to="/home" className='content' id='space'> Home </Link>
                            <Link to="/about" className='content'> About </Link>
                            <Link to="/course" className='content'> Courses </Link>
                            <Link to="/contact" className='content'> Contact </Link>

                            <Button className='btn3' variant='success'> <a href="/admission"> Apply Now </a></Button>

                        </div>

                        {/* <Link to="/home" className='content'> Home </Link>
                        <Link to="/about" className='content'> About </Link>
                        <Link to="/course" className='content'> Courses </Link>
                        <Link to="/contact" className='content'> Contact </Link> */}


                    </pre>
                </nav>
            </header>

            
        </>
    )

}

export default Header;