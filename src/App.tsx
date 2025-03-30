import React, { useState } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Sidebar } from './components/Layout/Sidebar';
import { DataExploration } from './pages/DataExploration';
import { ModelComparison } from './pages/ModelComparison';
import { LearningResources } from './pages/LearningResources';
export function App() {
  const [activePage, setActivePage] = useState('data-exploration');
  return <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-1 w-full">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {activePage === 'data-exploration' && <DataExploration />}
          {activePage === 'model-comparison' && <ModelComparison />}
          {activePage === 'learning-resources' && <LearningResources />}
        </main>
      </div>
    </div>;
}