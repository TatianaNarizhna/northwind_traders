import { useState, useEffect } from 'react';
import * as dataApi from '../../services/dataApi';
import Section from '../../modules/Section/Section';
import EmployeesList from '../../modules/EmployeesList/EmployeesList';
import s from './EmployeesPage.module.css'

const EmployeesPage = () => {
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        dataApi.getAllEmployees().then(data => {
          let curPage = data.currentPage;

          setEmployees(data.data)
          setTotalPages(data.totalPages)
          setCurrentPage(Number(curPage))
        })
      }, []);


    return <Section>
             <EmployeesList employees={employees}/>

              <div className={s.page_footer}>
               <p className={s.footer_info}>
                Page {Number(currentPage)} of {totalPages}
              </p>
             </div>
    </Section>
}


export default EmployeesPage;