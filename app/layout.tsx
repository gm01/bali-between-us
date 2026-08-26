import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BALI, BETWEEN US — 15일의 여행자 수첩",
  description: "2026년 10월 21일부터 11월 4일까지, 발리와 길리 에어에서 보내는 두 사람의 14박 15일 여행 수첩",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "BALI, BETWEEN US",
    description: "우붓의 초록에서 길리의 투명한 바다까지 — 두 사람의 14박 15일 여행 수첩",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
