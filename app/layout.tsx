import Header from "@/components/layout/header/Header";
import "./globals.css";
import { Inter, Rubik } from "next/font/google";
import Footer from "@/components/layout/footer/Footer";

const rubik = Rubik({
  subsets: ["latin"],
});
export const metadata = {
  title: "Hololive Production",
  description: "Hololive Production Website Redesign",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
