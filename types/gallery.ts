export type GalleryFilterOption = {
  id: string;
  label: string;
  filter: string;
};

export type GalleryItem = {
  id: string;
  filterClass: string;
  dataSrc: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  label: string;
};

export type GalleryMasonryFilterOption = {
  id: string;
  label: string;
  filter: string;
};

export type GalleryMasonryItem = {
  id: string;
  itemClassName: string;
  dataSrc: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
};
