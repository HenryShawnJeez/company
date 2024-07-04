import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Melvin Trade B.V",
  description: "Melvin Trade B.V is a leading intermediary in the oil and gas industry, specializing in facilitating transactions between buyers and sellers. We ensure compliance with all legal and regulatory requirements while maximizing profitability for our clients. Our services include brokerage, due diligence, contract management, logistics coordination, and risk management. Additionally, we offer market intelligence and financial services to help clients make informed decisions and streamline their operations. In the machinery trading sector, we specialize in sourcing, selling, and facilitating transactions for a wide range of industrial machinery and equipment. Our goal is to help businesses operate efficiently and competitively while ensuring our own growth and success in the marketplace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", inter.className)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
