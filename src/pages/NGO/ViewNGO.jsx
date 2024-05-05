import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { getNGO } from '../../features/ngos/ngoSlice';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import AdminHeader from '../../components/Admin/AdminHeader'
import '../../indexs.css';

function ViewNGO() {
  const { ngo } = useSelector((state) => state.ngos);
  const dispatch = useDispatch();
  const { ngoId } = useParams();

  useEffect(() => {
    dispatch(getNGO(ngoId)).unwrap().catch(toast.error);
  }, [ngoId, dispatch]);

  if (!ngo) {
    return <Spinner />;
  }

  return (
    <>
      <AdminHeader />
      <div>
        <header>
          <div className="headeradmin">
          <h2>NGO Details</h2>
          {ngo.image && <div><h3>Image:</h3><img src={ngo.image} alt="NGO Image" /></div>}
          {ngo.employeeCount && <h3>Employee Count: {ngo.employeeCount}</h3>}
          {ngo.website && <h3>Website: {ngo.website}</h3>}
          {ngo.emailNGO && <h3>E-mail Id: {ngo.emailNGO}</h3>}
          </div>
          <table className="ngo-details">
            <tbody>
              <tr>
                <th>NGO Id </th>
                <th>Name </th>
                <th>Location </th>
                <th>Services</th>
                <th>Phone no. </th>
                </tr>
                <tr>
                <td>{ngo._id}</td>
                <td>{ngo.name}</td>
                <td>{ngo.location}</td>
                <td>{ngo.services}</td>
                <td>{ngo.phoneNo}</td>
                  </tr>
            </tbody>
          </table>
        </header>
      </div>
    </>
  );
}

export default ViewNGO;
