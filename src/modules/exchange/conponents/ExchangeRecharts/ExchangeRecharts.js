import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import React from "react";


function ExchangeRecharts() {

    const data = [
        {name: 'AUD', uv: 19.3807},
        {name: 'CAD', uv: 20.9237},
        {name: 'CNY', uv: 4.1305},
        {name: 'HRK', uv: 4.182},
        {name: 'CZK', uv: 1.2344},
        {name: 'DKK', uv: 4.2167},
        {name: 'HKD', uv: 3.4301},
        {name: 'HUF', uv: 4.182},
        {name: 'INR', uv: 0.36266},
        {name: 'IDR', uv: 0.0018757},
        {name: 'ILS', uv: 8.3312},
        {name: 'JPY', uv: 0.24412}
    ];


    const renderLineChart = (
        <LineChart width={700} height={300} data={data} margin={{top: 15, right: 20, bottom: 5, left: 0}}>
            <Line type="monotone" dataKey="uv" stroke="#FF7F54"/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
        </LineChart>
    );

    return (
        <div>{renderLineChart}</div>
    )
}

export default ExchangeRecharts;