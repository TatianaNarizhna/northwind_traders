import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as dataApi from "../../services/dataApi";
import SupplierDetails from "../../modules/SupplierDetails/SupplierDetails";

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