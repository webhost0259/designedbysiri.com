import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      
      <p className="text-lg text-gray-700 mb-4">
        We’re here to help! Whether you have questions about our products, need assistance with an order, or just want to give feedback, feel free to reach out to us. We value your input and look forward to hearing from you.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Store Location</h2>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Address:</strong> Kukatpally, Hyderabad, Telangana, India
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Email:</strong> <a href="mailto:designerstudio.siri@gmail.com" className="text-green-600 hover:underline">designerstudio.siri@gmail.com</a>
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <strong>Phone:</strong> +91-9059493300
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us</h2>
      <p className="text-lg text-gray-700 mb-4">
        Stay connected with us on social media to see our latest collections and updates:
      </p>
      <p className="text-lg text-gray-700 mb-4">
        <a href="#" className="text-green-600 hover:underline">Instagram</a> | <a href="#" className="text-green-600 hover:underline">Facebook</a>
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Website Developer</h2>
      <p className="text-lg text-gray-700 mb-4">
        Our website is developed and maintained by my brother, a software professional who specializes in inventory management systems and web applications.
      </p>
      <p className="text-lg text-gray-700">
        <strong>Developer Contact:</strong> <a href="mailto:skankara.webhost@gmail.com" className="text-green-600 hover:underline">skankara.webhost@gmail.com</a>
      </p>
    </div>
  );
};

export default ContactUs;