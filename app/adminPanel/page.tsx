'use client'
import React, {useEffect} from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

import {Textarea} from "@/components/ui/textarea";
import {
	saveBusinessManagerVerification,
	saveContactInformation, saveSocialLink,
	saveWebsiteInformation
} from "@/controllers/saveData";
import {toast} from "sonner";
import LoadingButton from "@/components/LoadingButton";
import {ErrorResponse, FacebookVerification, FacebookVerificationResponse} from "@/types";
import {getBusinessManagerData} from "@/controllers/getData";


const Page = () => {
	const handleContactSubmit = async (formData: FormData) => {
		try {
			const res = await saveContactInformation(formData);
			if (res) {
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
		}
	};

	const handleSocialSubmit = async (formData: FormData) => {
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
		}
	};

	const handleWebsiteSubmit = async (formData: FormData) => {
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
		}
	};

	const handleFacebookVerificationSubmit = async (formData: FormData) => {
		console.log('formData', formData);
		try {
			const res = await saveBusinessManagerVerification(formData);
			if (res.status) {
				toast("Success", {
					description: "Facebook verification code saved successfully",
				});
			} else {
				toast("Error", {
					description: "Failed to save Facebook verification code",
				});
			}
		} catch (error) {
			toast("Error", {
				description: "An unexpected error occurred",
			});
		} finally {
		}
	};
	const [verificationId, setVerificationId] = React.useState<string | null>(null);
const getData = async () => {
	const res: FacebookVerificationResponse = await getBusinessManagerData();
	const isError = (res as ErrorResponse)?.error !== undefined;
	const facebookVerification = !isError && res ? (res as FacebookVerification) : null;
	return facebookVerification;
}
	useEffect(() => {
		getData().then((verification) => {
			setVerificationId(verification?.verificationId || null);
		})
	}, []);
	return (
		<div className={'min-h-screen my-10'}>
			<h1 className={'text-5xl text-indigo-800 text-center my-5 font-bold'}>Admin Panel</h1>
			<div className={'grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-10' +
				' place-content-center'}>
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
									<Input required id="contactNumber" name={'contactNumber'} type={"number"}
									       placeholder="Type your Contact Number"/>
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="email">Email</Label>
									<Input required id="email" name={'email'} type={"email"}
									       placeholder="Type your Email Address"/>
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="address">Address</Label>
									<Input required id="address" name={'address'} type={"text"}
									       placeholder="Type your Address"/>
								</div>
							</div>
							<LoadingButton title={'Save'} loadingTitle={'Saving'} width={'w-[100px]'} position={'justify-end'}/>
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
									<Input required id="facebookLink" name={'facebookLink'} type={"text"}
									       placeholder="Type/Paste Your Facebook Link"/>
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="instagramLink">Instagram Link</Label>
									<Input required id="instagramLink" name={'instagramLink'} type={"text"}
									       placeholder="Type/Paste Your Instagram Link"/>
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="whatsAppLink">WhatsApp Link</Label>
									<Input required id="whatsAppLink" name={'whatsAppLink'} type={"text"}
									       placeholder="Type/Paste Your WhatsApp Link"/>
								</div>
							</div>
							<LoadingButton title={'Save'} loadingTitle={'Saving'} width={'w-[100px]'} position={'justify-end'}/>
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
									<Input required id="websiteName" name={'websiteName'} type={"text"}
									       placeholder="Type your Website Name Here"/>
								</div>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="footerDescription">Footer Description</Label>
									<Textarea required id="footerDescription" name={'footerDescription'} rows={7}
									          placeholder="Type your Footer Description here"/>
								</div>
							</div>
							<LoadingButton title={'Save'} loadingTitle={'Saving'} width={'w-[100px]'} position={'justify-end'}/>
						</form>
					</CardContent>
				</Card>
				<Card className="w-[350px] mx-auto">
					<CardHeader>
						<CardTitle className={'text-center'}>Business Manager Verification</CardTitle>
						<CardDescription>Fill the form with proper information</CardDescription>
					</CardHeader>
					<CardContent>
						<form action={handleFacebookVerificationSubmit}>
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="footerDescription">Verification Code</Label>
									<Textarea required id="verificationId" name={'verificationId'} rows={7}
									          placeholder="Type your Verification Code here"/>
								</div>
							<LoadingButton title={'Save'} loadingTitle={'Saving'} width={'w-[100px]'} position={'justify-end'}/>
						</form>
					</CardContent>
				</Card>

				<Card className="w-[350px] mx-auto">
					<CardHeader>
						<CardTitle className={'text-center mb-3'}>Business Manager Verification Code</CardTitle>
						<CardDescription>Your Last Business manager Verification code: <span className={'font-bold text-indigo-800'}>{verificationId}</span></CardDescription>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
};

export default Page;