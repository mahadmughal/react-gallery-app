import { useNavigate, useLocation, Link } from "react-router-dom";
import { useFirebaseContext } from "../context/firebaseContext";
import Card from "./Card";


const SingleCard = () => {
  const navigate = useNavigate();
  const { state } = useFirebaseContext();
  const { state: routerState } = useLocation();
  const item = state.items.find((item) => item.id === routerState.id);

  return (
    <>
      <button className="btn btn-link" onClick={() => navigate(-1)}>Back</button>
      <div className="d-flex justify-content-center">
        <Card {...item} />
      </div>
    </>
  );
}

export default SingleCard;