import React from 'react';
import { LoginSignup } from '../pages/LoginSignup'
import {Navbar} from './Navbar'

function CardItemLogin() {

  const cardsData = [
    {
      imgSrc: "https://picsum.photos/300/200",
      imgAlt: 'User',
      title: 'User',
      description: 'Description of User',
      loginbutton: 'Login',
      loginButtonLink: '/UserLogin',
      
    },
    {
      imgSrc: "https://picsum.photos/300/200",
      imgAlt: 'Volunteer',
      title: 'Volunteer',
      description: 'Description of Volunteer',
      loginbutton: 'Login',
      signupbutton: 'Sign Up',
      loginButtonLink: '/VolunteerLogin',
      signupButtonLink: '/VolunteerRegister',
    },
    {
      imgSrc: "https://picsum.photos/300/200",
      imgAlt: 'Admin',
      title: 'Admin',
      description: 'Description of Admin',
      loginbutton: 'Login',
      signupbutton: 'Sign Up',
      loginButtonLink: '/AdminLogin',
      signupButtonLink: '/AdminRegister',
    },

    {
        imgSrc: "https://picsum.photos/300/200",
        imgAlt: 'Counsellor',
        title: 'Counsellor',
        description: 'Description of Counsellor',
        loginbutton: 'Login',
        loginButtonLink: '/CounsellorLogin',
      }

  ]

  return (
    <>
    <Navbar/>
    <div className="card-wrapper">
      {cardsData.map((card, index) => (
        <LoginSignup key={index} {...card} />
      ))}
    </div>
    </>
  );
};

export default CardItemLogin;
