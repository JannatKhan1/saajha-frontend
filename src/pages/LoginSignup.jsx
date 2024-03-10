import React from 'react'
import '../index.css';

export const LoginSignup = ({
  title,
  description,
  loginbutton,
  signupbutton,
  loginButtonLink,
  signupButtonLink,
  icon,

}) => {
    const handleLoginButtonClick = () => {
      if (loginButtonLink) {
        window.location.href = loginButtonLink;
      }
    };
  
    const handleSignupButtonClick = () => {
      if (signupButtonLink) {
        window.location.href = signupButtonLink;
      }
    };
  
  return (
    <>
    <div className="card-container">
     {icon && <div className="card-icon">{icon}</div>}
      {title && <h1 className="card-title-anika">{title}</h1>}
      {description && <p className="card-description-anika">{description}</p>}
      <div className="button-container">
      {loginbutton && <button className="button-login" onClick={handleLoginButtonClick}>{loginbutton}</button>}
      {signupbutton && <button className="button-signup" onClick={handleSignupButtonClick}>{signupbutton}</button>}
      </div>
    </div>
    </>
  );
};