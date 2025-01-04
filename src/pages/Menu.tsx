import React, { useState } from 'react';
import Tab from '../components/Tabs';
import TabContent from '../components/TabContent';
import { FaPizzaSlice, FaHamburger, FaCocktail, FaBirthdayCake } from 'react-icons/fa';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pizza');

  const menuItems = {
    pizza: [
      {
        image: "/menu/margherita.jpg",
        title: "Margherita Pizza",
        description: "Fresh tomatoes, mozzarella, basil, and olive oil",
        price: 14.99
      },
      {
        image: "/menu/pepperoni.jpg",
        title: "Pepperoni Pizza",
        description: "Classic pepperoni with extra cheese",
        price: 16.99
      },
      {
        image: "/menu/veggie.jpg",
        title: "Veggie Pizza",
        description: "Assorted vegetables and cheese",
        price: 15.99
      },
      {
        image: "/menu/hawaiian.jpg",
        title: "Hawaiian Pizza",
        description: "Ham and pineapple with cheese",
        price: 17.99
      }
    ],
    burgers: [
      {
        image: "/menu/classic-burger.jpg",
        title: "Classic Burger",
        description: "Beef patty with lettuce, tomato, and special sauce",
        price: 12.99
      },
      {
        image: "/menu/cheese-burger.jpg",
        title: "Cheese Burger",
        description: "Double cheese with caramelized onions",
        price: 13.99
      },
      {
        image: "/menu/bacon-burger.jpg",
        title: "Bacon Burger",
        description: "Beef patty with crispy bacon and cheese",
        price: 14.99
      }
    ],
    drinks: [
      {
        image: "/menu/mojito.jpg",
        title: "Mojito",
        description: "Fresh mint, lime, rum, and soda",
        price: 8.99
      },
      {
        image: "/menu/margarita.jpg",
        title: "Margarita",
        description: "Tequila, triple sec, and lime juice",
        price: 9.99
      },
      {
        image: "/menu/lemonade.jpg",
        title: "Lemonade",
        description: "Fresh lemon juice and sugar",
        price: 4.99
      }
    ],
    desserts: [
      {
        image: "/menu/chocolate-cake.jpg",
        title: "Chocolate Cake",
        description: "Decadent chocolate cake with chocolate ganache",
        price: 7.99
      },
      {
        image: "/menu/cheesecake.jpg",
        title: "Cheesecake",
        description: "Creamy cheesecake with strawberry topping",
        price: 6.99
      },
      {
        image: "/menu/tiramisu.jpg",
        title: "Tiramisu",
        description: "Classic tiramisu with espresso and ladyfingers",
        price: 8.99
      }
    ]
  };

  return (
    <div className="container lg:max-h-[800] md:max-h-[800] py-5 px-4 bg-gray-100 rounded shadow-lg m-2 items-center justify-center text-center">
      <div className="flex space-x-4 mb-8 py-2 border-b-2 border-green-50">
        <Tab
          title="Pizza"
          icon={FaPizzaSlice}
          isActive={activeTab === 'pizza'}
          onClick={() => setActiveTab('pizza')}
        />
        <Tab
          title="Burgers"
          icon={FaHamburger}
          isActive={activeTab === 'burgers'}
          onClick={() => setActiveTab('burgers')}
        />
        <Tab
          title="Drinks"
          icon={FaCocktail}
          isActive={activeTab === 'drinks'}
          onClick={() => setActiveTab('drinks')}
        />
        <Tab
        title="Desserts"
        icon={FaBirthdayCake}
        isActive={activeTab === 'desserts'}
        onClick={() => setActiveTab('desserts')}
        />
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
        {menuItems[activeTab as keyof typeof menuItems].map((item, index) => (
          <TabContent
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;