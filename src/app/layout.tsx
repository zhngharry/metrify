import "./globals.css"
import { Inter } from "next/font/google"
// import Navbar from "../components/navbar/Navbar"
// import Footer from "../components/footer/Footer"
// import { ThemeContextProvider } from "@/context/ThemeContext"
// import { ThemeProvider } from "@/providers/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "Metrify",
    description: "Track Your Vibe",
}

export default function RootLayout({ children }  : {children: any}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <ThemeContextProvider>
                    <ThemeProvider> */}
                        <div className="container">
                            <div className="wrapper">
                                {/* <Navbar /> */}
                                {children}
                                {/* <Footer /> */}
                            </div>
                        </div>
                    {/* </ThemeProvider>
                </ThemeContextProvider> */}
            </body>
        </html>
    )
}