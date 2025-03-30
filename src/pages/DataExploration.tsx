import React, { useState } from 'react';
import { DatasetSelector } from '../components/DatasetSelector';
import { DatasetPreview } from '../components/Visualizations/DatasetPreview';
import { DataInsightCard } from '../components/Insights/DataInsightCard';
import { mockDatasets, mockDataInsights } from '../data/mockData';
export const DataExploration = () => {
  const [selectedDataset, setSelectedDataset] = useState(mockDatasets[0].id);
  const dataset = mockDatasets.find(ds => ds.id === selectedDataset) || mockDatasets[0];
  const relevantInsights = mockDataInsights.filter(insight => insight.datasetId === selectedDataset);
  return <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Data Exploration</h2>
        <p className="text-gray-600 mt-1">
          Explore different datasets and understand their characteristics
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <DatasetSelector selectedDataset={selectedDataset} onSelectDataset={setSelectedDataset} datasets={mockDatasets} />
          <div className="mt-6 space-y-4">
            {relevantInsights.map(insight => <DataInsightCard key={insight.id} title={insight.title} description={insight.description} recommendations={insight.recommendations} />)}
          </div>
        </div>
        <div className="lg:col-span-2">
          <DatasetPreview dataset={dataset} />
        </div>
      </div>
    </div>;
};