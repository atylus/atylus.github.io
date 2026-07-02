export type InnerPageSlide = {
  id: string;
  imageSrc: string;
  width: number;
  height: number;
  alt?: string;
};

export const innerPagesSlides: InnerPageSlide[] = [
  { id: "pro10-1", imageSrc: "/assets/images/project/pro10-1.png", width: 400, height: 500 },
  { id: "pro10-2", imageSrc: "/assets/images/project/pro10-2.png", width: 400, height: 617 },
  { id: "pro10-3", imageSrc: "/assets/images/project/pro10-3.png", width: 400, height: 530 },
  { id: "pro10-4", imageSrc: "/assets/images/project/pro10-4.png", width: 400, height: 526 },
  { id: "pro10-5", imageSrc: "/assets/images/project/pro10-5.png", width: 400, height: 508 },
];
