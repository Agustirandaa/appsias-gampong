import React from 'react';
import Chart from 'react-apexcharts';

export default function MultiLineChart() {

  const [chartData, setChartData] = React.useState({
    postings: [],
    families: [],
    residents: []
  })

  React.useEffect( () => {
    fetch('/splineareachart/getdatamonthlychart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => {
      setChartData(data)
    })
  }, [] )

  const options = {
    chart: {
      id: 'multi-line-chart',
      type: 'line',
      toolbar: {
        show: false 
      },
    },
    stroke: {
      width: [3, 3, 3], 
      curve: 'smooth' 
    },
    markers: {
      size: 5,
      hover: {
        size: 7 
      }
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      y: {
        formatter: function (val) {
          return val.toFixed(0); 
        }
      }
    },
    dataLabels: {
      enabled: false 
    },
    title: {
      text: 'Grafik Penambahan Data dalam 1 Tahun',
      align: 'center',
      margin: 20,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#000'
      },
    },
  };

  const series = [
    {
      name: 'Penambahan Posting',
      data: chartData.postings.length ? chartData.postings : Array(12).fill(0)
    },
    {
      name: 'Penambahan Keluarga',
      data: chartData.families.length ? chartData.families : Array(12).fill(0)
    },
    {
      name: 'Penambahan Penduduk',
      data: chartData.residents.length ? chartData.residents : Array(12).fill(0)
    },
  ];

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Chart
        options={options}
        series={series}
        type="line"
        height={'100%'}
        width={'100%'}
      />
    </div>
  );
}
