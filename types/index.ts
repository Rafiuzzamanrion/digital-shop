export interface ContactInformation {
	id: string;
	contactNumber: string;
	email: string;
	address: string;
	createdAt: string | Date;
	updatedAt: string | Date;
}
export interface SocialLink {
	id: string;
	facebookLink: string;
	instagramLink: string;
	whatsAppLink: string;
	createdAt: string | Date;
	updatedAt: string | Date;
}
export interface WebsiteInformation {
	id: string;
	websiteName: string;
	footerDescription: string;
	createdAt: string | Date;
	updatedAt: string | Date;
}

export interface FacebookVerification {
	verificationId: string
	createdAt: string | Date
	updatedAt: string | Date
}
export interface ErrorResponse {
	error: unknown;
}


export type ContactInformationResponse = ContactInformation | null | ErrorResponse;
export type SocialLinkResponse = SocialLink | null | ErrorResponse;
export type WebsiteInformationResponse = WebsiteInformation | null | ErrorResponse;
export type FacebookVerificationResponse = FacebookVerification | null | ErrorResponse;