import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsDetails from '../../modules/ProductsDetails/ProductsDetails';
import * as dataApi from "../../services/dataApi";

const ProductsDetailsPage = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        dataApi.getProductInfo(id).then( data   => {
            const [detail] = data
            setDetails(detail)
        })
    }, [id])

    return (
        <ProductsDetails details={details}/>
    )

}

export default ProductsDetailsPage;