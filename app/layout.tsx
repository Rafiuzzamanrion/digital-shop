import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getContactInformation,
  getSocialLink,
  getWebsiteInformation
} from "@/controllers/getData";
import {
  ContactInformationResponse,

  SocialLinkResponse,
  WebsiteInformationResponse
} from "@/types";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "Digital Service",
    description: "All your digital needs in one place",
    verification: {
      other: {
        'facebook-domain-verification': 'iajahhze566w6i358dlkjdvw0p3mv0',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
                                           children,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  const res: ContactInformationResponse = await getContactInformation();
  const footerRes: WebsiteInformationResponse = await getWebsiteInformation();
  const socialRes: SocialLinkResponse = await getSocialLink();

  return (
    <html lang="en">
    <body
      className={`${poppins.variable} font-poppins antialiased`}
      suppressHydrationWarning={true}
    >
    <Navbar data={res} footerRes={footerRes} socialRes={socialRes}/>
    <main className="pt-42">
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  );
}