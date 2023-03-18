import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as dataApi from "../../services/dataApi";
import SupplierDetails from "../../modules/SupplierDetails/SupplierDetails";
// import GoBackButton from "../../modules/GoBackButton/GoBackButton"
import s from './SupplierDetailsPage.module.css'


const SupplierDetailsPage = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();
   
    useEffect(() => {
        dataApi.getSupplierInfo(id).then( data   => {
            const [detail] = data
            setDetails(detail)
        })
    }, [id])
    

    return (
        
        <SupplierDetails details={details}/>

    )
};

export default SupplierDetailsPage;