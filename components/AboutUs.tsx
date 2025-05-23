import React from 'react';
import Image from "next/image";
import EnhancedOpeningHours from "@/components/WorkingHour";
import {ContactInformation, ContactInformationResponse, ErrorResponse} from "@/types";
import {getContactInformation} from "@/controllers/getData";

const AboutUs = async () => {
	const res: ContactInformationResponse = await getContactInformation();
	const isError = (res as ErrorResponse)?.error !== undefined;
	const contactInfo = !isError && res ? (res as ContactInformation) : null;
	return (
		<div>
			<div className={'bg-blue-800 text-gray-200 py-10'}>
				<h1 className={'text-4xl font-bold text-center mb-5'}>Digital Service</h1>

				<div>
					<p className={'text-2xl text-center px-5 md:px-10 lg:px-20 text-gray-300 leading-10'}>
						We are a digital service company that specializes in providing
						high-quality digital solutions to our clients. Our team of
						experts is dedicated to delivering innovative and effective
						solutions that meet the unique needs of each client.
						Our services include web development, mobile app development,
						digital marketing, and more. We pride ourselves on our ability
						to stay ahead of the curve in the ever-changing digital
						landscape, ensuring that our clients receive the best possible
						solutions.
					</p>
					<h1 className={'text-center text-3xl mt-5 font-semibold'}> <span className={'text-red-700'}>
						Service Areas:</span> {contactInfo?.address}</h1>
				</div>
			</div>

			<div className={'my-16'}>
				<h1 className={'text-center text-4xl font-bold my-7 text-blue-700 '}>Who we are</h1>
				<div className={'grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-10 lg:px-20 content-center'}>
					<div><Image src={'/img.jpg'} alt={'body image'} width={600} height={600}/></div>
					<div>
						<h1 className={'text-xl text-gray-700 font-semibold leading-10 mt-5'}>
							We are a team of passionate individuals who are dedicated to
							providing the best digital solutions to our clients. Our
							team is made up of experts in various fields, including web
							development, mobile app development, and digital marketing.
							We work closely with our clients to understand their needs
							and provide tailored solutions that meet their specific
							requirements.
						</h1>
					</div>
				</div>
			</div>

			<div>
				<main>
					<div className="py-10 bg-gray-100">
              <EnhancedOpeningHours showCurrentStatus={true}/>
					</div>
				</main>
			</div>
		</div>
	);
};

export default AboutUs;