import { useState, useEffect } from 'react';
import { Pagination, Stack } from '@mui/material';
import * as dataApi from '../../services/dataApi';
import SuppliersList from '../../modules/SuppliersList/SuppliersList';
import s from './SuppliersPage.module.css'

const SuppliersPage = () => {
const [suppliers, setSuppliers] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(0);



useEffect(() => {
  dataApi.getSuppliersFirstRender(currentPage).then(data => {
    
    setSuppliers(data.data)
    setTotalPages(Math.round(data.totalPages))
    setCurrentPage(data.currentPage)
    console.log(data);
   
  })

//   setSuppliers(res)
}, [currentPage])

const handlePageChange = (e, currentPage) => {
    dataApi.getSuppliers(currentPage).then(data => {
        setSuppliers(data.data)
        setCurrentPage(data.currentPage)
    })
}

console.log(suppliers);

    return (
        <div className={s.main_content}>
        <SuppliersList suppliers={suppliers}/>
         <Stack spacing={2}>
           <Pagination count={totalPages} variant="outlined" shape="rounded" 
           page={currentPage}
           onChange={handlePageChange}/>
         </Stack>
        </div>
    )
}



export default SuppliersPage;