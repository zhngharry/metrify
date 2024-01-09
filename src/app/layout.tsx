import "./globals.css";
import { Poppins } from "next/font/google";
// import Navbar from "../components/navbar/Navbar"
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
// import { ThemeContextProvider } from "@/context/ThemeContext"
// import { ThemeProvider } from "@/providers/ThemeProvider"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Metrify",
  description: "Track Your Vibe",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" data-color-scheme="dark">
      {/* <meta name="theme-color" content="dark" /> */}
      <body className={poppins.className}>
        {/* <ThemeContextProvider>
                    <ThemeProvider> */}
        <div className="container">
          <Header />
          <div className="wrapper">{children}</div>
          <Footer />
        </div>
        {/* </ThemeProvider>
                </ThemeContextProvider> */}
      </body>
    </html>
  );
}
