import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmployeeDetails from "../../modules/EmpoyeeDetails/EmpoyeeDetails";
import * as dataApi from "../../services/dataApi";

const EmployeeDetailsPage = () => {
    const [employeeInfo, setEmployeeInfo] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        dataApi.getEmployeeInfo(id).then(data  => {
            const [employeeInfo] = data.data;
            setEmployeeInfo(employeeInfo);
        })
    }, [id]);

    return (
        <EmployeeDetails employeeInfo={employeeInfo} />
    )
};

export default EmployeeDetailsPage;