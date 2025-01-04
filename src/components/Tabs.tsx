import React from 'react';
import { IconType } from 'react-icons';

interface TabProps {
  title: string;
  icon: IconType;
  isActive?: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ title, icon: Icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
        isActive 
          ? 'bg-light-green text-white' 
          : 'hover:bg-gray-100 text-gray-700'
      }`}
    >
      <Icon className="text-xl" />
      <span className="font-medium font-serif">{title}</span>
    </button>
  );
};

export default Tab;
