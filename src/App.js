import React, { useState } from 'react';
import DateFilter from './components/DateFilter';
import AggregatesFilter from './components/AggregatesFilter';
import FluxList from './components/FluxList';
import Graph from './components/Graph';
import { dailyFlux } from './data/fluxData';
import { graphData } from './data/graphData';
import './App.css';
const App = () => {
  const [filteredFlux, setFilteredFlux] = useState(dailyFlux);
  const [filteredGraphData, setFilteredGraphData] = useState(graphData);
  const [selectedAggregates, setSelectedAggregates] = useState({
    tresorerie: true,
    immobilisations: true,
    obligations: true,
  });

  const handleDateChange = (start, end) => {
    const filteredFlux = dailyFlux.filter(flux => flux.date >= start && flux.date <= end);
    const filteredGraph = graphData.filter(point => point.date >= start && point.date <= end);
    setFilteredFlux(filteredFlux);
    setFilteredGraphData(filteredGraph);
  };

  const handleAggregateChange = (newAggregates) => {
    setSelectedAggregates(newAggregates);
  };

  return (
    <div className="app-container">
      <h1>Patrimoine Web Interface</h1>
      <DateFilter onDateChange={handleDateChange} />
      <AggregatesFilter onAggregateChange={handleAggregateChange} selectedAggregates={selectedAggregates} />
      <div className="output-container">
        <pre>{JSON.stringify(filteredFlux, null, 2)}</pre>
        <pre>{JSON.stringify(filteredGraphData, null, 2)}</pre>
        {/* <FluxList fluxData={filteredFlux} />
        <Graph graphData={filteredGraphData} selectedAggregates={selectedAggregates} /> */}
      </div>
    </div>
  );
};

export default App;



// import React, { useState } from 'react';
// import DateFilter from './components/DateFilter';
// import AggregatesFilter from './components/AggregatesFilter';
// import FluxList from './components/FluxList';
// import Graph from './components/Graph';
// import { dailyFlux } from './data/fluxData';
// import { graphData } from './data/graphData';

// import './App.css';

// const App = () => {
//   const [filteredFlux, setFilteredFlux] = useState(dailyFlux);
//   const [filteredGraphData, setFilteredGraphData] = useState(graphData);
//   const [selectedAggregates, setSelectedAggregates] = useState({
//     tresorerie: true,
//     immobilisations: true,
//     obligations: true,
//   });

//   const handleDateChange = (start, end) => {
//     const filteredFlux = dailyFlux.filter(flux => flux.date >= start && flux.date <= end);
//     const filteredGraph = graphData.filter(point => point.date >= start && point.date <= end);
//     setFilteredFlux(filteredFlux);
//     setFilteredGraphData(filteredGraph);
//   };

//   const handleAggregateChange = (newAggregates) => {
//     setSelectedAggregates(newAggregates);
//   };

//   return (
//     <div className="app-container">
//       <h1>Patrimoine Web Interface</h1>
//       <DateFilter onDateChange={handleDateChange} />
//       <AggregatesFilter onAggregateChange={handleAggregateChange} selectedAggregates={selectedAggregates} />
//       <div className="output-container">
//         <FluxList fluxData={filteredFlux} />
//         <Graph graphData={filteredGraphData} selectedAggregates={selectedAggregates} />
//       </div>
//     </div>
//   );
// };

// export default App;
