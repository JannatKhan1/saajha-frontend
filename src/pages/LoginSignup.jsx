import React from 'react'
import '../index.css';

export const LoginSignup = ({
  imgSrc,
  imgAlt,
  title,
  description,
  loginbutton,
  signupbutton,
  loginButtonLink,
  signupButtonLink,

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
      {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className="card-image-anika" />}
      {title && <h1 className="card-title-anika">{title}</h1>}
      {description && <p className="card-description-anika">{description}</p>}
      {loginbutton && <button className="button-login" onClick={handleLoginButtonClick}>{loginbutton}</button>}
      {signupbutton && <button className="button-signup" onClick={handleSignupButtonClick}>{signupbutton}</button>}
    </div>
    </>
  );
};