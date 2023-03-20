import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderDetails from "../../modules/OrderDetails/OrderDetails";

import * as dataApi from "../../services/dataApi";


const OrderDetailsPage = () => {
    const [orderInfo, setOrderInfo] = useState([]);
    const [productsInfo, setProductsInfo] = useState([]);
    const { id } = useParams();
   
    useEffect(() => {
        dataApi.getOrderInfo(id).then( data => {
            const [orderInfo] = data.orderInfo;
            const productsInfo = data.productsInfo;
            setOrderInfo(orderInfo);
            setProductsInfo(productsInfo);

        })
    }, [id]);

    return (
        <OrderDetails details={orderInfo} productsInfo={productsInfo}/>
    )

}

export default OrderDetailsPage;