import React from 'react';
import Chart from 'react-apexcharts';

export default function PieChart({posting = 0, penduduk = 0, keluarga = 0, aparat = 0}) {
  const options = {
    labels: ['Total Posting', 'Total Penduduk', 'Total Keluarga', 'Aparat Desa'],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      offsetY: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',  
          labels: {
            show: true,
            total: {
              showAlways: false,
              show: true,
              label: 'Overview',
              fontSize: '20px',
              fontWeight: 600,
              color: '#000',
              formatter: function (w) {
                return 'Data';
              }
            }
          }
        }
      }
    },
    colors: ['#2563EB', '#00E496', '#FEB019', '#FF4560'],
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        const seriesIndex = opts.seriesIndex;
        return opts.w.config.series[seriesIndex];
      },
      style: {
        fontSize: '14px',
        colors: ['#fff']
      }
    }
  };

  const series = [posting, penduduk, keluarga, aparat];

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="500"
      />
    </div>
  );
}
