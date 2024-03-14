//Version 3 - temporary
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getNGOs } from '../../features/ngos/ngoSlice';

function AdminLanding() {
    const { ngos } = useSelector((state) => state.ngos);
    const adminId = useSelector(state => state.admins.admin?._id); // Using optional chaining to avoid errors
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNGOs());
    }, [dispatch]);

    if (!adminId) {
        return <div>No admin found.</div>;
    }

    if (!ngos || ngos.length === 0) {
        return <div>Loading...</div>; // Display a loading indicator while waiting for data - Jannat 
    }

    const filteredNGO = ngos.filter(item => item.admin === adminId);

    if (filteredNGO.length === 0) {
        return <div>No NGO found for this admin.</div>; //Jannat rectify this
    }

    return (
        <div>
            {filteredNGO.map(ngo => (
                <div key={ngo._id}>
                    <Link to={`/ViewNGO/${ngo._id}`} className='btn btn-reverse btn-sm'>
                        View
                    </Link>
                    <button className="btn btn-sm btn-danger mx-3">Delete</button>
                </div>
            ))}
        </div>
    );
}

export default AdminLanding;

