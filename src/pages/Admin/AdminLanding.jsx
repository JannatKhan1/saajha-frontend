import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNGOs, deleteNGO } from '../../features/ngos/ngoSlice';
import React, { useState } from "react";
import {toast} from 'react-toastify'
import AdminHeader from '../../components/Admin/AdminHeader'
import '../../indexs.css';
import { deleteRequirement, getRequirements } from '../../features/requirements/requirementSlice';

function AdminLanding() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedButton, setSelectedButton] = useState("");

    const openModal = (button) => {
        setModalOpen(true);
        setSelectedButton(button);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleButtonClick = (action) => {
        // Handle the button click based on the selected action
        console.log(`Performing ${action} action for ${selectedButton}`);
        closeModal(); // Close the modal after performing the action
    };

    const getPopupTitle = () => {
        switch (selectedButton) {
            case "NGO":
                return "NGO Options";
            case "VOLUNTEER":
                return "Volunteer Options";
            case "COUNSELLOR":
                return "Counsellor Options";
            default:
                return "";
        }
    };
    const { ngos } = useSelector((state) => state.ngos);
    const { requirements } = useSelector((state)=> state.requirements);
    const adminId = useSelector(state => state.admins.admin?._id); // Using optional chaining to avoid errors
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getNGOs());
        dispatch(getRequirements());
    }, [dispatch]);

    if (!adminId) {
        return <div>No admin found.</div>;
    }


    const filteredNGO = ngos.filter(item => item.admin === adminId);
    const filteredRequirement = requirements.filter(item => item.admin === adminId);
    
    const handleDelete = () => {
        dispatch(deleteRequirement(filteredRequirement[0]._id))
          .then((response) => {
            console.log(response)
            toast.success('Requirement Deleted Successfully');
            window.location.reload()
            navigate('/AdminLanding')
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }

      const handleNGODelete = (ngoId) => {
        console.log(ngoId)
        dispatch(deleteNGO(ngoId))
          .then((response) => {
            console.log(response)
            toast.success('NGO Deleted Successfully');
            window.location.reload()
            navigate('/AdminLanding')
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }



    return (
        <div className="admin-landing-container">
            <AdminHeader />
            <h1 className="welcome-text">Welcome, Admin</h1>
            <div className="button-container">
                <button className="action-button" onClick={() => openModal("NGO")}>
                    NGO
                </button>
                <button className="action-button" onClick={() => handleButtonClick("View Case")}>
                    VIEW CASE
                </button>
                <button className="action-button" onClick={() => openModal("VOLUNTEER")}>
                    VOLUNTEER
                </button>
                <button className="action-button" onClick={() => openModal("COUNSELLOR")}>
                    COUNSELLOR
                </button>
            </div>

            {isModalOpen && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="popup-title">{selectedButton} Options</div>
                {selectedButton !== " VIEW CASE" && selectedButton !== "COUNSELLOR" && selectedButton!=="VOLUNTEER" && (
                    <>
                    {filteredNGO.length === 0 ? (
                        // When no NGOs are found for the admin
                        <>
                            <Link to={'/AddNGO/'} className='btn btn-reverse btn-sm'>
                                            Add 
                            </Link>
                        </>
                    ) : (
                        // When NGOs are found for the admin
                        <>
                            <div>
                                {filteredNGO.map(ngo => (
                                    <div key={ngo._id}>
                                        <Link to={`/ViewNGO/${ngo._id}`} className='btn btn-reverse btn-sm'>
                                            View
                                        </Link>
                                        <button onClick={() => handleNGODelete(ngo._id)} className="btn btn-sm btn-danger mx-3">Delete</button>

                                        <Link to={`/UpdateNGO/${ngo._id}`} className='btn btn-reverse btn-sm'>
                                            Update  
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    </>)}
                    {selectedButton !== "VIEW CASE" && selectedButton !== "COUNSELLOR" && selectedButton!=="NGO" && (
                    <>
                        <>
                            <div>
                            {filteredRequirement.length === 0 ? (
                        // When no Requirements are found for the admin
                        <>
                                {filteredNGO.map(ngo => (
                                    <div key={ngo._id}>
                                        <Link to={`/ViewRequests/${ngo._id}`} className='btn btn-reverse btn-sm'>
                                            View Requests
                                        </Link>
                                        <Link to={`/ViewVolunteers/${ngo._id}`} className='btn btn-reverse btn-sm'>
                                            View Volunteers
                                        </Link>
                                        <Link to={`/AddRequirements/`} className='btn btn-reverse btn-sm'>
                                            Add Requirements
                                        </Link>
                                        <Link to={`/requirement/${adminId}`} className='btn btn-reverse btn-sm'>
                                            View Requirements
                                        </Link>
                                    </div>
                                    
                                ))}
                        </>
                    ) : (
                        // When Requirements are found for the admin
                        <>
                            <div>
                            <button onClick={handleDelete} className="btn btn-sm btn-danger mx-3">Delete Requirements</button>
                                {filteredNGO.map(ngo => (
                                    <div key={ngo._id}>
                                        <Link to={`/ViewRequests/${ngo._id}`} className='btn btn-reverse btn-sm'>
                                            View Requests
                                        </Link>
                                        <Link to={`/ViewVolunteers/${ngo._id}`} className='btn btn-reverse btn-sm'>
                                            View Volunteers
                                        </Link>
                                        <Link to={`/requirement/${adminId}`} className='btn btn-reverse btn-sm'>
                                            View Requirements
                                        </Link>
                                    </div>
                                    
                                ))}
                            </div>
                        </>
                    )}
                        </div>
                        </>
                    </>)}
                    { selectedButton !== "VIEW CASE" && selectedButton !== "VOLUNTEER" && selectedButton!=="NGO"  && (
                    <>
                        <>
                            <div>
                            <Link to='/CounsellorRegister' className='btn btn-reverse btn-sm'>
                                            Register Counsellor
                            </Link>
                                <button onClick={() => handleButtonClick("view")}>View Counsellor</button>
                            </div>
        
                        </>
                  
                    </>)}
               
                </div>    
            </div>
                
            )}
        </div>
    );
}

export default AdminLanding;