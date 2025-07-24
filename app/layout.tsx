import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';


const inter =Inter({subsets:["latin"]});

export const metadata:Metadata=
{
  title:"Zoomy",
  description:"Video calling app",
  icons:{
    icon:'/icon/logo.png'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
       appearance={{
        layout:{
           logoImageUrl:'/icons/yoom-logo.png',
           socialButtonsVariant:'iconButton'
        },
        variables:{
          colorText:"#fff",
          colorPrimary:"#0e78f9",
          colorBackground:"#1c1f2e",
          colorInputBackground:"#252a41",
          colorInputText:"#fff"

        }
       }}
      >
      <body
        className={`${inter.className} bg-[#000319]`}>
        {children}
        <Toaster/>
      </body>
      </ClerkProvider>
    </html>
  );
}
