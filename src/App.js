import './App.css';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import { healthReport } from './healthCheckReport';

function App() {
  return (
    <div className="App">
      <h2>Dealersite APIs Dashboard</h2>
      {
        healthReport.map((report, i) => {
          const serviceStatusClass = 'status-content ' + (report.status.toLowerCase() === 'up' ? 'up-status' : 'down-status');
          const dbStatusClass = 'status-content ' + (report.components.db.status.toLowerCase() === 'up' ? 'up-status' : 'down-status');
          const diskSpaceStatusClass = 'status-content ' + (report.components.diskSpace.status.toLowerCase() === 'up' ? 'up-status' : 'down-status');
          const pingStatusClass = 'status-content ' + (report.components.ping.status.toLowerCase() === 'up' ? 'up-status' : 'down-status');

          return (
            <div key={i}>
              <div className="service-title">{report.serviceName}</div>
              <div className="flex-row">
                <div className="status-container"><div className="status-content">Service Status</div><div className={serviceStatusClass}>{report.status}</div></div>
                <div className="status-container"><div className="status-content">DB Status</div><div className={dbStatusClass}>{report.components.db.status}</div></div>
                <div className="status-container"><div className="status-content">Disk Space Status</div><div className={diskSpaceStatusClass}>{report.components.diskSpace.status}</div></div>
                <div className="status-container"><div className="status-content">Ping Status</div><div className={pingStatusClass}>{report.components.ping.status}</div></div>
              </div>
            </div>
          );
        })
      }
      
    </div>
  );
}

export default App;
