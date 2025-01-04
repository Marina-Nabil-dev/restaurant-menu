// src/components/TodaysSpecialRecipes.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import '../assets/css/swiper.css'; // Import custom swiper styles
import RecipeCard from "./RecipeCard";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const recipes = [
  {
    image: "image1.jpg",
    title: "Delicious Pasta",
    description: "A wonderful mix of spices and flavors in every bite.",
  },
  {
    image: "image2.jpg",
    title: "Salad Delight",
    description: "Fresh greens and vegetables for a healthy meal.",
  },
  {
    image: "image4.jpg",
    title: "Dessert Cake",
    description: "Decadent chocolate in a mouthwatering dessert.",
  },

  {
    image: "image5.jpg",
    title: "Yummy Cake",
    description: "A delightful cake with a tangy twist.",
  },

  {
    image: "image6.jpg",
    title: "Lemon Cake",
    description: "A delightful cake with a tangy twist.",
  },
];

const TodayRecipes: React.FC = () => {
  return (
    <div className="p-8 max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Today's Special Recipes</h2>
      <Swiper
        modules={[Autoplay,Navigation, Pagination]}
        navigation={false}
        autoplay={{ delay: 3000, 
          disableOnInteraction: false,
         }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={3}
        spaceBetween={5}
      >
        {recipes.map((recipe, index) => (
          <SwiperSlide key={index}>
            <RecipeCard
              image={recipe.image}
              title={recipe.title}
              description={recipe.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TodayRecipes;
