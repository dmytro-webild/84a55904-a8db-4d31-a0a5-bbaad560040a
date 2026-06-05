import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'АвтоСервис Эксперт - Профессиональный Ремонт и ТО Автомобилей',
  description: 'Надежный автосервис в [Ваш Город] с полным спектром услуг: диагностика, ремонт, ТО, шиномонтаж. Гарантия качества, опытные мастера и современное оборудование.',
  keywords: ["автосервис, ремонт автомобилей, ТО, шиномонтаж, диагностика, авто, [Ваш Город], профессиональный ремонт, качественный ремонт"],
  openGraph: {
    "title": "АвтоСервис Эксперт - Профессиональный Ремонт и ТО Автомобилей",
    "description": "Надежный автосервис в [Ваш Город] с полным спектром услуг: диагностика, ремонт, ТО, шиномонтаж. Гарантия качества, опытные мастера и современное оборудование.",
    "url": "https://www.autoservice-expert.ru",
    "siteName": "АвтоСервис Эксперт",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/car-mechanic-using-lamp-while-repairing-engine-workshop_637285-4295.jpg",
        "alt": "Механик ремонтирует двигатель автомобиля"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "АвтоСервис Эксперт - Профессиональный Ремонт и ТО Автомобилей",
    "description": "Надежный автосервис в [Ваш Город] с полным спектром услуг: диагностика, ремонт, ТО, шиномонтаж. Гарантия качества, опытные мастера и современное оборудование.",
    "images": [
      "http://img.b2bpic.net/free-photo/car-mechanic-using-lamp-while-repairing-engine-workshop_637285-4295.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
