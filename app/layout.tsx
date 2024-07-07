import Header from "@/src/common/header";
import "../styles/index.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/src/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Journal Motion",
  description: "Amplifying the voices that move the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
