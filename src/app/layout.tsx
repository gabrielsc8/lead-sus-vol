// layout.tsx
import "./globals.css";
import { Saira } from "next/font/google"; 

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Formulário de Inscrição",
  description: "Dia da Visão na Comunidade da Fé",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${saira.className} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}