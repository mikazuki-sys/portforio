import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Web Studio Portfolio",
  description: "AIとWeb制作を掛け合わせた1ページポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
