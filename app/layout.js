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
  title: "Neo's Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var s=localStorage.theme,d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(!s&&d)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}})();`
        }} />
      </head>
      <body
        className={`transition-colors duration-300 ease-in-out ${outfit.className} ${ovo.className} font-mono antialiased leading-8 overflow-x-hidden dark:bg-[#1e1e1e]
 dark:text-white `}
      >
        {children}
      </body>
    </html>
  );
}
