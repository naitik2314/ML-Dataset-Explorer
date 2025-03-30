import React, { cloneElement } from 'react';
import { BookOpenIcon, GraduationCapIcon, PlayCircleIcon, FileTextIcon } from 'lucide-react';
export const LearningResources = () => {
  const resources = [{
    id: 1,
    title: 'Understanding Classification Models',
    description: 'Learn how to choose the right classification model for your data',
    type: 'article',
    icon: <FileTextIcon className="h-5 w-5" />,
    difficulty: 'Beginner'
  }, {
    id: 2,
    title: 'Regression Analysis Deep Dive',
    description: 'Advanced techniques for regression model selection and evaluation',
    type: 'course',
    icon: <GraduationCapIcon className="h-5 w-5" />,
    difficulty: 'Advanced'
  }, {
    id: 3,
    title: 'Feature Engineering Best Practices',
    description: 'How to prepare your data for optimal model performance',
    type: 'video',
    icon: <PlayCircleIcon className="h-5 w-5" />,
    difficulty: 'Intermediate'
  }, {
    id: 4,
    title: 'Model Evaluation Metrics Explained',
    description: 'A comprehensive guide to understanding performance metrics',
    type: 'article',
    icon: <FileTextIcon className="h-5 w-5" />,
    difficulty: 'Beginner'
  }, {
    id: 5,
    title: 'Time Series Forecasting',
    description: 'Techniques for analyzing time-dependent data patterns',
    type: 'course',
    icon: <GraduationCapIcon className="h-5 w-5" />,
    difficulty: 'Advanced'
  }, {
    id: 6,
    title: 'Clustering Algorithms Compared',
    description: 'When to use different clustering approaches',
    type: 'video',
    icon: <PlayCircleIcon className="h-5 w-5" />,
    difficulty: 'Intermediate'
  }];
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-blue-100 text-blue-800',
    Advanced: 'bg-purple-100 text-purple-800'
  };
  const typeColors = {
    article: 'bg-gray-100 text-gray-800',
    course: 'bg-yellow-100 text-yellow-800',
    video: 'bg-red-100 text-red-800'
  };
  return <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Learning Resources</h2>
        <p className="text-gray-600 mt-1">
          Expand your knowledge with these educational materials
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map(resource => <div key={resource.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className={`p-2 rounded-full ${typeColors[resource.type as keyof typeof typeColors]}`}>
                {cloneElement(resource.icon, {
              className: `${resource.icon.props.className} ${resource.type === 'article' ? 'text-gray-600' : resource.type === 'course' ? 'text-yellow-600' : 'text-red-600'}`
            })}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">
                {resource.type}
              </span>
            </div>
            <h3 className="font-medium text-lg text-gray-800 mb-2">
              {resource.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
            <div className="flex justify-between items-center">
              <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[resource.difficulty as keyof typeof difficultyColors]}`}>
                {resource.difficulty}
              </span>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
                <BookOpenIcon className="h-4 w-4 mr-1" />
                <span>Read More</span>
              </button>
            </div>
          </div>)}
      </div>
    </div>;
};