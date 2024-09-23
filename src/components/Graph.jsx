// 
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Graph = ({ graphData, selectedAggregates }) => {
  if (graphData.length === 0) {
    return <p>Aucune donnée graphique à afficher.</p>;
  }

  return (
    <LineChart width={600} height={300} data={graphData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      {selectedAggregates.tresorerie && <Line type="monotone" dataKey="tresorerie" stroke="#8884d8" />}
      {selectedAggregates.immobilisations && <Line type="monotone" dataKey="immobilisations" stroke="#82ca9d" />}
      {selectedAggregates.obligations && <Line type="monotone" dataKey="obligations" stroke="#ffc658" />}
    </LineChart>
  );
};
export default Graph;