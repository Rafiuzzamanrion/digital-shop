import React from 'react';
import PrivacyPolicy from "@/components/PrivacyPolicy";

const Page = () => {
	return (
		<div>
			<div className="min-h-screen bg-gray-50 py-10">
				<PrivacyPolicy
					companyName="Digital Services Inc"
					lastUpdated="2025-04-29"
					className={'pt-10'}
				/>
			</div>
		</div>
	);
};

export default Page;