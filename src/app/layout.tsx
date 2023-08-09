import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sabe tudo GPT",
  description: "App que responde todas as suas perguntas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
