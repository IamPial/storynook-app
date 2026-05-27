import { Bebas_Neue, Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: ["400"],
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "StoryNook Book Library",
  description:
    "StoryNook is an online platform for booking quiet library rooms and enjoying a peaceful reading experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-right" closeButton={true} />
      </body>
    </html>
  );
}
