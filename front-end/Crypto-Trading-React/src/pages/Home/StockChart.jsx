import React from 'react'
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts"; 
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { getMarketChart } from '../../State/Coin/Action';



const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    label: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series",
    label: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "Monthly Time Series",
    label: "1 Month",
    value: 30,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY_3",
    key: "3 Month Time Series",
    label :  "3 Month",
    value: 90,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY_6",
    key: "6 Month Time Series",
    label : "6 Month",
    value: 180,
  },
  {
    keyword: "DIGITAL_CURRENCY_YEARLY",
    key: "Yearly Time Series",
    label : "1 year",
    value: 365,
  },
];



const StockChart = ({coinId}) => {
    const dispatch = useDispatch();
    const {coin} = useSelector(store => store);
    


    const [activeLabel, setActiveLabel] = useState(timeSeries[0]);

    const series = [
        {
             data: coin.marketChart.data.map(([time, value]) => [time, Number(value.toFixed(2))])
        },
    ];

    const options = 
    { 
        chart: {
            id:"area-datetime",
            type:"area",
            height: 350,
            zoom : { autoScaleYaxis: true}
        },
        dataLabels: {
            enabled: false
        },

        xaxis:{
            type: "datetime",
            tickAmount: 3
        },
        markers:{
            colors:["#0D0D0D"],
            strokeColor: "#fff",
            size: 0,
            strokeWidth:1,
            strokeDashArray: 0,
            style: "hollow"
        },
        
        colors:['#9AD600'],

        tooltip:{
            theme: "dark",
        },

        fill : {
            type: "gradient",
            gradient : {
                shadeIntensity : 1,
                opacityFrom : 0.8, 
                opacityTo : 0.9, 
                stops : [0,100]
            }
        },

        grid : {
            borderColor : "#47535E",
            strokeDashArray : 4, 
            show: true
        }




    }

    const handleActiveLabel = (value) => {
            setActiveLabel(value);    };



    useEffect(() => {
        dispatch(getMarketChart({coinId, days : activeLabel.value, jwt: localStorage.getItem("jwt")}));
    }, [dispatch,coinId, activeLabel]);

    return (    
        <div>
            <div className="space-x-3">
            {timeSeries.map((item) => (
            <Button className='cursor-pointer'
                variant={activeLabel.label === item.label ? "" : "outline"}
                onClick={() => handleActiveLabel(item)}
                key={item.label}
            >
            {item.label}
            </Button>
            ))}
            </div>

            <div id= "chart-timelines"> 
                <ReactApexChart 
                options ={options}
                series = {series} 
                type = "area" 
                height = {450} 
                
                />
            </div>

        </div>
    )
}

export default StockChart 