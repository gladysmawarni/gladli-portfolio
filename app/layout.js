"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import SplashScreen from "./components/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
const pathname = usePathname()
const isHome = pathname === "/"
const [isLoading, setIsLoading] = useState(isHome)

useEffect(() => {
  if (isLoading) return
}, [isLoading])

  return (
    <html lang="en">
      <head>
      <title>Portfolio</title>
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
      <Analytics/>
        {isLoading && isHome ? (
          <SplashScreen  finishLoading={() => setIsLoading(false)}/>
        ) : (
          <Providers>{children}</Providers>
        )}
      </body>
    </html>
  );
}
