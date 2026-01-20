import React from 'react';

const Terms = () => {
    return (
        <div className="bg-[#F5F5F7] min-h-screen pt-20 pb-10 px-4 md:px-8 font-sans text-[#1d1d1f]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Terms & Conditions</h1>

                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Welcome to FitnessByKush.com. By accessing or using our website and services, you agree
                    to be bound by these Terms & Conditions.
                </p>

                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8 border border-gray-100">
                    <section>
                        <h2 className="text-xl font-semibold mb-3">Services</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We provide business growth, client acquisition, and digital solutions on a service model.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">Payments</h2>
                        <div className="text-gray-600 leading-relaxed space-y-2">
                            <p>Payments are collected securely through UPI, debit/credit cards, and net banking.</p>
                            <p>All charges and commissions are confirmed with the client before engagement.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">Refund Policy</h2>
                        <div className="text-gray-600 leading-relaxed space-y-2">
                            <p>We follow a strict <strong>No Refund Policy</strong>. Once payment is made, it cannot be refunded under any circumstances.</p>
                            <p>Please review our <a href="/refund" className="text-blue-600 hover:underline">Refund Policy</a> page for details.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">User Obligations</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Clients must provide accurate information and comply with applicable laws. Misuse of our services may result in
                            termination.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">Limitation Of Liability</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We are not responsible for indirect, incidental, or consequential damages. Our liability is limited to the amount
                            paid by the client for services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
                        <p className="text-gray-600 leading-relaxed">
                            These Terms shall be governed by the laws of India.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
