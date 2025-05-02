'use client'
import React from 'react';
import {Button} from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

import {Loader2} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";
import {
	saveContactInformation, saveSocialLink,
	saveWebsiteInformation
} from "@/controllers/saveData";
import {toast} from "sonner";


const Page = () => {
	const [loadingContact, setLoadingContact] = React.useState(false);
	const [loadingSocial, setLoadingSocial] = React.useState(false);
	const [loadingWebsite, setLoadingWebsite] = React.useState(false);

	const handleContactSubmit = async (formData: FormData) => {
		setLoadingContact(true);
		try {
			const res = await saveContactInformation(formData);
			if (res.status) {
				console.log('res', res);
				toast("Success", {
					description: "Contact information saved successfully",
				});
			} else {
				toast("Error", {
					description: "Failed to save contact information",
				});
			}
		} catch (error) {
			toast("Error", {
				description: "An unexpected error occurred",
			});
		} finally {
			setLoadingContact(false);
		}
	};

	const handleSocialSubmit = async (formData: FormData) => {
		setLoadingSocial(true);
		try {
			const res = await saveSocialLink(formData);
			if (res.status) {
				toast("Success", {
					description: "Social links saved successfully",
				});
			} else {
				toast("Error", {
					description: "Failed to save social links",
				});
			}
		} catch (error) {
			toast("Error", {
				description: "An unexpected error occurred",
			});
		} finally {
			setLoadingSocial(false);
		}
	};

	const handleWebsiteSubmit = async (formData: FormData) => {
		setLoadingWebsite(true);
		try {
			const res = await saveWebsiteInformation(formData);
			if (res.status) {
				toast("Success", {
					description: "Website information saved successfully",
				});
			} else {
				toast("Error", {
					description: "Failed to save website information",
				});
			}
		} catch (error) {
			toast("Error", {
				description: "An unexpected error occurred",
			});
		} finally {
			setLoadingWebsite(false);
		}
	};

	return (
		<div className={'min-h-screen my-10'}>
			<h1 className={'text-5xl text-indigo-800 text-center my-5 font-bold'}>Admin Panel</h1>
			<div className={'grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-10 place-content-center'}>
				<Card className="w-[350px] mx-auto">
					<CardHeader>
						<CardTitle className={'text-center'}>Contact Information</CardTitle>
						<CardDescription>Fill up the form with proper information</CardDescription>
					</CardHeader>
					<CardContent>
						<form action={handleContactSubmit}>
							<div className="grid w-full items-center gap-4">
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="contactNumber">Contact Number</Label>
									<Input id="contactNumber" name={'contactNumber'} type={"number"}
									       placeholder="Type your Contact Number"/>
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="email">Email</Label>
									<Input id="email" name={'email'} type={"email"}
									       placeholder="Type your Email Address"/>
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="address">Address</Label>
									<Input id="address" name={'address'} type={"text"}
									       placeholder="Type your Address"/>
								</div>
							</div>
							<div className={' flex justify-end mt-5'}>
								<Button disabled={loadingContact} type={'submit'}>
									{loadingContact && <Loader2 className="w-4 h-4 mr-2 animate-spin"/>}
									{loadingContact ? 'Saving' : 'Save'}
								</Button>
							</div>
						</form>
					</CardContent>
				</Card>
				<Card className="w-[350px] mx-auto">
					<CardHeader>
						<CardTitle className={'text-center'}>Social Links</CardTitle>
						<CardDescription>Fill up the form with proper information</CardDescription>
					</CardHeader>
					<CardContent>
						<form action={handleSocialSubmit}>
							<div className="grid w-full items-center gap-4">
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="facebookLink">Facebook Link</Label>
									<Input id="facebookLink" name={'facebookLink'} type={"text"}
									       placeholder="Type/Paste Your Facebook Link"/>
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="instagramLink">Instagram Link</Label>
									<Input id="instagramLink" name={'instagramLink'} type={"text"}
									       placeholder="Type/Paste Your Instagram Link"/>
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="whatsAppLink">WhatsApp Link</Label>
									<Input id="whatsAppLink" name={'whatsAppLink'} type={"text"}
									       placeholder="Type/Paste Your WhatsApp Link"/>
								</div>
							</div>
							<div className={' flex justify-end mt-5'}>
								<Button disabled={loadingSocial} type={'submit'}>
									{loadingSocial && <Loader2 className="w-4 h-4 mr-2 animate-spin"/>}
									{loadingSocial ? 'Saving' : 'Save'}
								</Button>
							</div>
						</form>
					</CardContent>
				</Card>
				<Card className="w-[350px] mx-auto">
					<CardHeader>
						<CardTitle className={'text-center'}>Website Information</CardTitle>
						<CardDescription>Fill the form with proper information</CardDescription>
					</CardHeader>
					<CardContent>
						<form action={handleWebsiteSubmit}>
							<div className="grid w-full items-center gap-4">
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="websiteName">Website Name</Label>
									<Input id="websiteName" name={'websiteName'} type={"text"}
									       placeholder="Type your Website Name Here"/>
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="footerDescription">Footer Description</Label>
									<Textarea id="footerDescription" name={'footerDescription'} rows={7}
									          placeholder="Type your Footer Description here"/>
								</div>
							</div>
							<div className={' flex justify-end mt-5'}>
								<Button disabled={loadingWebsite} type={'submit'}>
									{loadingWebsite && <Loader2 className="w-4 h-4 mr-2 animate-spin"/>}
									{loadingWebsite ? 'Saving' : 'Save'}
								</Button>
							</div>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default Page;