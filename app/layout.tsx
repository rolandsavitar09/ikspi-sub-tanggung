import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IKSPI Kera Sakti Sub Ranting Tanggung",
  description:
    "Website informasi IKSPI Kera Sakti Sub Ranting Tanggung: profil, filosofi, arsip kegiatan, jadwal latihan, dan kontak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
