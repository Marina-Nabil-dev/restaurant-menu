import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface ReservationFormValues {
  name: string;
  email: string;
  contactNo: string;
  numberOfPersons: string;
  date: string;
  time: string;
  preferredFood: string;
  occasion: string;
}

const initialValues: ReservationFormValues = {
  name: "",
  email: "",
  contactNo: "",
  numberOfPersons: "",
  date: "",
  time: "",
  preferredFood: "",
  occasion: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  contactNo: Yup.string().required("Contact number is required"),
  numberOfPersons: Yup.string().required("Number of persons is required"),
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
  preferredFood: Yup.string().required("Preferred food is required"),
  occasion: Yup.string().required("Occasion is required"),
});

const ReservationForm: React.FC = () => {
  const handleSubmit = (values: ReservationFormValues) => {
    console.log(values);
    // Handle form submission
  };

  const occasions = ["Birthday", "Anniversary", "Business Meeting", "Other"];
  const foodPreferences = ["Continental", "Italian", "Indian", "Chinese"];
  const personOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

  return (
    <div className="min-h-screen bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-cursive text-green-600 mb-4 italic">
            Reservations
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            BOOKING FORM
          </h2>
          <p className="text-gray-600 font-semibold">
            PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="form-group">
                  <Field
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:border-green-500"
                  />
                  {errors.name && touched.name && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <Field
                    name="email"
                    type="email"
                    placeholder="E-Mail ID"
                    className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:border-green-500"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Contact Number Field */}
                <div className="form-group">
                  <Field
                    name="contactNo"
                    type="text"
                    placeholder="Contact No."
                    className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:border-green-500"
                  />
                  {errors.contactNo && touched.contactNo && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.contactNo}
                    </div>
                  )}
                </div>

                {/* Number of Persons Field */}
                <div className="form-group">
                  <Field
                    as="select"
                    name="numberOfPersons"
                    className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:border-green-500"
                  >
                    <option value="">No. Of Persons</option>
                    {personOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                  {errors.numberOfPersons && touched.numberOfPersons && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.numberOfPersons}
                    </div>
                  )}
                </div>

                {/* Date Field */}
                <div className="form-group">
                  <Field
                    name="date"
                    type="date"
                    className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:border-green-500"
                  />
                  {errors.date && touched.date && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.date}
                    </div>
                  )}
                </div>

                {/* Time Field */}
                <div className="form-group">
                  <Field
                    name="time"
                    type="time"
                    className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:border-green-500"
                  />
                  {errors.time && touched.time && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.time}
                    </div>
                  )}
                </div>

                {/* Preferred Food Field */}
                <div className="form-group">
                  <Field
                    as="select"
                    name="preferredFood"
                    className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:border-green-500"
                  >
                    <option value="">Preferred Food</option>
                    {foodPreferences.map((food) => (
                      <option key={food} value={food}>
                        {food}
                      </option>
                    ))}
                  </Field>
                  {errors.preferredFood && touched.preferredFood && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.preferredFood}
                    </div>
                  )}
                </div>

                {/* Occasion Field */}
                <div className="form-group">
                  <Field
                    as="select"
                    name="occasion"
                    className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:border-green-500"
                  >
                    <option value="">Occasion</option>
                    {occasions.map((occasion) => (
                      <option key={occasion} value={occasion}>
                        {occasion}
                      </option>
                    ))}
                  </Field>
                  {errors.occasion && touched.occasion && (
                    <div className="text-red-500 text-sm mt-1">
                      {errors.occasion}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="bg-light-green hover:bg-green-500 rounded-lg text-white px-8 py-3 roundedtransition-colors duration-300"
                >
                  BOOK MY TABLE
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ReservationForm;
