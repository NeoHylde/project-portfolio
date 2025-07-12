import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Neo",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`transition-colors duration-300 ease-in-out ${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-gray-950 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
