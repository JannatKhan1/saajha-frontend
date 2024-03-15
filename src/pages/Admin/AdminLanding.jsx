//Version 3 - temporary
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNGOs } from '../../features/ngos/ngoSlice';

// Version 3
import React, { useState } from "react";
import AdminHeader from '../../components/Admin/AdminHeader'
import '../../indexs.css';

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
    const adminId = useSelector(state => state.admins.admin?._id); // Using optional chaining to avoid errors
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNGOs());
    }, [dispatch]);

    if (!adminId) {
        return <div>No admin found.</div>;
    }


    const filteredNGO = ngos.filter(item => item.admin === adminId);


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
                            <button onClick={() => handleButtonClick("add")}>Add</button>
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
                                        <button className="btn btn-sm btn-danger mx-3">Delete</button>
                                        <button onClick={() => handleButtonClick("update")}>Update</button>
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
                                <button className="btn btn-sm btn-danger mx-3">Delete Requirements</button>
                                <button onClick={() => handleButtonClick("add")}>Add Requirements</button>
                                <button onClick={() => handleButtonClick("view")}>View Requirements</button>
                                {filteredNGO.map(ngo => (
                                    <div key={ngo._id}>
                                        <Link to={`/ViewRequests/${ngo._id}`} className='btn btn-reverse btn-sm'>
                                            View Requests
                                        </Link>
                                    </div>
                                ))}
                            </div>
        
                        </>
                  
                    </>)}
                    { selectedButton !== "VIEW CASE" && selectedButton !== "VOLUNTEER" && selectedButton!=="NGO"  && (
                    <>
                        <>
                            <div>
                                <button onClick={() => handleButtonClick("register")}>Register Counsellor</button>
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