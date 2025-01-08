import React from 'react';

interface Fee {
  particular: string;
  amount: number;
}

interface FeeTableProps {
  fees: Fee[];
}

const FeeTable = ({ fees }: FeeTableProps) => {
  const total = fees.reduce((sum, fee) => sum + fee.amount, 0);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-800">Particular</th>
            <th className="px-6 py-3 text-right text-sm font-semibold text-gray-800">Amount (₹)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {fees.map((fee) => (
            <tr key={fee.particular}>
              <td className="px-6 py-4 text-sm text-gray-700">{fee.particular}</td>
              <td className="px-6 py-4 text-right text-sm text-gray-700">
                {fee.amount.toLocaleString()}
              </td>
            </tr>
          ))}
          <tr className="bg-gray-50 font-semibold">
            <td className="px-6 py-4 text-sm text-gray-800">Total</td>
            <td className="px-6 py-4 text-right text-sm text-gray-800">
              {total.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FeeTable;