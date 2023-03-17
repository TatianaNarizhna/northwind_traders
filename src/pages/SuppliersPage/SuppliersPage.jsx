import { useState, useEffect } from 'react';
import * as dataApi from '../../services/dataApi';
import SuppliersList from '../../modules/SuppliersList/SuppliersList';
import s from './SuppliersPage.module.css'

const SuppliersPage = () => {
const [suppliers, setSuppliers] = useState([])

useEffect(() => {
  dataApi.getSuppliers().then(({data}) => setSuppliers(data))

//   setSuppliers(res)
}, [])

console.log(suppliers)

    return (
        <div className={s.main_content}>
            <SuppliersList suppliers={suppliers}/>
        </div>
    )
}



export default SuppliersPage;