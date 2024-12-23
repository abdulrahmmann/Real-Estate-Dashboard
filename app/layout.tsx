import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const manrope = Manrope({
    // variable: "--font-manrope",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Real Estate Dashboard",
    description: "Modern Dashboard",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${manrope.className}`}>{children}</body>
        </html>
    );
}
