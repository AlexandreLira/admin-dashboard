import React from 'react';
import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';


export default function Chart({title, data, dataKey, grid}){
    const { innerWidth: width } = window
    return(
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={width > 600 ? 4 / 1 : 4 / 2}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip/>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}