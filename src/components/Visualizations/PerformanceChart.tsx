import React from 'react';
interface PerformanceMetric {
  modelId: string;
  modelName: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  trainingTime: number;
  color: string;
}
interface PerformanceChartProps {
  metrics: PerformanceMetric[];
  selectedMetric: string;
}
export const PerformanceChart = ({
  metrics,
  selectedMetric
}: PerformanceChartProps) => {
  const maxValue = Math.max(...metrics.map(m => m[selectedMetric as keyof PerformanceMetric] as number));
  const getMetricLabel = (metric: string): string => {
    switch (metric) {
      case 'accuracy':
        return 'Accuracy';
      case 'precision':
        return 'Precision';
      case 'recall':
        return 'Recall';
      case 'f1Score':
        return 'F1 Score';
      case 'trainingTime':
        return 'Training Time (s)';
      default:
        return metric;
    }
  };
  return <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium text-gray-800 mb-4">
        {getMetricLabel(selectedMetric)}
      </h3>
      <div className="space-y-4">
        {metrics.map(metric => {
        const value = metric[selectedMetric as keyof PerformanceMetric] as number;
        const percentage = value / maxValue * 100;
        return <div key={metric.modelId} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{metric.modelName}</span>
                <span>
                  {selectedMetric === 'trainingTime' ? `${value.toFixed(2)}s` : `${(value * 100).toFixed(1)}%`}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="h-2.5 rounded-full" style={{
              width: `${percentage}%`,
              backgroundColor: metric.color
            }}></div>
              </div>
            </div>;
      })}
      </div>
    </div>;
};