import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // do something with the form data here, like sending it to an API
  };

  return (
    <div className="">
      <form>
        <div className="flex flex-row space-x-4 justify-between">
          <div className="mb-4 flex-auto">
            <label
              htmlFor="firstName"
              className="block mb-1 font-light  sm:text-3xl py-4 sm:py-8"
            >
              First Name
            </label>
            <input
              placeholder="John"
              type="text"
              id="firstName"
              name="firstName"
              onChange={handleInputChange}
              className="block bg-gray26 text-white w-full h-14   sm:h-32 sm:text-3xl sm:px-14 px-4 py-2 border border-formBorder  shadow-sm focus:ring-indigo-500 focus:border-indigo-500  "
            />
          </div>
          <div className="mb-4 flex-auto">
            <label
              htmlFor="lastName"
              className="block mb-1 font-light sm:text-3xl py-4 sm:py-8"
            >
              Last Name
            </label>
            <input
              placeholder="Smith"
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleInputChange}
              className="block bg-gray26 text-white w-full h-14  sm:h-32 sm:text-3xl sm:px-14  px-4 py-2 border border-formBorder  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
            />
          </div>
        </div>
        <div className="sm:flex sm:flex-row sm:space-x-4 justify-between">
          <div className="mb-4 flex-auto">
            <label
              htmlFor="email"
              className="block mb-1 font-light sm:text-3xl py-4 sm:py-8"
            >
              Email
            </label>
            <input
              placeholder="Jhon@example.com"
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              className="block bg-gray26 text-white w-full h-14  sm:h-32 sm:text-3xl sm:px-14 px-4 py-2 border border-formBorder  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
            />
          </div>
          <div className="mb-4 flex-auto">
            <label
              htmlFor="number"
              className="block mb-1 font-light sm:text-3xl py-4 sm:py-8"
            >
              Phone
            </label>
            <input
              placeholder="123 456 7894"
              type="number"
              id="phone"
              name="phone"
              onChange={handleInputChange}
              className="block bg-gray26 text-white w-full h-14  sm:h-32 sm:text-3xl sm:px-14 px-4 py-2 border border-formBorder  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-1 font-light sm:text-3xl py-4 sm:py-8"
          >
            Message(Optional)
          </label>
          <textarea
            placeholder="Message...."
            id="message"
            name="message"
            rows="4"
            onChange={handleInputChange}
            className="block bg-gray26 text-white w-full h-32 px-4 py-2 border border-formBorder  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow text-bg text-xl font-semibold px-12 sm:mt-4 sm:text-2xl sm:px-20 py-4   shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          onClick={handleSubmit}
        >
          Contact Us
        </button>
      </form>
    </div>
  );
}
