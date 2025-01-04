import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Us */}
            <div>
              <h3 className="text-2xl font-cursive text-light-green mb-4">
                About Us
              </h3>
              <p className="text-gray-400 mb-4">
                Aenean commodo ligula eget dolor aenean massa. Cum sociis nat
                penatibus set magnis dis parturient montes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-google-plus"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            {/* New Menu */}
            <div>
              <h3 className="text-2xl font-cursive text-light-green mb-4">
                New Menu
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Italian Bomba Sandwich
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Double Dose of Pork Belly
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Spicy Thai Noodles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Triple Truffle Trotters
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-2xl font-cursive text-light-green mb-4">
                Contact Us
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-map-marker-alt mr-2"></i>6 E Esplanade,
                  St Albans VIC 3021, Australia
                </li>
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-phone mr-2"></i>
                  +91 80005 89080
                </li>
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-envelope mr-2"></i>
                  support@domain.com
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-2xl font-cursive text-light-green mb-4">
                Opening Hours
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Monday - Thursday</li>
                <li className="text-gray-400">11:00 AM - 9:00 PM</li>
                <li className="text-gray-400">Friday - Saturday</li>
                <li className="text-gray-400">11:00 AM - 5:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-light-green text-white py-4 text-center">
        <p>
          Copyright © 2045 All Rights Reserved | Design By:
          <a href="#" className="underline ml-1">
            HTML Design
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
