import React from 'react';
import '../index.css'
import defaultImage from '../assets/default_ngo.png'

function NGOCard ({ ngo }) {
  return (
    <div className="card-container">
      {ngo.image ?(
        <img src={ngo.image} alt={`${ngo.name} - ${ngo.location}`} className="card-image-anika" />
      ):(
        <img src={defaultImage} alt={`${ngo.name} - ${ngo.location}`} className="card-image-anika" />
      )}  
      <div className="card-body">
        <h1 className="card-title">Name: {ngo.name}</h1>
        <p className="card-description-anika">Location: {ngo.location}</p>
        <p className="card-description-anika">Services Offered: {ngo.services}</p>
        {ngo.employeeCount && <p className="card-description-anika">Employee Count: {ngo.employeeCount}</p>}
        <p className="card-description-anika">Phone No: {ngo.phoneNo}</p>
        {ngo.website && <p className="card-description-anika">Website: {ngo.website}</p>}
        {ngo.emailNGO && <p className="card-description-anika">E-mail Id: {ngo.emailNGO}</p>}
     </div>     
    </div>
  );
};

export default NGOCard;
