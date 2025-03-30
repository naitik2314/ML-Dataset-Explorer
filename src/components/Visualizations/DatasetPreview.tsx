import React from 'react';
interface DatasetPreviewProps {
  dataset: {
    id: string;
    name: string;
    description: string;
    recordCount: number;
    features: number;
    type: string;
    previewData: Array<Record<string, any>>;
    columns: string[];
  };
}
export const DatasetPreview = ({
  dataset
}: DatasetPreviewProps) => {
  return <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium text-gray-800">{dataset.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{dataset.description}</p>
        </div>
        <div className="flex space-x-4">
          <div className="text-right">
            <div className="text-sm text-gray-500">Records</div>
            <div className="text-lg font-medium">{dataset.recordCount}</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Features</div>
            <div className="text-lg font-medium">{dataset.features}</div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {dataset.columns.map(column => <th key={column} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column}
                </th>)}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dataset.previewData.map((row, index) => <tr key={index}>
                {dataset.columns.map(column => <td key={column} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row[column]?.toString() || '-'}
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};