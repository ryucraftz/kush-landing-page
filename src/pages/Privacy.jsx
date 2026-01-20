import React from 'react';

const Privacy = () => {
    return (
        <div className="bg-[#F5F5F7] min-h-screen pt-20 pb-10 px-4 md:px-8 font-sans text-[#1d1d1f]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Privacy Policy</h1>

                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    We respect your privacy and are committed to protecting your personal data.
                </p>

                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8 border border-gray-100">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-6">Our Commitment</h2>
                    </div>

                    <section>
                        <h3 className="text-lg font-semibold mb-3">1. Information We Collect</h3>
                        <div className="text-gray-600 leading-relaxed space-y-2">
                            <p>Name, email, phone number, and billing details when you engage our services.</p>
                            <p>Payment details (processed securely via payment gateway; we do not store UPI or card data).</p>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-3">2. How We Use Information</h3>
                        <div className="text-gray-600 leading-relaxed space-y-2">
                            <p>To provide and improve services.</p>
                            <p>To process secure payments.</p>
                            <p>To communicate updates, invoices, and service information.</p>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold mb-3">3. Data Protection</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We use appropriate security measures and <strong>never sell your data</strong> to third parties.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
