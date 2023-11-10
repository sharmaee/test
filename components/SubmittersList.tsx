import React, { useState } from 'react';

const SubmittersList = () => {
  // Here you should fetch the data from your API and store it in a state variable.
  // For the sake of this example, I will use dummy data.

  const [submitters, setSubmitters] = useState([
    { name: 'Submitter 1', submissions: 100, denials: 20 },
    { name: 'Submitter 2', submissions: 120, denials: 30 },
    // ...rest of the submitters
  ]);

  const [sortOrder, setSortOrder] = useState('highest');

  const sortSubmitters = (order: string) => {
    setSortOrder(order);
    const sortedSubmitters = [...submitters].sort((a, b) => {
      const aDenialPercentage = (a.denials / a.submissions) * 100;
      const bDenialPercentage = (b.denials / b.submissions) * 100;

      if (order === 'highest') {
        return bDenialPercentage - aDenialPercentage;
      } else {
        return aDenialPercentage - bDenialPercentage;
      }
    });

    setSubmitters(sortedSubmitters);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Submitters</h1>
      <div className="mb-4">
        <button onClick={() => sortSubmitters('highest')} className="mr-2">Sort by highest denial %</button>
        <button onClick={() => sortSubmitters('lowest')}>Sort by lowest denial %</button>
      </div>
      <ul>
        {submitters.map((submitter, index) => (
          <li key={index}>
            <p>Name: {submitter.name}</p>
            <p>Submissions: {submitter.submissions}</p>
            <p>Denials: {submitter.denials}</p>
            <p>Denial %: {(submitter.denials / submitter.submissions) * 100}%</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmittersList;