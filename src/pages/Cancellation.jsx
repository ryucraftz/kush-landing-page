import React from 'react';

const Cancellation = () => {
    return (
        <div className="bg-[#F5F5F7] min-h-screen pt-20 pb-10 px-4 md:px-8 font-sans text-[#1d1d1f]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Cancellation & Refund Policy</h1>

                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8 border border-gray-100">
                    <p className="text-gray-600 leading-relaxed mb-8">
                        At <strong>FitnessByKush.com</strong>, we are committed to providing high-quality services to our clients.
                        However, we understand that circumstances may arise where you may need to cancel a
                        service or request a refund.
                    </p>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">1. Cancellation Policy</h2>
                        <ul className="list-disc pl-5 text-gray-600 leading-relaxed space-y-2">
                            <li>Customers can request cancellation of services by contacting us at <strong>fitnessbykush@gmail.com</strong>.</li>
                            <li>Cancellation requests will be accepted only if the service has not yet been initiated or processed.</li>
                            <li>Once the service has been initiated, worked upon, or delivered, cancellation will not be possible.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">2. Refund Policy</h2>
                        <ul className="list-disc pl-5 text-gray-600 leading-relaxed space-y-2">
                            <li>If applicable, approved refunds will be processed within <strong>7-10 business days</strong>.</li>
                            <li>No refunds will be provided for services already delivered, consumed, or in progress.</li>
                            <li><strong>FitnessByKush</strong> reserves the right to refuse a refund request if it does not meet the conditions above.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">3. Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            If you have any questions about our Cancellation or Refund Policy, please contact us:
                        </p>
                        <div className="text-gray-600 space-y-1">
                            <p><strong>Email:</strong> fitnessbykush@gmail.com</p>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Cancellation;
