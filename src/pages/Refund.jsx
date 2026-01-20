import React from 'react';

const Refund = () => {
    return (
        <div className="bg-[#F5F5F7] min-h-screen pt-20 pb-10 px-4 md:px-8 font-sans text-[#1d1d1f]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Refund Policy</h1>

                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-6 border border-gray-100 flex flex-col items-center text-center">

                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                        At <strong>FitnessByKush.com</strong>, we offer only service-based solutions. Due to the nature of our
                        work:
                    </p>

                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                        <strong>No refunds are provided</strong> under any circumstances once payment has been made.
                    </p>

                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                        Clients are requested to carefully review service details before making payments.
                    </p>

                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                        In case of duplicate transactions or incorrect deductions caused by a technical error, please
                        contact us. If found valid, adjustments will be handled with the payment gateway/bank.
                    </p>

                    <p className="text-gray-600 leading-relaxed max-w-2xl pt-4 font-medium">
                        By using our services, you acknowledge and agree to this <strong>No Refund Policy</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Refund;
