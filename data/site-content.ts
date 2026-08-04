import type {
  ContactItem,
  GalleryItem,
  NavItem,
  PhilosophyItem,
  ScheduleItem,
  StatItem,
} from "@/types/site";

export const navItems: NavItem[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Filosofi", href: "#filosofi" },
  { label: "Arsip", href: "#arsip" },
  { label: "Jadwal", href: "#jadwal" },
  { label: "Kontak", href: "#kontak" },
];

export const stats: StatItem[] = [
  { label: "Tanggal", value: "15" },
  { label: "Bulan", value: "1" },
  { label: "Tahun Berdiri", value: "1980" },
  { label: "Qontak", value: "Q" },
];

export const philosophyItems: PhilosophyItem[] = [
  {
    title: "Kekeluargaan",
    description: "Menjalin ikatan kekeluargaan yang kuat tanpa membeda-bedakan.",
    tone: "red",
  },
  {
    title: "Kehormatan",
    description: "Menjunjung tinggi harga diri, martabat, dan nama baik perguruan.",
    tone: "red",
  },
  {
    title: "Disiplin",
    description: "Patuh terhadap aturan, waktu, dan tata tertib latihan.",
    tone: "red",
  },
  {
    title: "Bela Diri",
    description: "Melatih teknik untuk melindungi diri dan membantu sesama.",
    tone: "blue",
  },
  {
    title: "Mental",
    description: "Membentuk mental kuat, pantang menyerah, dan tidak mudah goyah.",
    tone: "blue",
  },
  {
    title: "Kerohanian",
    description: "Mendekatkan diri kepada Tuhan Yang Maha Esa.",
    tone: "blue",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Latihan Rutin",
    category: "Latihan",
    image: "/images/gallery/latihan/1.PNG",
    photos: [
      "/images/gallery/latihan/1.PNG",
      "/images/gallery/latihan/2.PNG",
      "/images/gallery/latihan/3.PNG",
      "/images/gallery/latihan/4.PNG",
      "/images/gallery/latihan/5.PNG",
      "/images/gallery/latihan/6.PNG",
      "/images/gallery/latihan/7.PNG",
      "/images/gallery/latihan/8.jpeg",
      "/images/gallery/latihan/9.jpeg",
      "/images/gallery/latihan/10.PNG",
      "/images/gallery/latihan/11.PNG",
      "/images/gallery/latihan/12.PNG",
      "/images/gallery/latihan/13.PNG",
      "/images/gallery/latihan/14.PNG",
      "/images/gallery/latihan/15.PNG",
      "/images/gallery/latihan/16.PNG",
      "/images/gallery/latihan/17.PNG",
      "/images/gallery/latihan/18.PNG",
      "/images/gallery/latihan/19.PNG",
      "/images/gallery/latihan/20.PNG",
      "/images/gallery/latihan/21.PNG",
      "/images/gallery/latihan/22.PNG",
    ],
  },
  {
    title: "Pengesahan Warga",
    category: "Pengesahan",
    image: "/images/gallery/pengesahan/1.jpeg",
    photos: [
      "/images/gallery/pengesahan/1.jpeg",
      "/images/gallery/pengesahan/2.jpeg",
      "/images/gallery/pengesahan/3.jpeg",
    ],
  },
  {
    title: "UKT",
    category: "Ujian Kenaikan Tingkat",
    image: "/images/gallery/ukt/1.jpeg",
    photos: [
      "/images/gallery/ukt/1.jpeg",
      "/images/gallery/ukt/2.jpeg",
      "/images/gallery/ukt/3.jpeg",
      "/images/gallery/ukt/4.jpeg",
      "/images/gallery/ukt/5.jpeg",
      "/images/gallery/ukt/6.jpeg",
      "/images/gallery/ukt/7.jpeg",
      "/images/gallery/ukt/8.jpeg",
      "/images/gallery/ukt/9.jpeg",
      "/images/gallery/ukt/10.jpeg",
    ],
  },
  {
    title: "Bakti Sosial",
    category: "Bakti Sosial",
    image: "/images/gallery/bakti-sosial/1.jpeg",
    photos: [
      "/images/gallery/bakti-sosial/1.jpeg",
      "/images/gallery/bakti-sosial/2.jpeg",
    ],
  },
];

export const schedules: ScheduleItem[] = [
  { day: "Selasa", title: "Tanggung, Bence, Garum, Kabupaten Blitar", time: "19.00", tone: "blue" },
  { day: "Jumat", title: "Tanggung, Bence, Garum, Kabupaten Blitar", time: "19.00", tone: "red" },
];

export const contacts: ContactItem[] = [
  { label: "Alamat", value: "Tanggung, Kel. Bence, Kec. Garum, Kab. Blitar, Jawa Timur" },
  { label: "WhatsApp", value: "081217027640" },
  { label: "Instagram", value: "ikspi.sub_tanggung" },
  { label: "TikTok", value: "kerasakti_tanggung" },
  { label: "Email", value: "tanggungks@gmail.com" },
];
