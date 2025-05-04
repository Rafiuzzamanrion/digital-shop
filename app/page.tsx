import FramerParallax from "@/components/ParallaxImage";
import AboutUs from "@/components/AboutUs";
import {ContactInformation, ContactInformationResponse, ErrorResponse} from "@/types";
import {getContactInformation} from "@/controllers/getData";

export default async function Home() {
	const res: ContactInformationResponse = await getContactInformation();
	const isError = (res as ErrorResponse)?.error !== undefined;
	const contactInfo = !isError && res ? (res as ContactInformation) : null;

	return (
		<div>
			<div>
				<FramerParallax imageUrl="/img.jpg" height="h-[600px]">
					<div>
						<div className={'bg-gray-100/50 p-5 lg:px-16'}>
							<h2 className="md:text-6xl text-5xl font-bold mb-4 text-black">We’re Just A Call Away</h2>
							<div className={'flex justify-center content-center mb-5'}>
								<p className="bg-blue-500 py-7 rounded-full text-gray-100 font-bold
              text-lg px-4 md:px-2 md:text-2xl md:w-[320px]">Call Today: {contactInfo?.contactNumber}</p>
							</div>
						</div>
					</div>
				</FramerParallax>
			</div>
			<AboutUs/>
		</div>
	);
}
