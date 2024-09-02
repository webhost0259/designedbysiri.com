'use client';
import React from 'react';

const DeliveryAndReturnPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-6 min-h-screen text-black">
      <h1 className="text-3xl font-thin mb-6">Delivery & Return Policy</h1>

      <section className="mb-6 space-y-4">
        <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
        <p className="mb-2">
          <strong>Delivery Areas:</strong> We currently deliver to all major cities and towns within [Country/Region]. International shipping is available for select countries. Please contact us for more details.
        </p>
        <p className="mb-2">
          <strong>Shipping Methods:</strong> Choose from standard delivery, expedited delivery, or our priority shipping option. Shipping costs vary based on the delivery method and destination.
        </p>
        <p className="mb-2">
          <strong>Order Processing:</strong> Orders are processed within 1-2 business days. Once processed, you will receive a confirmation email with tracking information.
        </p>
        <p className="mb-2">
          <strong>Tracking:</strong> After your order has shipped, you will receive a tracking number via email. You can track your order through our website or the carrier&apos;s website.
        </p>
        <p className="mb-2">
          <strong>Shipping Costs:</strong> Shipping costs are calculated at checkout based on the delivery method and destination. We offer free standard shipping on orders over [amount].
        </p>
        <p className="mb-2">
          <strong>Delivery Times:</strong> Standard delivery takes 5-10 business days, expedited delivery takes 2-5 business days, and priority shipping arrives within 3 days.
        </p>
        <p className="mb-2">
          <strong>Delivery Issues:</strong> If your order is delayed, lost, or damaged, please contact our customer service team immediately.
        </p>
      </section>

      <section className='mb-16 space-y-4'>
        <h2 className="text-xl font-semibold mb-4">Return Policy</h2>
        <p className="mb-2">
          <strong>Eligibility:</strong> Items are eligible for return within 7 days of receipt. Items must be in their original condition and packaging. Some exclusions apply, including sale items and personalized products.
        </p>
        <p className="mb-2">
          <strong>Return Process:</strong> To initiate a return, please contact our customer service team to obtain a Return Authorization Number. Include this number with your return package.
        </p>
        <p className="mb-2">
          <strong>Return Shipping Costs:</strong> Customers are responsible for return shipping costs unless the item is defective or incorrect.
        </p>
        <p className="mb-2">
          <strong>Refunds and Exchanges:</strong> Refunds are processed within 7-10 business days after we receive the returned item. Exchanges are subject to availability.
        </p>
        <p className="mb-2">
          <strong>Condition of Returns:</strong> Returned items must be unused and in their original packaging. Items that do not meet these conditions may not be eligible for a refund.
        </p>
        <p className="mb-2">
          <strong>Restocking Fees:</strong> A restocking fee of [percentage/amount] may apply to certain returns.
        </p>
        <p className="mb-2">
          <strong>Contact Information:</strong> For return assistance or inquiries, please email us at <a href="mailto:designerstudio.siri@gmail.com" className="text-blue-500 hover:underline">designerstudio.siri@gmail.com</a>.
        </p>
        <p className="mb-2">
          <strong>Exceptions:</strong> Personalized and custom-made items cannot be returned unless defective.
        </p>
      </section>
    </div>
  );
};

export default DeliveryAndReturnPolicy;