import React from 'react';

const FAQs = () => {
  const faqs = [
    {
      question: 'What types of traditional outfits do you offer?',
      answer: 'We offer a wide range of traditional Indian outfits, including sarees, lehengas, salwar kameez, kurta-pajamas, sherwanis, and more. Our collection also includes ethnic wear for special occasions such as weddings, festivals, and cultural events.',
    },
    {
      question: 'How can I find the right size?',
      answer: 'We provide detailed size charts for each product to help you find the perfect fit. Additionally, many of our outfits offer customization options to tailor the fit according to your measurements. Please refer to our size guide or contact our customer support for assistance.',
    },
    {
      question: 'Do you offer customization or stitching services?',
      answer: 'Yes, we offer customization services for many of our traditional outfits. You can choose from various options like blouse stitching, altering lehenga length, or customizing the fit of a kurta. Please check the product page for available customization options.',
    },
    {
      question: 'What are the payment options available?',
      answer: 'We accept various payment methods including credit/debit cards, net banking, UPI, and popular mobile wallets. Cash on Delivery (COD) is also available for select locations within India.',
    },
    {
      question: 'How long will it take to receive my order?',
      answer: 'Delivery times vary depending on your location and the product ordered. Generally, standard delivery within India takes 5-7 business days. For customized or made-to-order outfits, it may take longer. You will receive an estimated delivery date during checkout.',
    },
    {
      question: 'What is your return and exchange policy?',
      answer: 'We offer a hassle-free return and exchange policy. If you are not satisfied with your purchase, you can return or exchange it within 7 days of delivery. Please ensure the product is in its original condition with tags intact. Customized outfits may not be eligible for return or exchange.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship our traditional outfits worldwide. Shipping charges and delivery times will vary based on the destination. Please enter your address at checkout to view the shipping options and costs.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is dispatched, you will receive a tracking number via email or SMS. You can use this tracking number on our website or the courier partner’s website to check the status of your delivery.',
    },
    {
      question: 'Are the colors of the products exactly as shown in the pictures?',
      answer: 'We make every effort to display the colors of our products as accurately as possible. However, the actual color may vary slightly due to differences in display settings of your device and lighting during photography.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach our customer support team via phone, email, or chat. Our contact details are available on the "Contact Us" page of our website. We are here to assist you with any queries or concerns you may have.',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-800">{faq.question}</h2>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;