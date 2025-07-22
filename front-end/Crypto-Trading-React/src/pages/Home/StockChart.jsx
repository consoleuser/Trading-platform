import React from 'react'
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts"; 
import { Button } from '@/components/ui/button';



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



const StockChart = () => {


    const [activeLabel, setActiveLabel] = useState("1 Day");

    const series = [
        {
            data:
        [    
        [1748275428086, 110094.414744417],
        [1748279019775, 109470.221517873],
        [1748282629693, 109188.595764963],
        [1748286158736, 109254.393629706],
        [1748290034702, 109047.579991089],
        [1748293433839, 109519.24046635],
        [1748297019726, 109310.255542356],
        [1748300633724, 109324.182318958],
        [1748304140891, 109393.742631919],
        [1748307853794, 109244.471993633],
        [1748311290695, 108404.653420615],
        [1748315308889, 108291.513165433],
        [1748318617471, 108942.882377056],
        [1748322206065, 109098.688700439],
        [1748325802593, 108882.084770888],
        [1748329325013, 109070.307492026],
        [1748333007808, 109494.226072464],
        [1748336633283, 109657.206144247],
        [1748340593518, 109779.068649832],
        [1748343830253, 109723.76011973],
        [1748347370216, 109553.041181842],
        [1748351149034, 109610.433323682],
        [1748354630506, 110129.167604078],
        [1748358111799, 109507.135694014],
        [1748361845218, 110099.576608111],
        [1748365409935, 110370.169472305],
        [1748369284268, 110318.490480906],
        [1748372626422, 109960.785226089],
        [1748376226234, 109888.527199036],
        [1748379823413, 109727.008615575],
        [1748383413736, 109037.675787297],
        [1748387032000, 109024.620933756],
        [1748390621087, 109068.456949014],
        [1748394238790, 109079.406493368],
        [1748397816433, 108886.384573542],
        [1748401288058, 108768.199882657],
        [1748405022405, 108884.025903837],
        [1748409555582, 108940.177345101],
        [1748416366361, 108862.369611423],
        [1748416625091, 108889.611947242],
        [1748420779714, 108882.048065651],
        [1748429175101, 108709.619898159],
        [1748431543765, 108863.607285888]
        ],

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
            tickAmount: 6
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



    return (    
            //optional can remove cursor pointer from Button
        <div>
            <div className="space-x-3">
            {timeSeries.map((item) => (
            <Button className='cursor-pointer'
            key={item.label}
            variant={activeLabel === item.label ? "" : "outline"}
            onClick={() => handleActiveLabel(item.label)}>
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