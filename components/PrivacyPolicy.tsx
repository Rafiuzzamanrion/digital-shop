import React from 'react';

interface PrivacyPolicyProps {
	companyName: string;
	className?: string;
	lastUpdated?: string;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
	                                                     companyName = "",
	                                                     className = "",
	                                                     lastUpdated = ""
                                                     }) => {
	return (
		<section className={`${className}`}>
			<div className="container mx-auto px-4 max-w-7xl">
				<div className="bg-white rounded-lg shadow-md p-8">
					<div className="mb-10 text-center">
						<h1 className="text-3xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
						<p className="text-gray-500">Last Updated: {lastUpdated}</p>
					</div>

					<div className="space-y-8">
						{/* Introduction */}
						<div>
							<p className="text-gray-700 leading-relaxed">
								{companyName} (we, our, or us) is committed to protecting your privacy.
								This Privacy Policy explains how we collect, use, and protect your personal information.
							</p>
						</div>

						{/* Information We Collect */}
						<div>
							<h2 className="text-xl font-semibold text-gray-800 mb-3">Information We Collect</h2>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Name, email address, phone number</li>
								<li>Browser information (IP address, browser type)</li>
								<li>Any data submitted through forms</li>
							</ul>
						</div>

						{/* How We Use Information */}
						<div>
							<h2 className="text-xl font-semibold text-gray-800 mb-3">How We Use Your Information</h2>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>To provide and improve our services</li>
								<li>To communicate with you</li>
								<li>For marketing or promotional purposes (with your permission)</li>
							</ul>
						</div>

						{/* Cookies */}
						<div>
							<h2 className="text-xl font-semibold text-gray-800 mb-3">Cookies</h2>
							<p className="text-gray-700 leading-relaxed">
								We may use cookies to improve user experience and analyze website traffic.
							</p>
						</div>

						{/* Sharing Information */}
						<div>
							<h2 className="text-xl font-semibold text-gray-800 mb-3">Sharing Information</h2>
							<p className="text-gray-700 leading-relaxed">
								We do not sell your personal information. We may share it with trusted third-party
								services (e.g., payment gateways) only when necessary.
							</p>
						</div>

						{/* User Rights */}
						<div>
							<h2 className="text-xl font-semibold text-gray-800 mb-3">Your Rights</h2>
							<p className="text-gray-700 leading-relaxed">
								You can request to access, correct, or delete your personal information at any time.
							</p>
						</div>

						{/* Contact Information */}
						<div className="bg-blue-400/40 p-6 rounded-lg mt-10">
							<h2 className="text-xl font-semibold text-gray-800 mb-3">Contact Us</h2>
							<p className="text-gray-700 leading-relaxed">
								If you have any questions about our Privacy Policy, please contact us at{" "}
								<a href="mailto:privacy@example.com" className="text-blue-600 hover:underline">
									privacy@example.com
								</a>
							</p>
						</div>
					</div>

					<div className="mt-12 pt-6 border-t border-gray-200">
						<p className="text-sm text-gray-500 text-center">
							© {new Date().getFullYear()} {companyName}. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PrivacyPolicy;