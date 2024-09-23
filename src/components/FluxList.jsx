import React from 'react';

const FluxList = ({ fluxData }) => {
  const dailyFlux = fluxData.filter(flux => flux.type === 'Flux Journaliers');
  const impossibleFlux = fluxData.filter(flux => flux.type === 'Flux Impossibles');

  return (
    <div className="flux-list">
      <h2>Flux Journaliers</h2>
      {dailyFlux.length === 0 ? (
        <p>Aucun flux journalier à afficher.</p>
      ) : (
        <ul>
          {dailyFlux.map((flux, index) => (
            <li key={index}>{flux.date} - {flux.description} : {flux.amount}€</li>
          ))}
        </ul>
      )}
      
      <h2>Flux Impossibles</h2>
      {impossibleFlux.length === 0 ? (
        <p>Aucun flux impossible à afficher.</p>
      ) : (
        <ul>
          {impossibleFlux.map((flux, index) => (
            <li key={index}>{flux.date} - {flux.description} : {flux.amount}€ (Statut: {flux.status})</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FluxList;
