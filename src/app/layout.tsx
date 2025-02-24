// app/layout.tsx

import "./globals.css";
import { Inter } from "next/font/google";

// Example of using a Google font (optional)
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My UST Portal",
  description: "University of Santo Tomas - Registration Form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
