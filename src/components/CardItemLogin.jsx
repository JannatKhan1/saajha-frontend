import React from 'react';
import { LoginSignup } from '../pages/LoginSignup'
import { FaUser } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import {Navbar} from './Navbar'
//Version 3
import '../index.css'

function CardItemLogin() {

  const cardsData = [
    {
      icon:<FaUser /> ,
      imgAlt: 'User',
      title: 'User',
      description: 'Can search for various NGOs and enroll patients in specific NGOs',
      loginbutton: 'Login',
      loginButtonLink: '/CaseLogin',
    },
    {
      icon: <MdVolunteerActivism />,
      imgAlt: 'Volunteer',
      title: 'Volunteer',
      description: 'Can enroll themselves in a particular NGO to assist staff with NGO activities.',
      loginbutton: 'Login',
      signupbutton: 'Sign Up',
      loginButtonLink: '/VolunteerLogin',
      signupButtonLink: '/VolunteerRegister',
    },
    {
      icon: <MdOutlineAdminPanelSettings />,
      imgAlt: 'Admin',
      title: 'Admin',
      description: 'Can add NGO details to the portal, assign volunteers to cases, and manage overall NGO information.',
      loginbutton: 'Login',
      signupbutton: 'Sign Up',
      loginButtonLink: '/AdminLogin',
      signupButtonLink: '/AdminRegister',

    },

    {
        icon: <FaUserDoctor />,
        imgAlt: 'Counsellor',
        title: 'Counsellor',
        description: 'Can maintain patient records, progress reports and medical histories.',
        loginbutton: 'Login',
        loginButtonLink: '/CounsellorLogin',
    
      }

  ]

  return (
    <>
    <Navbar />
    <div className="card-wrapper">
      {cardsData.map((card, index) => (
        <LoginSignup key={index} {...card} />
      ))}
    </div>
    </>
  );
};

export default CardItemLogin