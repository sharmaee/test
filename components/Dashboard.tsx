import React from 'react';

const Dashboard = () => {
  // Here you should fetch the data from your API and store it in a state variable.
  // For the sake of this example, I will use dummy data.

  const data = {
    January: { submissions: 100, approvals: 80, denials: 20 },
    February: { submissions: 120, approvals: 90, denials: 30 },
    // ...rest of the months
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Prior Authorization Data</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Month</th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Submissions</th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Approvals</th>
            <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Denials</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([month, data]) => (
            <tr className="hover:bg-grey-lighter" key={month}>
              <td className="py-4 px-6 border-b border-grey-light">{month}</td>
              <td className="py-4 px-6 border-b border-grey-light">{data.submissions}</td>
              <td className="py-4 px-6 border-b border-grey-light">{data.approvals}</td>
              <td className="py-4 px-6 border-b border-grey-light">{data.denials}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;