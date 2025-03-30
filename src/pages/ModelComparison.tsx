import React, { useState } from 'react';
import { DatasetSelector } from '../components/DatasetSelector';
import { ModelSelector } from '../components/ModelSelector';
import { PerformanceChart } from '../components/Visualizations/PerformanceChart';
import { ModelInsights } from '../components/Insights/ModelInsights';
import { mockDatasets, mockModels, mockPerformanceData, mockModelInsights } from '../data/mockData';
export const ModelComparison = () => {
  const [selectedDataset, setSelectedDataset] = useState(mockDatasets[0].id);
  const [selectedModels, setSelectedModels] = useState([mockModels[0].id, mockModels[1].id]);
  const [selectedMetric, setSelectedMetric] = useState('accuracy');
  const handleModelToggle = (modelId: string) => {
    if (selectedModels.includes(modelId)) {
      setSelectedModels(selectedModels.filter(id => id !== modelId));
    } else {
      setSelectedModels([...selectedModels, modelId]);
    }
  };
  const filteredPerformanceData = mockPerformanceData.filter(data => data.datasetId === selectedDataset && selectedModels.includes(data.modelId)).map(data => {
    const model = mockModels.find(m => m.id === data.modelId);
    return {
      modelId: data.modelId,
      modelName: model?.name || 'Unknown Model',
      accuracy: data.metrics.accuracy,
      precision: data.metrics.precision,
      recall: data.metrics.recall,
      f1Score: data.metrics.f1Score,
      trainingTime: data.metrics.trainingTime,
      color: data.color
    };
  });
  return <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Model Comparison</h2>
        <p className="text-gray-600 mt-1">
          Compare performance of different models on selected datasets
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <DatasetSelector selectedDataset={selectedDataset} onSelectDataset={setSelectedDataset} datasets={mockDatasets} />
          <ModelSelector selectedModels={selectedModels} onSelectModel={handleModelToggle} models={mockModels} />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Performance Metrics
              </h3>
              <div className="flex flex-wrap gap-2">
                {['accuracy', 'precision', 'recall', 'f1Score', 'trainingTime'].map(metric => <button key={metric} className={`px-3 py-1 text-sm rounded-full ${selectedMetric === metric ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'}`} onClick={() => setSelectedMetric(metric)}>
                    {metric === 'trainingTime' ? 'Training Time' : metric === 'f1Score' ? 'F1 Score' : metric.charAt(0).toUpperCase() + metric.slice(1)}
                  </button>)}
              </div>
            </div>
            {filteredPerformanceData.length > 0 ? <PerformanceChart metrics={filteredPerformanceData} selectedMetric={selectedMetric} /> : <div className="text-center py-8 text-gray-500">
                Select at least one model to see performance metrics
              </div>}
          </div>
          <ModelInsights insights={mockModelInsights} selectedDataset={selectedDataset} selectedModels={selectedModels} />
        </div>
      </div>
    </div>;
};