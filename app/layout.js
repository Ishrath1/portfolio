import { Rufina, Sintony } from "next/font/google";
import "./globals.css";

const sintony = Sintony({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const rufina = Rufina({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Portfolio - MUHAMMAD Ishrath",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sintony.className} ${rufina.className} antialiased leading-8 overflow-x-hidden bg-lightTheme text-darkHover
        dark:bg-darkTheme dark:text-lightTheme`}
      >
        {children}
      </body>
    </html>
  );
}
