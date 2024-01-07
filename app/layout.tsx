import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Template/Navbar/Navbar";
import Footer from "./Components/Template/Footer/Footer";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "shopping azizollah",
  description: "created by azizollah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <div className="">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
