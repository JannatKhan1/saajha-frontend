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
      description: 'Description of User',
      loginbutton: 'Login',
      loginButtonLink: '/UserLogin',
    },
    {
      icon: <MdVolunteerActivism />,
      imgAlt: 'Volunteer',
      title: 'Volunteer',
      description: 'Description of Volunteer',
      loginbutton: 'Login',
      signupbutton: 'Sign Up',
      loginButtonLink: '/VolunteerLogin',
      signupButtonLink: '/VolunteerRegister',
    },
    {
      icon: <MdOutlineAdminPanelSettings />,
      imgAlt: 'Admin',
      title: 'Admin',
      description: 'Description of Admin',
      loginbutton: 'Login',
      signupbutton: 'Sign Up',
      loginButtonLink: '/AdminLogin',
      signupButtonLink: '/AdminRegister',

    },

    {
        icon: <FaUserDoctor />,
        imgAlt: 'Counsellor',
        title: 'Counsellor',
        description: 'Description of Counsellor',
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