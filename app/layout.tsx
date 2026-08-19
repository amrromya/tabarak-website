import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "تبارك - نظام الحسابات المتكامل",
  description:
    "نظام حسابات متكامل للمحلات والشركات - إدارة المبيعات والمشتريات والمخزون والعملاء والمحاسبة والصيانة",
  icons: { icon: "/app.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "Cairo, sans-serif" }}>{children}</body>
    </html>
  );
}
