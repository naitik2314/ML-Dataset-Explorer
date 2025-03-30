import React from 'react';
import { BookOpenIcon, BrainIcon } from 'lucide-react';
export const Navbar = () => {
  return <header className="w-full bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-2">
        <BrainIcon className="h-6 w-6 text-indigo-600" />
        <h1 className="text-xl font-bold text-gray-900">ML Dataset Explorer</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-indigo-600 flex items-center gap-1 text-sm">
          <BookOpenIcon className="h-4 w-4" />
          <span>Documentation</span>
        </button>
        <button className="bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-indigo-700 transition-colors">
          Sign In
        </button>
      </div>
    </header>;
};