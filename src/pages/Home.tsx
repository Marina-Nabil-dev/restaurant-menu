import React from "react";
import { motion } from "framer-motion";
import TodayRecipes from "../components/TodayRecipes";
import Menu from "./Menu";
import Blog from "../components/Blog";
import ReservationForm from "../components/ReservationForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
const Home: React.FC = () => {
  return (
    <>
      <Header logo="/images/logo1.png" />
      <section
        id="home"
        className="bg-black text-white min-h-screen flex flex-col justify-center items-center relative"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/background-1.jpg')" }}
        ></div>
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4 z-10 md:mt-20"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Dinner with Your <span className="text-light-green ">Family</span>
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl italic mb-8 z-10"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          "The best way to find yourself is to lose yourself in the service of others."
        </motion.h2>
        <p className="text-center z-10 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diem
          nonummy nibh euismod.
        </p>
        <button className="bg-light-green hover:bg-green-500 text-white font-bold py-2 px-6 rounded z-10">
          BOOK MY TABLE
        </button>

        <section id="about">
          <TodayRecipes />
        </section>
        {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
          <div className="w-12 h-12 bg-light-green rounded-full animate-bounce"></div>
        </div> */}
      </section>

  

      <section
        id="menu"
        className="m-2 min-h-screen lg:max-w-[900px] sm:max-w-[800px] items-center justify-center mx-auto"
      >
        <h2 className="text-light-green text-4xl font-bold mb-8 text-center italic">
          Our Menu
        </h2>
        <Menu />
      </section>

      <section
        id="blog"
        className="bg-black text-white min-h-screen justify-center items-center relative"
      >
        <Blog />
      </section>

      <section
        id="reservation-form"
        className="bg-white text-gray-800 min-h-screen"
      >
        <ReservationForm />
      </section>
      <Footer />
    </>
  );
};

export default Home;
