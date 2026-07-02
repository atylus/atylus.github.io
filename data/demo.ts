import type { Metadata } from "next";

export type DemoListItem = {
  label: string;
  liClassName?: string;
};

export type DemoCardItem = {
  id: number;
  href: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  demoNum: string;
  demoTitle: string;
  cardClassName?: string;
};

const BASE_TITLE = "Atylus AI Agency & Technology";
const BASE_DESCRIPTION =
  "Atylus AI Agency & Technology React Nextjs Template - Demo home page";

/** Get Next.js metadata for a demo page by index (1–17). Use in page.tsx: export const metadata = getDemoMetadata(1); */
export function getDemoMetadata(index: number): Metadata {
  const card = demoCards.find((c) => c.id === index);
  const title = card
    ? `${card.demoTitle} | ${BASE_TITLE}`
    : BASE_TITLE;
  const description = card
    ? `${BASE_DESCRIPTION} - ${card.demoTitle}. ${card.demoNum}.`
    : BASE_DESCRIPTION;
  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export const demoListItems: DemoListItem[] = [
  { label: "Unique design" },
  { label: "Free Life Time Update" },
  { label: "Fast & Friendly Support", liClassName: "m-0" },
];

export const demoCards: DemoCardItem[] = [
  { id: 1, href: "/index1", imageSrc: "/assets/images/event/demo1-2.png", imageWidth: 801, imageHeight: 658, demoNum: "01.Home", demoTitle: "AI Consulting" },
  { id: 2, href: "/index2", imageSrc: "/assets/images/event/demo1-1.png", imageWidth: 791, imageHeight: 658, demoNum: "02.Home", demoTitle: "Modern technology" },
  { id: 3, href: "/index3", imageSrc: "/assets/images/event/demo1-4.png", imageWidth: 801, imageHeight: 658, demoNum: "03.Home", demoTitle: "AI Agency" },
  { id: 4, href: "/index4", imageSrc: "/assets/images/event/demo1-5.png", imageWidth: 798, imageHeight: 658, demoNum: "04.Home", demoTitle: "Chatbot" },
  { id: 5, href: "/index5", imageSrc: "/assets/images/event/demo1-6.png", imageWidth: 798, imageHeight: 658, demoNum: "05.Home", demoTitle: "Startup" },
  { id: 6, href: "/index6", imageSrc: "/assets/images/event/demo1-15.png", imageWidth: 798, imageHeight: 658, demoNum: "06.Home", demoTitle: "AI Consulting" },
  { id: 7, href: "/index7", imageSrc: "/assets/images/event/demo1-7.png", imageWidth: 798, imageHeight: 658, demoNum: "07.Home", demoTitle: "Futursim" },
  { id: 8, href: "/index8", imageSrc: "/assets/images/event/demo1-3.png", imageWidth: 798, imageHeight: 658, demoNum: "08.Home", demoTitle: "AI Solutions" },
  { id: 9, href: "/index9", imageSrc: "/assets/images/event/demo1-10.png", imageWidth: 798, imageHeight: 658, demoNum: "09.Home", demoTitle: "Voiceover" },
  { id: 10, href: "/index10", imageSrc: "/assets/images/event/demo1-9.png", imageWidth: 798, imageHeight: 658, demoNum: "10.Home", demoTitle: "Science" },
  { id: 11, href: "/index11", imageSrc: "/assets/images/event/demo1-8.png", imageWidth: 798, imageHeight: 658, demoNum: "11.Home", demoTitle: "Creative bureau" },
  { id: 12, href: "/index12", imageSrc: "/assets/images/event/demo1-13.png", imageWidth: 798, imageHeight: 658, demoNum: "12.Home", demoTitle: "Video voiceover" },
  { id: 13, href: "/index13", imageSrc: "/assets/images/event/demo1-11.png", imageWidth: 798, imageHeight: 658, demoNum: "13.Home", demoTitle: "IT services", cardClassName: "demo-img v2" },
  { id: 14, href: "/index14", imageSrc: "/assets/images/event/demo1-12.png", imageWidth: 798, imageHeight: 658, demoNum: "14.Home", demoTitle: "AI devices" },
  { id: 15, href: "/index15", imageSrc: "/assets/images/event/demo1-14.png", imageWidth: 798, imageHeight: 658, demoNum: "15.Home", demoTitle: "AI Solutions" },
  { id: 16, href: "/index16", imageSrc: "/assets/images/event/demo1-16.png", imageWidth: 798, imageHeight: 658, demoNum: "16.Home", demoTitle: "Image generator" },
  { id: 17, href: "/index17", imageSrc: "/assets/images/event/demo1-17.png", imageWidth: 798, imageHeight: 658, demoNum: "17.Home", demoTitle: "Content generator", cardClassName: "demo-img mb-0" },
];
