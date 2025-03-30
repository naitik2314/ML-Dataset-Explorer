import React, { cloneElement } from 'react';
import { DatabaseIcon, BarChart2Icon, BookOpenIcon } from 'lucide-react';
interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}
export const Sidebar = ({
  activePage,
  setActivePage
}: SidebarProps) => {
  const navItems = [{
    id: 'data-exploration',
    label: 'Data Exploration',
    icon: <DatabaseIcon className="h-5 w-5" />
  }, {
    id: 'model-comparison',
    label: 'Model Comparison',
    icon: <BarChart2Icon className="h-5 w-5" />
  }, {
    id: 'learning-resources',
    label: 'Learning Resources',
    icon: <BookOpenIcon className="h-5 w-5" />
  }];
  return <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map(item => <li key={item.id}>
              <button className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activePage === item.id ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`} onClick={() => setActivePage(item.id)}>
                {cloneElement(item.icon, {
              className: `${item.icon.props.className} ${activePage === item.id ? 'text-indigo-600' : 'text-gray-500'}`
            })}
                <span className={`font-medium ${activePage === item.id ? 'text-indigo-600' : ''}`}>
                  {item.label}
                </span>
              </button>
            </li>)}
        </ul>
      </nav>
    </aside>;
};