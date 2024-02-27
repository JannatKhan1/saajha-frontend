import React from 'react';
import '../../index.css';
import NGOCard from '../../components/Volunteer/NGOCard';
import { getNGOs } from '../../features/ngos/ngoSlice'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../../components/Spinner'



function Landing() {
  const { ngos } = useSelector((state) => state.ngos)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNGOs())
  }, [dispatch])

  
  if (!ngos) {
    return <Spinner />
  }
  return (
    <div className="card-wrapper">
      {ngos.map((ngo) => (
        <NGOCard key={ngo._id} ngo = {ngo}/>
      ))}
      
    </div>
  );
};



export default Landing