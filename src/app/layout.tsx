import { Rubik } from "next/font/google";
import "../styles/globals.css";

const rubik = Rubik({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  );
}
