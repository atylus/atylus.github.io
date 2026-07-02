import type {
  GalleryMasonryFilterOption,
  GalleryMasonryItem,
} from "@/types/gallery";

export const galleryMasonryFilters: GalleryMasonryFilterOption[] = [
  { id: "all", label: "All", filter: "*" },
  { id: "neural", label: "Neural networks", filter: ".neural" },
  { id: "company", label: "Company", filter: ".company" },
  { id: "abstract", label: "Abstract", filter: ".abstract" },
];

export const galleryMasonryItems: GalleryMasonryItem[] = [
  {
    id: "pro8-1",
    itemClassName: "isotope-item neural company",
    dataSrc: "/assets/images/project/pro8-1.png",
    imageSrc: "/assets/images/project/pro8-1.png",
    imageWidth: 620,
    imageHeight: 421,
    title: "Architecture",
  },
  {
    id: "pro8-3",
    itemClassName: "isotope-item v2 abstract",
    dataSrc: "/assets/images/project/pro8-3.png",
    imageSrc: "/assets/images/project/pro8-3.png",
    imageWidth: 1231,
    imageHeight: 873,
    title: "Architecture",
  },
  {
    id: "pro8-2",
    itemClassName: "isotope-item abstract company",
    dataSrc: "/assets/images/project/pro8-2.png",
    imageSrc: "/assets/images/project/pro8-2.png",
    imageWidth: 620,
    imageHeight: 421,
    title: "Architecture",
  },
  {
    id: "pro8-4",
    itemClassName: "isotope-item v2 v3 neural",
    dataSrc: "/assets/images/project/pro8-4.png",
    imageSrc: "/assets/images/project/pro8-4.png",
    imageWidth: 1180,
    imageHeight: 873,
    title: "Architecture",
  },
  {
    id: "pro8-5",
    itemClassName: "isotope-item neural company",
    dataSrc: "/assets/images/project/pro8-5.png",
    imageSrc: "/assets/images/project/pro8-5.png",
    imageWidth: 671,
    imageHeight: 421,
    title: "Architecture",
  },
  {
    id: "pro8-6",
    itemClassName: "isotope-item abstract",
    dataSrc: "/assets/images/project/pro8-6.png",
    imageSrc: "/assets/images/project/pro8-6.png",
    imageWidth: 671,
    imageHeight: 421,
    title: "Architecture",
  },
];
