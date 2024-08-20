"use client";

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyChart = () => {
  const chartRef = useRef(null);
  const myChartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (myChartRef.current) {
      myChartRef.current.destroy();
    }

    myChartRef.current = new Chart(ctx, {
      type: 'line', // Change this to 'line' for a line chart
      data: {
        labels: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'],
        datasets: [{
          label: 'Today Leads',
          data: [0.0, 0.0, 0.0, 2.0, 1.0, 1.0, 0.0, 2.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
          fill: false, // No fill under the line
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1, // Line tension (curvature)
        }]
      },
      options: {
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                // Return the specific ticks we want
                if (value === 0.5 || value === 1.0 || value === 1.5 || value === 2.0) {
                  return value.toFixed(1);
                }
                return null;
              },
              stepSize: 0.5, // This sets the interval between ticks
              min: 0, // Minimum value for the y-axis
              max: 2 // Maximum value for the y-axis
            }
          }
        }
      }
    });

    // Cleanup function to destroy chart instance when component unmounts
    return () => {
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <canvas ref={chartRef} width="1000" height="500"></canvas>
    </div>
  );
};

export default MyChart;
