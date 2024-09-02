// pages/terms-of-service.tsx
import { FC } from 'react';

const TermsOfService: FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            <p><strong>Effective Date:</strong> [September, 02, 2024]</p>

            <p>Welcome to Sireesha Reddy Designer Studio ("we", "us", "our"). By accessing or using our website <a href="https://designedbysiri.com" className="text-blue-500 hover:underline">designedbysiri.com</a> ("Site") or our services ("Services"), you agree to comply with and be bound by the following Terms of Service ("Terms"). Please read them carefully.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
            <p>By using our Site or Services, you agree to these Terms. If you do not agree to these Terms, please do not use our Site or Services.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. Changes to Terms</h2>
            <p>We reserve the right to modify or revise these Terms at any time. Changes will be effective when posted on this Site. Your continued use of the Site or Services after such changes constitutes your acceptance of the new Terms.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Services</h2>
            <p>We provide designed and non designed, finished and unfinished clothing services and sales. We may update, modify, or discontinue any aspect of our Services at any time.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc list-inside ml-6">
                <li>Use the Site and Services for lawful purposes only.</li>
                <li>Not engage in any activity that interferes with or disrupts our Site or Services.</li>
                <li>Provide accurate, current, and complete information as required for registration or other interactions with us.</li>
                <li>Maintain the security of your account credentials and notify us immediately of any unauthorized use of your account.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. Intellectual Property</h2>
            <p>All content, trademarks, and other intellectual property on our Site and in our Services are owned by or licensed to us. You may not use, copy, reproduce, distribute, or create derivative works from any content on our Site without our express written permission.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Privacy</h2>
            <p>Your use of our Site and Services is also governed by our <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">7. Disclaimers</h2>
            <p>Our Site and Services are provided on an "as-is" and "as-available" basis. We make no warranties or representations, express or implied, regarding the reliability, availability, or accuracy of our Site or Services.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our Site or Services, even if we have been advised of the possibility of such damages.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">9. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Sireesha Reddy Designer Studio and its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including legal fees, arising out of or related to your use of our Site or Services, or your violation of these Terms.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">10. Termination</h2>
            <p>We may terminate or suspend your access to our Site or Services at any time, with or without cause, and with or without notice, for any reason.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">11. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of [your jurisdiction]. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of [your jurisdiction].</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">12. Contact Us</h2>
                <p>If you have any questions about these Terms or our Site and Services, please contact us at:</p>
                <p>Sireesha Reddy Designer Studio<br />
            [Pillar No: 805, Kukatpally, Hyderabad]<br />
            <a href="mailto:[designerstudio.siri@gmail.com]" className="text-blue-500 hover:underline">[mailto:designerstudio.siri@gmail.com]</a><br />
            [9059493300]</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">13. Miscellaneous</h2>
            <p><strong>Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue to be in full force and effect.</p>
            <p><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us regarding the use of our Site and Services and supersede any prior agreements or understandings.</p>
        </div>
    );
};

export default TermsOfService;