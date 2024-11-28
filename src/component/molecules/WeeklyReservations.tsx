import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

function WeeklyReservations() {
    // chartOptions için ApexCharts.ApexOptions tipi ekleniyor
    const chartOptions: ApexOptions = {
        chart: {
            type: 'area',
            height: 350,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
            title: {
                text: 'Weeks',
                style: {
                    color: '#6c757d',
                },
            },
        },
        yaxis: {
            title: {
                text: 'Reservations',
                style: {
                    color: '#6c757d',
                },
            },
        },
        colors: ['#3b82f6'], // Mavi ton
        tooltip: {
            x: {
                formatter: (val: any) => `Week ${val}`,
            },
        },
    };

    // chartData'nın tipini belirtiyoruz
    const chartData = [
        {
            name: 'Reservations',
            data: [20, 60, 30, 100, 10, 40, 90], // Haftalık rezervasyon sayıları
        },
    ];

    return (
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h3 className="card-title">
                    <i className="fas fa-calendar-alt"></i> Weekly Reservations
                </h3>
            </div>
            <div className="card-body">
                <Chart options={chartOptions} series={chartData} type="area" height={350} />
            </div>
        </div>
    );
}

export default WeeklyReservations;
