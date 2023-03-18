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
  dataApi.getSuppliersFirstRender().then(data => {
    let curPage = data.currentPage;

    setSuppliers(data.data)
    setTotalPages(data.totalPages)
    setCurrentPage(Number(curPage))

  })

//   setSuppliers(res)
}, [])

const handlePageChange = (e, currentPage) => {
    dataApi.getSuppliers(currentPage).then(data => {
        setSuppliers(data.data)
        setCurrentPage(data.currentPage)
    })
}

    return (
        <div className={s.main_content}>
        <SuppliersList suppliers={suppliers} />

         <div className={s.page_footer}>
          <Stack spacing={2}>
            <Pagination count={totalPages} variant="outlined" shape="rounded" 
            page={Number(currentPage)}
            onChange={handlePageChange}
            hideNextButton
            hidePrevButton
            size="large"
            />
          
          </Stack>
              <p className={s.footer_info}>
                Page {Number(currentPage)} of {totalPages}
              </p>
         </div>
        
        </div>
    )
}



export default SuppliersPage;