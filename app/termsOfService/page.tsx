import React from 'react';
import DetailedTermsOfService from "@/components/TermOfService";

const Page = () => {
	return (
		<div>
			<main className="bg-gray-50 min-h-screen py-10">
				<DetailedTermsOfService
					companyName="Digital Services Inc"
					className=""
					lastUpdated="2025-04-29"
					contactEmail="terms@example.com"
					contactPhone="+1 (123) 456-7890"
					contactAddress="123 Terms Avenue, Web City, WS 12345"
				/>
			</main>
		</div>
	);
};

export default Page;