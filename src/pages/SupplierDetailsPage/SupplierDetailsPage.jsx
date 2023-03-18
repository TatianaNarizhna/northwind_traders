import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as dataApi from "../../services/dataApi";
import SupplierDetails from "../../modules/SupplierDetails/SupplierDetails";
import s from './SupplierDetailsPage.module.css'

const SupplierDetailsPage = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate()


    const buttonGoBack = () => {
       navigate("/suppliers")
    }

    useEffect(() => {
        dataApi.getSupplierInfo(id).then( data   => {
            const [detail] = data
            setDetails(detail)
        })
    }, [id])
    

    return (
        <>
        <SupplierDetails details={details}/>
        

        <div className={s.button_back}>
            <div> 
                <button 
                 className={s.button}
                 type="button"
                 onClick={buttonGoBack}
                 >Go back
                 </button>
           </div>
         
        </div>
        </>
  
    )
};

export default SupplierDetailsPage;