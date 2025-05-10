'use server'

import { PrismaClient } from "@/lib/generated/prisma";
import {
	ContactInformationResponse, FacebookVerificationResponse,
	SocialLinkResponse,
	WebsiteInformationResponse
} from "@/types";

// Suppress ESLint no-var rule for declare global
/* eslint-disable no-var */
declare global {
	var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient()

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

export const getBusinessManagerData = async () : Promise<FacebookVerificationResponse> => {
	try {
		const facebookVerificationId = await prisma.facebookVerification.findFirst({ orderBy: { createdAt: "desc" } });
		return facebookVerificationId;
	} catch (error) {
		return { error: error };
	}
}