import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "StivCode",
  description:
    "Desarrollador apasionado creando soluciones innovadoras en web y videojuegos. ¡Vamos a construir juntos!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
