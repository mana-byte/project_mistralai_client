import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavBar from "./navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--fo:t-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Chat Gourmand",
	description: "Follow your meals and calorie intake with just a photograph!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="hidden">
			<body
				className={`${geistSans.variable} ${geistMono.variable}`}
				style={{
					backgroundImage: 'url("images/background.jpg")',
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					minHeight: "100vh",
          backdropFilter: "blur(18px)",
				}}
			>
				{children}
			</body>
		</html>
	);
}
