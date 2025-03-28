import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { BackTop } from "antd";
import { ArrowUp } from "lucide-react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgentyPro - AI-Powered Business Communication Platform",
  description: "Automate your business communication, sales, and customer management with AgentyPro's AI-powered platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AntdRegistry>
          <Navbar />
          {children}
          <Footer />

          <BackTop className="absolute right-0 bottom-0">
            <div  className="bg-blue-500 hover:bg-blue-700 transition size-10 shadow-lg border border-slate-100 grid place-items-center text-white rounded-full"> 
              <ArrowUp size={20}/>
            </div>
          </BackTop>
        </AntdRegistry>
      </body>
    </html>
  );
}
