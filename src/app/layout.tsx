import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import AuthProvider from "../providers/AuthProvider";
import UIProvider from "../providers/NextUIProvider";

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
        <AuthProvider>
          <UIProvider>
            <div className="container">
              <Header />
              <div className="wrapper">{children}</div>
              <Footer />
            </div>
          </UIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
