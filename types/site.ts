export type NavItem = {
  label: string;
  href: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type PhilosophyItem = {
  title: string;
  description: string;
  tone: "red" | "blue";
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
  photos: string[];
};

export type ScheduleItem = {
  day: string;
  title: string;
  time: string;
  tone: "red" | "blue";
};

export type ContactItem = {
  label: string;
  value: string;
};
