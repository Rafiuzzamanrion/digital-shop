import React from 'react';

interface DetailedTermsOfServiceProps {
	companyName: string;
	className?: string;
	lastUpdated?: string;
	contactEmail?: string;
	contactPhone?: string;
	contactAddress?: string;
}

const DetailedTermsOfService: React.FC<DetailedTermsOfServiceProps> = ({
	                                                                       companyName = "Your Website Name",
	                                                                       className = "",
	                                                                       lastUpdated = "2025-04-29",
	                                                                       contactEmail = "terms@example.com",
	                                                                       contactPhone = "+1 (123) 456-7890",
	                                                                       contactAddress = "123 Terms Avenue, Web City, WS 12345"
                                                                       }) => {
	return (
		<section className={`py-12 ${className}`}>
			<div className="container mx-auto px-4 max-w-4xl">
				<div className="bg-white rounded-lg shadow-md p-8">
					<div className="mb-10">
						<div className="text-center">
							<h1 className="text-3xl font-bold text-indigo-800 mb-2">Terms of Service</h1>
							<p className="text-gray-500">Last Updated: {lastUpdated}</p>
						</div>

						<div className="mt-8 p-4 bg-gray-50 rounded-lg">
							<p className="text-sm text-gray-600 italic">
								Please read these Terms of Service carefully before using the <span className={'text-indigo-800'}>{companyName}</span> website operated by <span className={'text-indigo-800'}>{companyName}</span>.
							</p>
							<p className="text-sm text-gray-600 italic mt-2">
								Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
							</p>
							<p className="text-sm text-gray-600 italic mt-2">
								By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
							</p>
						</div>
					</div>

					<div className="space-y-8">
						{/* Description of Service */}
						<div>
							<h2 className="text-xl font-semibold text-indigo-800 mb-3">1. Description of Service</h2>
							<p className="text-gray-700 leading-relaxed">
								We provide digital marketing-related content, tools, and consulting services. The Service is designed to help users improve their online presence, marketing strategies, and digital business operations.
							</p>
						</div>

						{/* User Accounts */}
						<div>
							<h2 className="text-xl font-semibold text-indigo-800 mb-3">2. User Accounts</h2>
							<p className="text-gray-700 leading-relaxed mb-4">
								When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
							</p>
							<p className="text-gray-700 leading-relaxed mb-4">
								You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
							</p>
							<p className="text-gray-700 leading-relaxed">
								You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
							</p>
						</div>

						{/* User Responsibilities */}
						<div>
							<h2 className="text-xl font-semibold text-indigo-800 mb-3">3. User Responsibilities</h2>
							<p className="text-gray-700 leading-relaxed mb-4">
								As a user of the Service, you agree to the following:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>You will use the website for lawful purposes only and comply with all applicable laws and regulations.</li>
								<li>You will not provide false or misleading information when using our Service.</li>
								<li>You will not upload, transmit, or distribute any computer viruses, worms, or any software intended to damage or alter a computer system.</li>
								<li>You will not attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Service.</li>
								<li>You will not use the Service in any manner that could interfere with, disrupt, negatively affect, or inhibit other users from fully enjoying the Service.</li>
								<li>You will not collect or store personal data about other users without their express permission.</li>
							</ul>
						</div>

						{/* Ownership and Intellectual Property */}
						<div>
							<h2 className="text-xl font-semibold text-indigo-800 mb-3">4. Ownership and Intellectual Property</h2>
							<p className="text-gray-700 leading-relaxed mb-4">
								The Service and its original content, features, and functionality are and will remain the exclusive property of <span className={'text-indigo-800'}>{companyName} </span> and its licensors.
							</p>
							<p className="text-gray-700 leading-relaxed mb-4">
								All content on this website (including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software) is owned by us or our partners and is protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
							</p>
							<p className="text-gray-700 leading-relaxed">
								Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of <span className={'text-indigo-800'}>{companyName}</span>.
							</p>
						</div>

						{/* User Content */}
						<div>
							<h2 className="text-xl font-semibold text-indigo-800 mb-3">5. User Content</h2>
							<p className="text-gray-700 leading-relaxed mb-4">
								Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content").
							</p>
							<p className="text-gray-700 leading-relaxed mb-4">
								By providing Content to the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such Content in any media.
							</p>
							<p className="text-gray-700 leading-relaxed">
								You represent and warrant that: (i) the Content is yours or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
							</p>
						</div>

						{/* Limitation of Liability */}
						<div>
							<h2 className="text-xl font-semibold text-indigo-800 mb-3">6. Limitation of Liability</h2>
							<p className="text-gray-700 leading-relaxed mb-4">
								In no event shall<span className={'text-indigo-800'}>{companyName}</span>, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Your access to or use of or inability to access or use the Service;</li>
								<li>Any conduct or content of any third party on the Service;</li>
								<li>Any content obtained from the Service; and</li>
								<li>Unauthorized access, use or alteration of your transmissions or content.</li>
							</ul>
						</div>

						{/* Disclaimers */}
						<div>
							<h2 className="text-xl font-semibold text-indigo-800 mb-3">7. Disclaimers</h2>
							<p className="text-gray-700 leading-relaxed mb-4">
								Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
							</p>
							<p className="text-gray-700 leading-relaxed">
								<span className={'text-indigo-800'}>{companyName}</span>, its subsidiaries, affiliates, and licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
							</p>
						</div>

						{/* Termination */}
						<div>
							<h2 className="text-xl font-semibold text-indigo-800 mb-3">8. Termination</h2>
							<p className="text-gray-700 leading-relaxed mb-4">
								We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
							</p>
							<p className="text-gray-700 leading-relaxed">
								Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
							</p>
						</div>

						{/* Governing Law */}
						<div>
							<h2 className="text-xl font-semibold text-indigo-800 mb-3">9. Governing Law</h2>
							<p className="text-gray-700 leading-relaxed">
								These Terms shall be governed and construed in accordance with the laws applicable in your jurisdiction, without regard to its conflict of law provisions.
							</p>
						</div>

						{/* Changes to Terms */}
						<div>
							<h2 className="text-xl font-semibold text-indigo-800 mb-3">10. Changes to Terms</h2>
							<p className="text-gray-700 leading-relaxed mb-4">
								We reserve the right, at our sole discretion, to modify or replace these Terms at any time without prior notice.
							</p>
							<p className="text-gray-700 leading-relaxed">
								By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
							</p>
						</div>

						{/* Contact Information */}
						<div className="bg-blue-400/40 p-6 rounded-lg mt-10">
							<h2 className="text-xl font-semibold text-indigo-800 mb-3">Contact Us</h2>
							<p className="text-gray-700 leading-relaxed mb-4">
								If you have any questions about these Terms of Service, please contact us:
							</p>
							<div className="space-y-2">
								{contactEmail && (
									<p className="text-gray-700">
										<span className="font-medium">Email:</span>{" "}
										<a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">
											{contactEmail}
										</a>
									</p>
								)}
								{contactPhone && (
									<p className="text-gray-700">
										<span className="font-medium">Phone:</span>{" "}
										<a href={`tel:${contactPhone}`} className="text-blue-600 hover:underline">
											{contactPhone}
										</a>
									</p>
								)}
								{contactAddress && (
									<p className="text-gray-700">
										<span className="font-medium">Address:</span>{" "}
										{contactAddress}
									</p>
								)}
							</div>
						</div>
					</div>

					<div className="mt-12 pt-6 border-t border-gray-200">
						<p className="text-sm text-gray-500 text-center">
							© {new Date().getFullYear()} <span className={'text-indigo-800'}>{companyName}</span>. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DetailedTermsOfService;