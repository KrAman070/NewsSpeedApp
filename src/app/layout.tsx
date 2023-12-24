import './globals.css'
import SessionProvider from './SessionProvider';
import Header from "./Header";
import React from 'react';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-gray-300">
      <head/>
      <body className="h-full">
      
      {/* <SessionProvider>
      
        {children}
      </SessionProvider> */}
      <Header/>
      <div>{children}</div>
      </body>
    </html>
  );
}