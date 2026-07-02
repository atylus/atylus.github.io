export type TeamSlot =
  | "feature"
  | "col-left-top"
  | "col-left-bottom"
  | "col-right-top"
  | "col-right-bottom"
  | "page-ideas";

export type TeamMember = {
  id: string;
  name: string;
  designation: string;
  tag: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  cardClassName?: string;
  slot: TeamSlot;
  socials: { href: string; iconClass: string }[];
};
