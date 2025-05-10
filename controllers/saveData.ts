'use server'
import { PrismaClient } from "@/lib/generated/prisma";
import {revalidatePath} from "next/cache";


const prisma = new PrismaClient();

export const saveContactInformation = async (data: FormData) => {
	const contactNumber = data.get('contactNumber') as string;
	const email = data.get('email') as string;
	const address = data.get('address') as string;
	console.log('data', data);
	try {
		await prisma.contactInformation.create({
			data:{
				contactNumber,
				email,
				address
			}
		})
		return { status: "contact created successfully" };
	}

	catch (error) {
		return { error: error };
	}
	finally {
		revalidatePath('/adminPanel');
	}
}
export const saveSocialLink = async (data: FormData) => {
	const facebookLink = data.get('facebookLink') as string;
	const instagramLink = data.get('instagramLink') as string;
	const whatsappLink = data.get('whatsAppLink') as string;


	try {
		await prisma.socialLink.create({
			data: {
				facebookLink,
				instagramLink,
				whatsAppLink: whatsappLink
			}
		})
		return { status: "link created successfully" };
	}

	catch (error) {
		return { error: error };
	}
	finally {
		revalidatePath('/adminPanel');
	}
	}
	export const saveWebsiteInformation = async (data: FormData) => {
	const websiteName = data.get('websiteName') as string;
	const footerDescription = data.get('footerDescription') as string;


	try {
		await prisma.websiteInformation.create({
			data: {
			websiteName,
				footerDescription
			}
		})
		return { status: "web info created successfully" };
	}


	catch (error) {
		return { error: error };
	}
	finally {
		revalidatePath('/adminPanel');
	}
	}
	export const saveBusinessManagerVerification = async (data: FormData) => {
	const verificationId = data.get('verificationId') as string;

	try {
		await prisma.facebookVerification.create({
			data: {
		     verificationId
			}
		})
		return { status: "verification created successfully" };
	}


	catch (error) {
		return { error: error };
	}
	finally {
		revalidatePath('/adminPanel');
	}
	}