// src/components/RecipeCard.tsx
import React from "react";

interface RecipeCardProps {
  image: string;
  title: string;
  description: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="relative h-[30rem] overflow-hidden group rounded-lg border-2 border-white shadow-lg">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={process.env.REACT_APP_PUBLIC_URL + "/images/" + image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-125"
        />
      </div>
      <div className="absolute inset-0 bg-green-300 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>

      <div className="absolute bottom-0 left-0 right-0 m-2">
        <div className="p-3 bg-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 border-2 border-white rounded-lg">
          <h3 className="text-lg font-bold items-center justify-center">
            {title}
          </h3>
          <hr className="my-2" />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
