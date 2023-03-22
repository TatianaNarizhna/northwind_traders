import { useEffect, useState } from 'react';
import axios from 'axios';

import Section from '../../modules/Section/Section';
import s from './DashboardPage.module.css'

const DashboardPage = ({ dash }) => {
   const [lastLog, setLastLog] = useState([]);
   const [metrics, setMetrics] = useState(null);
   const [country, setCountry] = useState('')

    console.log(lastLog);
    let arr = []

    useEffect(() => {
        let firstFiveArray = dash.slice(0,6);
        setLastLog(firstFiveArray)
    }, [dash]);

    lastLog.flat().forEach(el => {
        arr.push(el)
    })

    // for (const [obj1, obj2] of lastLog) {
    //     arr.push(obj1, obj2); 
    // }
    console.log(arr);

    useEffect(() => {
        const sqlMetricsObj =  logMetrics(arr);
        setMetrics(sqlMetricsObj)
    }, [lastLog])
    
    const logMetrics = (array) => {
        return array.reduce((acc, obj) => {
           acc.resultsCount += obj.resultsCount;
           let countSelect = obj.sqlType === "select" ? acc.select + 1 : 0;
           let countWhere = obj.sqlType === "select" ? acc.select + 1 : 0;
           let countLeftJoin = obj.sqlType === "select" ? acc.select + 1 : 0;
           acc.select += countSelect;
           acc.selectWhere += countWhere;
           acc.selectWhere += countLeftJoin;
        return acc;
        }, {resultsCount: 0, select: 0, selectWhere: 0, selectLeftJoin: 0}); 
    }
    
    useEffect(() => {
        axios.get('http://ip-api.com/json/').then(({ data }) => 
       setCountry(data.countryCode)
     
    )}, [])

    return (
        <Section className={s.section_dash}>
          <div className={s.card_content}>
            <div className={s.grid}>
                <div>
                    <p className={s.worker}>Worker</p>
                    <p className={s.text}>Colo: KBP</p>
                    <p className={s.text}>Country: {country} </p>
                </div>

                <div>
                    <p className={s.sql}>SQL Metrics</p>
                    <p className={s.text}>Query count: {lastLog.length}</p>
                                
                    <p className={s.text}>Results count: {metrics && metrics.resultsCount}</p>
                    <p className={s.text}># SELECT: {metrics && metrics.select}</p>
                    <p className={s.text}># SELECT WHERE: {metrics && metrics.selectWhere}</p>
                    <p className={s.text}># SELECT LEFT JOIN: {metrics && metrics.selectLeftJoin}</p>
                </div>

            </div>
            <p className={s.title}>Activity log</p>
            <p className={s.sub_title}>Explore the app and see metrics here</p>
            {arr.map(({timeStart, timeTaken, sql, resultsCount }, i) => (
                <div key={i} className={s.log_block}>
                    <p className={s.text_gray}>{timeStart},{timeTaken}ms</p>
                    <p className={s.text_black}>{resultsCount},{sql}</p>
                </div>
            ))}
          </div>
        </Section>
    )
}


export default DashboardPage



