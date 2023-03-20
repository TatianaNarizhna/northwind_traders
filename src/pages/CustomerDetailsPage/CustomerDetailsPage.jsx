import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CustomerDetails from "../../modules/CustomerDetails/CustomerDetails";

import * as dataApi from "../../services/dataApi";

const CustomerDetailsPage = () => {
    const [customerInfo, setCustomerInfo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        dataApi.getCustomerInfo(id).then( data => {
            let [details] = data.data
 
            setCustomerInfo(details);
        })
    }, [id]);

    return (
        <CustomerDetails details={customerInfo} />
    )

}

export default CustomerDetailsPage;