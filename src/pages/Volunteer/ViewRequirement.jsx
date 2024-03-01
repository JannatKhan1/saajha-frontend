import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { getRequirement } from '../../features/requirements/requirementSlice'
import { useParams} from 'react-router-dom'
import Header from '../../components/Volunteer/Header'



function ViewRequirement() {
  const dispatch = useDispatch();
  const { adminId } = useParams();

  useEffect(() => {
    dispatch(getRequirement(adminId))
      .catch((error) => {
        toast.error("Error fetching requirement");
      });
  }, [adminId, dispatch]);

  const { requirement } = useSelector((state) => state.requirements);

  // Check if requirement is an array and has at least one element
  if (!requirement || !requirement.length) {
    return (
        <div>
          <p>No current requirement set by Admin</p>
        </div>
      );
  }


  return (
    <div>
      <Header />
      <header>
        <div>
          <h3>Our Current Requirements</h3>
          <p>{requirement[0].requirements}</p>
        </div>
      </header>
    </div>
  );
}

export default ViewRequirement;
