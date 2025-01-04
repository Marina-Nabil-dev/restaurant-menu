import React from 'react';

interface MenuItemProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const TabContent: React.FC<MenuItemProps> = ({ image, title, description, price }) => {
  return (
    <div className="flex items-center space-x-6 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex-shrink-0">
        <img
          src={process.env.REACT_APP_PUBLIC_URL+ image}
          alt={title}
          className="w-24 h-24 rounded-full object-cover border-4 border-light-green"
        />
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-light-green font-serif">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <span className="text-2xl font-bold">${price}</span>
      </div>
    </div>
  );
};

export default TabContent;
