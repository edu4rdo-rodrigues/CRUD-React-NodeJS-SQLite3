import FormData from '../Components/FormData'
import ListOfResult from '../Components/ListOfResult'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import { useNavigate } from "react-router-dom"

function RouteData() {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <div>
        <FormData />
        <button onClick={()=> navigate("/")} >
          Go Back
        </button>
      </div>
    </>
  );
}

export default RouteData;