import './App.css';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import { reports } from './reports';

function App() {
  const scenariosCreatedRef = useRef(null);
  const minLatenciesRef = useRef(null);

  useEffect(() => {
    const scenariosCreated = scenariosCreatedRef.current.getContext('2d');
    const minLatencies = minLatenciesRef.current.getContext('2d');

    new Chart(scenariosCreated, {
      type: 'line',
      data: {
          //Bring in data
          labels: reports.timeStamps,
          datasets: [
              {
                  label: 'scenarios created',
                  data: reports.scenariosCreated,
              }
          ]
      },
      options: {
        maintainAspectRatio: false
      }
    });

    

    new Chart(minLatencies, {
      type: 'line',
      data: {
          //Bring in data
          labels: reports.timeStamps,
          datasets: [
              {
                  label: 'minimum latencies',
                  data: reports.latencies.minLatencies,
              }
          ]
      },
      options: {
          maintainAspectRatio: false
      }
    });
  }, [scenariosCreatedRef, minLatenciesRef])
  return (
    <div className="App">
      <div className="flex-row">
        <div className="graph-container"><canvas id="scenariosCreatedChart" ref={scenariosCreatedRef} /></div>
        <div className="graph-container"><canvas id="minLatenciesChart" ref={minLatenciesRef} /></div>
      </div>
      {/* <div className="flex-row">
        <div className="graph-container"><canvas id="scenariosCreatedChart" ref={scenariosCreatedRef} /></div>
        <div className="graph-container"><canvas id="minLatenciesChart" ref={minLatenciesRef} /></div>
      </div>         */}
    </div>
  );
}

export default App;
