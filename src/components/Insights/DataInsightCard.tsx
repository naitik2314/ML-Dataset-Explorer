import React from 'react';
import { CheckCircleIcon, XCircleIcon } from 'lucide-react';
interface DataInsightCardProps {
  title: string;
  description: string;
  recommendations: Array<{
    modelType: string;
    suitable: boolean;
    reason: string;
  }>;
}
export const DataInsightCard = ({
  title,
  description,
  recommendations
}: DataInsightCardProps) => {
  return <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <h4 className="text-sm font-medium text-gray-700 mb-2">
        Model Recommendations:
      </h4>
      <div className="space-y-3">
        {recommendations.map((rec, index) => <div key={index} className="flex items-start space-x-3">
            {rec.suitable ? <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> : <XCircleIcon className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />}
            <div>
              <div className="font-medium text-gray-700">{rec.modelType}</div>
              <div className="text-sm text-gray-600">{rec.reason}</div>
            </div>
          </div>)}
      </div>
    </div>;
};