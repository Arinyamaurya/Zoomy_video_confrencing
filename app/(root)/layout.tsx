
import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata:Metadata=
{
  title:"Zoomy",
  description:"Video calling app",
  icons:{
    icon:'/icon/logo.png'
  }
};

const RootLayout=({children}:{children:ReactNode})=> {
    

    return (
       <main >
        <StreamVideoProvider>
        {children}
        </StreamVideoProvider>
       </main>
        
    )
}

export default RootLayout
