import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "bali-between-us-2026.lwh971212.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "BALI MODE: ON — 14박 15일 여행 플래너",
    description: "우붓, 길리 에어, 시드멘, 울루와뚜로 이어지는 2026년 발리 14박 15일 여행 플래너",
    icons: { icon: "/icon.png", shortcut: "/icon.png" },
    openGraph: {
      title: "BALI MODE: ON",
      description: "먹고, 눕고, 헤엄치고, 가끔 이동하는 14박 15일 발리 여행",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "BALI MODE: ON" }],
      locale: "ko_KR",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: "BALI MODE: ON", images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
