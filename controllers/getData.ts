'use server'

import { PrismaClient } from "@/lib/generated/prisma";
import {
	ContactInformationResponse,
	SocialLinkResponse,
	WebsiteInformationResponse
} from "@/types";

const prisma = new PrismaClient();

export const getContactInformation = async (): Promise<ContactInformationResponse> => {
	try {
		const contactInformation = await prisma.contactInformation.findFirst({
			orderBy: { createdAt: "desc" }
		});
		return contactInformation;
	} catch (error) {
		return { error: error };
	}
}

export const getSocialLink = async () : Promise<SocialLinkResponse> => {
	try {
		const socialLink = await prisma.socialLink.findFirst({ orderBy: { createdAt: "desc" } });
		return socialLink;
	} catch (error) {
		return { error: error };
	}
}

export const getWebsiteInformation = async () : Promise<WebsiteInformationResponse> => {
	try {
		const websiteInformation = await prisma.websiteInformation.findFirst({ orderBy: { createdAt: "desc" } });
		return websiteInformation;
	} catch (error) {
		return { error: error };
	}
}