import React from 'react';
import DetailedTermsOfService from "@/components/TermOfService";
import {
	ContactInformation,
	ContactInformationResponse,
	ErrorResponse,
	WebsiteInformation, WebsiteInformationResponse
} from "@/types";
import {getContactInformation, getWebsiteInformation} from "@/controllers/getData";

const Page = async () => {
	const res: ContactInformationResponse = await getContactInformation();
	const isError = (res as ErrorResponse)?.error !== undefined;
	const contactInfo = !isError && res ? (res as ContactInformation) : null;
	const footerRes: WebsiteInformationResponse = await getWebsiteInformation();
	const isFooterError = (footerRes as ErrorResponse)?.error !== undefined;
	const websiteInfo = !isFooterError && footerRes ? (footerRes as WebsiteInformation) : null;
	return (
		<div>
			<main className="bg-gray-50 min-h-screen py-10">
				<DetailedTermsOfService
					companyName={websiteInfo?.websiteName}
					className=""
					lastUpdated="2025-04-29"
					contactEmail={contactInfo?.email}
					contactPhone={contactInfo?.contactNumber}
					contactAddress={contactInfo?.address}
				/>
			</main>
		</div>
	);
};

export default Page;