import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderDetails from "../../modules/OrderDetails/OrderDetails";

import * as dataApi from "../../services/dataApi";


const OrderDetailsPage = () => {
    const [orderInfo, setOrderInfo] = useState([]);
    const { id } = useParams();
   
    useEffect(() => {
        dataApi.getOrderInfo(id).then( data   => {
            const [orderInfo] = data.orderInfo;
            setOrderInfo(orderInfo)
        })
    }, [id])

    return (
        <OrderDetails details={orderInfo}/>
    )

}

export default OrderDetailsPage;