// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './styles/Pages.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
import ChatbotComponent from './components/Chatbot/ChatbotComponents';
import VisionandMission from './pages/VisionandMission';
import PastPrinciples from './pages/PastPrinciples';
import FeeStructure from './pages/FeeStructure';
import AdmissionPage from './pages/AdmissionPage';
import { useState } from "react";
import DeveloperInfoPopup from './components/DeveloperInfoPopup';

const App = () => {


  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };


  return (
    <>

      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName=" Shweta Shirgupe "
          studentPhotoUrl="/Images/Panhala fort 1.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>

      <div className='app-wrapper'>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/course" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/vision" element={<VisionandMission />} />
            <Route path="/principles" element={<PastPrinciples />} />
            <Route path="/Fees" element={<FeeStructure />} />
            <Route path="/admission" element={<AdmissionPage />} />
          </Routes>
        </Router>
      </div>

      <div>
        <ChatbotComponent />
      </div>
    </>
  )
}

export default App
