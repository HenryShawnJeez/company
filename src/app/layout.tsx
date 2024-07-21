import type { Metadata } from "next";
import { inter, hedvig } from "@/lib/fonts";
import "../styles/globals.css";

//Import Utils
import { cn } from "@/lib/utils";

//Import theme provider
import { ThemeProvider } from "@/components/theme-provider";

//Import Custom Cursor Component
//import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/HomePage/Nav";
import Footer from "@/components/HomePage/Footer";


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
      <body className={cn("antialiased overflow-x-hidden text-xs md:text-sm xl:text-base bg-bgLight dark:bg-bgDark text-textLight dark:text-textDark", `${inter.variable} ${hedvig.variable}`)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

