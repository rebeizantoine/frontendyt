import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import DashboardCV from './DashboardCV';
import DashboardAbout from './DashboardAbout';
import DashboardExperience from './DashboardExperience';
import DashboardSkills from './DashboardSkills';
import DashboardProjects from './DashboardProjects';
import './dashboard.css';

function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <div className="main">
        <DashboardCV />
        <DashboardAbout />
        <DashboardExperience />
        <DashboardSkills />
        <DashboardProjects />
      </div>
    </div>
  );
}

export default Dashboard;