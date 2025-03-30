import React from 'react';
interface ModelSelectorProps {
  selectedModels: string[];
  onSelectModel: (modelId: string) => void;
  models: Array<{
    id: string;
    name: string;
    type: string;
    description: string;
  }>;
}
export const ModelSelector = ({
  selectedModels,
  onSelectModel,
  models
}: ModelSelectorProps) => {
  // Group models by type
  const modelsByType = models.reduce((acc, model) => {
    if (!acc[model.type]) {
      acc[model.type] = [];
    }
    acc[model.type].push(model);
    return acc;
  }, {} as Record<string, typeof models>);
  return <div className="w-full">
      <div className="mb-2 text-sm font-medium text-gray-700">
        Select Models to Compare
      </div>
      <div className="space-y-4">
        {Object.entries(modelsByType).map(([type, typeModels]) => <div key={type} className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="font-medium text-gray-800 mb-2">{type}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {typeModels.map(model => <div key={model.id} className="flex items-center">
                  <input id={`model-${model.id}`} type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked={selectedModels.includes(model.id)} onChange={() => onSelectModel(model.id)} />
                  <label htmlFor={`model-${model.id}`} className="ml-2 block text-sm text-gray-700">
                    {model.name}
                  </label>
                </div>)}
            </div>
          </div>)}
      </div>
    </div>;
};