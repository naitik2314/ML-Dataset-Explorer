import React from 'react';
import { InfoIcon } from 'lucide-react';
interface ModelInsight {
  id: string;
  title: string;
  description: string;
  datasetId: string;
  modelIds: string[];
}
interface ModelInsightsProps {
  insights: ModelInsight[];
  selectedDataset: string;
  selectedModels: string[];
}
export const ModelInsights = ({
  insights,
  selectedDataset,
  selectedModels
}: ModelInsightsProps) => {
  // Filter insights that are relevant to the selected dataset and at least one selected model
  const relevantInsights = insights.filter(insight => insight.datasetId === selectedDataset && insight.modelIds.some(modelId => selectedModels.includes(modelId)));
  if (relevantInsights.length === 0) {
    return <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center text-gray-500">
        Select a dataset and models to see insights
      </div>;
  }
  return <div className="space-y-4">
      {relevantInsights.map(insight => <div key={insight.id} className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <InfoIcon className="h-5 w-5 text-indigo-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-indigo-700">{insight.title}</h4>
              <p className="text-sm text-indigo-600 mt-1">
                {insight.description}
              </p>
            </div>
          </div>
        </div>)}
    </div>;
};