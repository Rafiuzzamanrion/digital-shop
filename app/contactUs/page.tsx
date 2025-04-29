'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
	const [errors, setErrors] = useState<{[key: string]: string}>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
		// Clear error when user types
		if (errors[name]) {
			setErrors(prev => ({ ...prev, [name]: '' }));
		}
	};

	const validateForm = () => {
		const newErrors: {[key: string]: string} = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Please enter your name';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Please enter your email';
		} else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		if (!formData.subject.trim()) {
			newErrors.subject = 'Please enter a subject';
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Please enter your message';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (!validateForm()) return;

		setFormStatus('submitting');

		try {
			// This is where you would normally send the data to your backend
			// For now, we'll simulate a successful submission after a delay
			await new Promise(resolve => setTimeout(resolve, 1500));

			setFormStatus('success');
			setFormData({
				name: '',
				email: '',
				subject: '',
				message: ''
			});

			// Reset form status after 5 seconds
			setTimeout(() => {
				setFormStatus('idle');
			}, 5000);

		} catch (error) {
			console.error('Error submitting form:', error);
			setFormStatus('error');
		}
	};

	return (
		<main className="bg-gradient-to-b from-blue-50 to-white min-h-screen mt-16 mx-5">
			{/* Hero Section */}
			<section className="bg-blue-600/80 text-white py-16 rounded-4xl">
				<div className="container mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
					<p className="text-xl max-w-2xl mx-auto">
						We&apos;d love to hear from you. Get in touch with our team for any inquiries or feedback.
					</p>
				</div>
			</section>

			{/* Main Content */}
			<section className="py-12 md:py-20">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>

							{formStatus === 'success' ? (
								<div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
									<div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<h3 className="text-lg font-medium text-green-800 mb-2">Message Sent Successfully!</h3>
									<p className="text-green-700">
										Thank you for contacting us. We'll get back to you as soon as possible.
									</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
											Full Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
											placeholder="Your name"
										/>
										{errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
									</div>

									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
											Email Address
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
											placeholder="your@email.com"
										/>
										{errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
									</div>

									<div>
										<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
											Subject
										</label>
										<select
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
										>
											<option value="">Select a topic</option>
											<option value="General Inquiry">General Inquiry</option>
											<option value="Technical Support">Technical Support</option>
											<option value="Billing Question">Billing Question</option>
											<option value="Feedback">Feedback</option>
											<option value="Partnership">Partnership Opportunity</option>
										</select>
										{errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
									</div>

									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
											Message
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											rows={6}
											className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
											placeholder="How can we help you?"
										></textarea>
										{errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
									</div>

									<div>
										<button
											type="submit"
											disabled={formStatus === 'submitting'}
											className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors
                        ${formStatus === 'submitting'
												? 'bg-blue-400 cursor-not-allowed'
												: 'bg-blue-600 hover:bg-blue-700'
											}
                      `}
										>
											{formStatus === 'submitting' ? (
												<span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
											) : formStatus === 'error' ? (
												'Try Again'
											) : (
												'Send Message'
											)}
										</button>

										{formStatus === 'error' && (
											<p className="mt-2 text-sm text-red-600 text-center">
												There was an error sending your message. Please try again.
											</p>
										)}
									</div>
								</form>
							)}
						</div>

						{/* Contact Information */}
						<div>
							<h2 className="text-2xl font-bold text-gray-800 mb-6">Get in touch</h2>

							<div className="space-y-8">
								{/* Email */}
								<div className="flex items-start">
									<div className="mr-4 bg-blue-100 rounded-full p-3">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>
									<div>
										<h3 className="text-lg font-medium text-gray-800 mb-1">Email</h3>
										<a href="mailto:contact@rafiuzzamanrion.com" className="text-blue-600 hover:underline">
											contact@rafiuzzamanrion.com
										</a>
										<p className="text-gray-600 mt-1">For general inquiries and support</p>
									</div>
								</div>

								{/* Phone */}
								<div className="flex items-start">
									<div className="mr-4 bg-blue-100 rounded-full p-3">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
										</svg>
									</div>
									<div>
										<h3 className="text-lg font-medium text-gray-800 mb-1">Phone</h3>
										<a href="tel:+11234567890" className="text-blue-600 hover:underline">
											+1 (123) 456-7890
										</a>
										<p className="text-gray-600 mt-1">Monday-Friday, 9AM-5PM EST</p>
									</div>
								</div>

								{/* Address */}
								<div className="flex items-start">
									<div className="mr-4 bg-blue-100 rounded-full p-3">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
									</div>
									<div>
										<h3 className="text-lg font-medium text-gray-800 mb-1">Office</h3>
										<p className="text-gray-600">
											123 Business Avenue<br />
											Suite 456<br />
											Web City, Digital State 12345
										</p>
									</div>
								</div>

								{/* Social Media */}
								<div>
									<h3 className="text-lg font-medium text-gray-800 mb-3">Follow Us</h3>
									<div className="flex space-x-4">
										<a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors">
											<svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
												<path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
											</svg>
										</a>
										<a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors">
											<svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
												<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
											</svg>
										</a>
										<a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors">
											<svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
												<path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
											</svg>
										</a>
										<a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors">
											<svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
												<path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Map Section */}
					<div className="mt-16">
						<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Location</h2>
						<div className="bg-gray-200 rounded-xl overflow-hidden h-[400px] w-full">
							{/* Replace with your actual map implementation */}
							<div className="w-full h-full flex items-center justify-center">
								<p className="text-gray-500">
									Interactive map goes here. You can integrate with Google Maps, Mapbox, etc.
								</p>
							</div>
						</div>
					</div>

					{/* FAQ Section */}
					<div className="mt-16">
						<h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-lg font-medium text-gray-800 mb-2">What are your business hours?</h3>
								<p className="text-gray-600">We are available Monday through Friday, from 9AM to 5PM Eastern Time.</p>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-lg font-medium text-gray-800 mb-2">How quickly do you respond to inquiries?</h3>
								<p className="text-gray-600">We aim to respond to all inquiries within 24 business hours.</p>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-lg font-medium text-gray-800 mb-2">Do you offer emergency support?</h3>
								<p className="text-gray-600">Yes, for customers with a premium support plan, we offer 24/7 emergency assistance.</p>
							</div>
							<div className="bg-white p-6 rounded-lg shadow-sm">
								<h3 className="text-lg font-medium text-gray-800 mb-2">Can I schedule a consultation?</h3>
								<p className="text-gray-600">Absolutely! You can schedule a consultation through our booking system or by contacting us directly.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}