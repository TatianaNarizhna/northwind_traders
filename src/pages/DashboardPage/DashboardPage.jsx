import { useEffect } from 'react';
import axios from 'axios';

import Section from '../../modules/Section/Section';
import s from './DashboardPage.module.css'

const DashboardPage = ({ dash }) => {

    let firstFiveArray = dash.slice(0,6);
    console.log(firstFiveArray);

    useEffect(() => {
        const info = axios.get('http://ip-api.com/json/').then(res => console.log(res))
       
     
    }, [])
    



    return (
        <Section className={s.section_dash}>
            <div className={s.grid}>
                <div>
                    <p>Worker</p>
                    <p>Colo: </p>
                    <p>Country: </p>
                </div>

                <div>
                    <p>SQL Metrics</p>
                    <p>Query count: {firstFiveArray.length}</p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>

            </div>
            <p className={s.title}>Activity log</p>
            <p className={s.sub_title}>Explore the app and see metrics here</p>
            {firstFiveArray.map(({timeStart, timeTaken, sql, resultsCount }) => (
                <div key={timeTaken} className={s.log_block}>
                    <p className={s.text_gray}>{timeStart},{timeTaken}ms</p>
                    <p className={s.text_black}>{resultsCount},{sql}</p>
                </div>
            ))}

        </Section>
    )
}


export default DashboardPage