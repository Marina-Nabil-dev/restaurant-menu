import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Newsletter: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Newsletter subscription:', values);
    },
  });

  return (
    <div className="relative py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/api/placeholder/1920/400")`,
          filter: 'brightness(0.5)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-5xl font-cursive text-white mb-4">Newsletter</h2>
        <p className="text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        
        <form onSubmit={formik.handleSubmit} className="max-w-2xl mx-auto flex">
          <input
            type="email"
            name="email"
            placeholder="Enter Your E-Mail Id"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="flex-1 px-4 py-3 rounded-l focus:outline-none"
          />
          <button 
            type="submit" 
            className="bg-light-green text-white px-6 py-3 rounded-r hover:bg-green-500 transition-colors"
          >
            <span className="transform rotate-90">➤</span>
          </button>
        </form>
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-400 mt-2">{formik.errors.email}</div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;