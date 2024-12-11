import { Gabarito } from "next/font/google";
import "./globals.css";

const inter = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "StivCode",
  description:
    "Desarrollador apasionado creando soluciones innovadoras en web y videojuegos. ¡Vamos a construir juntos!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
