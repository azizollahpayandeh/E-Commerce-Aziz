import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Modules/Navbar/Navbar";
import Footer from "@/Components/Modules/Footer/Footer";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700", "500", "600"] });

export const metadata: Metadata = {
  title: "AzizKala",
  description: "AzizKala shopping",
  icons : {
    icon: "./assets/favicon.ico"
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <div>
          <div className="pr-[7.7vw]  2xl:pr-[10vw] 2xl:pl-[10vw] pl-[7.7vw]">
            <Navbar />
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
