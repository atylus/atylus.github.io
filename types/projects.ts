/** Project card for grid layout (project list page) */
export type ProjectItem = {
  id: string;
  cardClassName?: string;
  category: string;
  title: string;
  description: string;
};

/** Project card for modern layout (project2 page) */
export type ProjectModernItem = {
  id: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
};

/** Gallery block item for home-14 ProjectSec7 (lightbox blocks) */
export type ProjectBlockItem = {
  id: string;
  blockClassName: string;
  dataSrc: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  alt: string;
};
