import React from 'react';
import PrivacyPolicy from "@/components/PrivacyPolicy";

const Page = () => {
	return (
		<div>
			<div className="min-h-screen">
				<PrivacyPolicy
					companyName="Digital Services Inc"
					lastUpdated="2025-04-29"
				/>
			</div>
		</div>
	);
};

export default Page;