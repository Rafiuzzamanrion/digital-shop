'use client'
import React, {useState} from 'react';
import {Loader2} from "lucide-react";

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
import {useRouter} from "next/navigation";
import {toast, Toaster} from "sonner";


const Auth = () => {
	const [key, setKey] = useState<string>('');
	const admin_key = process.env.NEXT_PUBLIC_ADMIN_KEY;
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setKey(e.target.value);
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		try {
			if (key === admin_key) {
				toast("Success", {
					description: "You are logged in to admin panel",
				});
				router.push('/adminPanel');
			} else {
				toast("Admin key is wrong", {
						description: "Please try again",
					}
				)
			}
		} catch (e) {
			console.log('error', e);
			toast("Something went wrong", {
				description: "Please try again",
			})
		} finally {
			setKey('');
			setLoading(false);
		}

	};
	return (
		<div className={'min-h-screen my-10 '}>
			<Toaster position="top-center" />
			<Card className="w-[350px] mx-auto">
				<CardHeader>
					<CardTitle className={'text-center'}>Admin panel</CardTitle>
					<CardDescription>Type the correct admin key to logged in to admin panel</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Admin key</Label>
								<Input id="name" type={"password"} onChange={(e) => handleKeyChange(e)}
								       placeholder="Type your admin key"/>
							</div>
						</div>

						<div className={' flex justify-end mt-5'}>
							<Button disabled={loading} type={'submit'}>{loading && <Loader2 className="w-4 h-4 animate-spin"/>} {loading? 'Submitting':'Submit'}</Button>
						</div>

					</form>
				</CardContent>

			</Card>
		</div>
	)
};

export default Auth;