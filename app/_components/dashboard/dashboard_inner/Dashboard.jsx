import React from 'react'
import DashboardCards from './DashboardCards';
import Campaigns from './Campaigns';
import DashboardChart from './DashboardCharts';

const Dashboard = () => {
  return (
    <div>
      <DashboardCards/>
      <Campaigns/>
      <DashboardChart/>
    </div>
  )
}

export default Dashboard;