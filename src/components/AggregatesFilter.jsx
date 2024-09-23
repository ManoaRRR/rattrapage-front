// import React from 'react';

// const AggregatesFilter = ({ selectedAggregates, onAggregateChange }) => {
//   const handleChange = (e) => {
//     const { name, checked } = e.target;
//     onAggregateChange({
//       ...selectedAggregates,
//       [name]: checked,
//     });
//   };

//   return (
//     <div className="aggregates-filter">
//       <label>
//         <input
//           type="checkbox"
//           name="tresorerie"
//           checked={selectedAggregates.tresorerie}
//           onChange={handleChange}
//         />
//         Trésorerie
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="immobilisations"
//           checked={selectedAggregates.immobilisations}
//           onChange={handleChange}
//         />
//         Immobilisations
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           name="obligations"
//           checked={selectedAggregates.obligations}
//           onChange={handleChange}
//         />
//         Obligations
//       </label>
//     </div>
//   );
// };

// export default AggregatesFilter;
import React from 'react';

const AggregatesFilter = ({ selectedAggregates, onAggregateChange }) => {
  const handleChange = (e) => {
    const { name, checked } = e.target;
    onAggregateChange({
      ...selectedAggregates,
      [name]: checked,
    });
  };

  return (
    <div className="aggregates-filter">
      <label>
        <input
          type="checkbox"
          name="tresorerie"
          checked={selectedAggregates.tresorerie}
          onChange={handleChange}
        />
        Trésorerie
      </label>
      <label>
        <input
          type="checkbox"
          name="immobilisations"
          checked={selectedAggregates.immobilisations}
          onChange={handleChange}
        />
        Immobilisations
      </label>
      <label>
        <input
          type="checkbox"
          name="obligations"
          checked={selectedAggregates.obligations}
          onChange={handleChange}
        />
        Obligations
      </label>
    </div>
  );
};

export default AggregatesFilter;
