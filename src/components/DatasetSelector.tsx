import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
interface DatasetSelectorProps {
  selectedDataset: string;
  onSelectDataset: (dataset: string) => void;
  datasets: Array<{
    id: string;
    name: string;
    description: string;
    recordCount: number;
    features: number;
    type: string;
  }>;
}
export const DatasetSelector = ({
  selectedDataset,
  onSelectDataset,
  datasets
}: DatasetSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selected = datasets.find(dataset => dataset.id === selectedDataset);
  return <div className="w-full">
      <div className="mb-2 text-sm font-medium text-gray-700">
        Select Dataset
      </div>
      <div className="relative">
        <button className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg p-3 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" onClick={() => setIsOpen(!isOpen)}>
          <span>{selected?.name || 'Select a dataset'}</span>
          <ChevronDownIcon className="h-5 w-5 text-gray-400" />
        </button>
        {isOpen && <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 overflow-auto border border-gray-200">
            {datasets.map(dataset => <button key={dataset.id} className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${selectedDataset === dataset.id ? 'bg-indigo-50 text-indigo-700' : ''}`} onClick={() => {
          onSelectDataset(dataset.id);
          setIsOpen(false);
        }}>
                <div className="font-medium">{dataset.name}</div>
                <div className="text-sm text-gray-500">
                  {dataset.description}
                </div>
              </button>)}
          </div>}
      </div>
    </div>;
};