export interface CardIcon {
  id: number;
  icon: string;
  color?: string;
  title: string;
  to: string;
}
export interface Feature {
  id: number;
  title: string;
}
export interface Technology {
  id: number;
  title: string;
}
export interface Gallery {
  id: number;
  title: string;
  src: string;
}

export interface CardItem {
  id: number;
  title: string;
  subTitle?: string;
  slug: string;
  description: string;
  icon?: string;
  orientation?: "vertical" | "horizontal";
  images: string;
  to: string;
  demo?: string;
  githubLink?: string;
  icons: CardIcon[];
  features?: Feature[];
  techs?: Technology[];
  galleries: Gallery[];
}
// 1. Buat tipe data baru yang mengecualikan 'id' untuk mempermudah penulisan
type RawCardItem = Omit<CardItem, "id">;


const rawProjectsData: RawCardItem[] = [
  {
    // id: 1,
    title: "PiutangKu",
    subTitle: "piutangku skripsi aplikasi piutang akuntansi",
    slug: "piutangku-skripsi-aplikasi-piutang-akuntansi",
    description:
      "PiutangKu adalah aplikasi web pengelolaan piutang akuntansi yang saya kembangkan sebagai proyek Tugas Akhir (Skripsi). Dibangun menggunakan ekosistem full-stack Laravel dan Livewire, aplikasi ini dirancang untuk membantu pengguna dalam mencatat, memonitor, dan mengelola piutang dagang secara efisien. Sorotan utama dari proyek ini ada pada arsitektur sistemnya. Saya mengimplementasikan Repository Design Pattern untuk memisahkan logika bisnis dan akses data dari Controller. Pendekatan ini menghasilkan codebase yang jauh lebih terstruktur, mudah diuji (testable), dan skalabel untuk pengembangan lebih lanjut. Secara fungsionalitas, pengguna dapat membuat transaksi piutang berdasarkan produk, mengatur tenor cicilan, serta memantau riwayat pembayaran secara real-time. Sistem ini juga telah terintegrasi dengan payment gateway Midtrans, memungkinkan pelunasan piutang atau pembayaran cicilan dilakukan secara otomatis, aman, dan praktis secara online.",
    icon: "",
    orientation: "vertical",
    images: "/images/piutangku/Home Page.png",
    to: "/projects/piutangku-skripsi-aplikasi-piutang-akuntansi",
    demo: "",
    githubLink: "https://github.com/Mahesaadikusuma/piutang-skripsi",
    icons: [
      {
        id: 1,
        icon: "devicon:laravel",
        title: "Laravel",
        to: "/",
      },
      {
        id: 2,
        icon: "devicon:livewire",
        title: "Livewire",
        to: "/",
      },
      {
        id: 3,
        icon: "devicon:tailwindcss",
        title: "Tailwind CSS",
        to: "/",
      },
    ],
    features: [
      {
        id: 1,
        title: "Manajemen Siklus Piutang: Membantu pengguna dalam mencatat transaksi piutang berdasarkan produk, menentukan tenor cicilan, dan memonitor riwayat pembayaran secara real-time.",
      },
      {
        id: 2,
        title: "Arsitektur Clean Code (Repository Pattern): Mengimplementasikan Repository Design Pattern untuk memisahkan logika bisnis dengan akses data, menghasilkan kode yang terstruktur, mudah diuji, dan skalabel.",
      },
      {
        id: 3,
        title: "Antarmuka Dinamis (Livewire): Menyajikan pengalaman pengguna yang interaktif dan responsif layaknya Single Page Application (SPA) tanpa perlu menulis kode JavaScript yang kompleks.",
      },
      {
        id: 4,
        title: "Otomatisasi Pembayaran Online: Terintegrasi dengan API Midtrans Payment Gateway untuk memfasilitasi proses pelunasan cicilan secara otomatis, aman, dan memverifikasi status pembayaran secara instan.",
      },
    ],
    techs: [
      {
        id: 1,
        title: "Laravel: Framework PHP utama yang digunakan sebagai fondasi backend, mengelola rute, keamanan, dan logika inti aplikasi.",
      },
      {
        id: 2,
        title: "Livewire: Digunakan bersama komponen Blade untuk membangun antarmuka frontend reaktif dan dinamis yang terhubung langsung dengan backend.",
      },
      {
        id: 3,
        title: "Tailwind CSS: Framework utility-first CSS yang digunakan untuk mendesain antarmuka pengguna (UI) yang modern, bersih, dan responsif di berbagai perangkat.",
      },
      {
        id: 4,
        title: "MySQL: Sistem manajemen basis data relasional yang andal untuk menyimpan dan mengelola data transaksi, riwayat piutang, dan informasi pengguna secara aman.",
      },
      {
        id: 5,
        title: "Midtrans: Layanan payment gateway pihak ketiga yang diintegrasikan untuk memproses transaksi pembayaran tagihan online dengan berbagai pilihan metode (Bank Transfer, E-Wallet, dll).",
      },
    ],
    galleries: [
      {
        id: 1,
        title: "gallery 1",
        src: "/images/piutangku/Home Page.png",
      },
      {
        id: 2,
        title: "gallery 2",
        src: "/images/piutangku/Login.png",
      },
      {
        id: 3,
        title: "gallery 3",
        src: "/images/piutangku/Register.png",
      },
      {
        id: 4,
        title: "gallery 4",
        src: "/images/piutangku/Dashboard-admin.png",
      },
      {
        id: 5,
        title: "gallery 5",
        src: "/images/piutangku/Dashboard-admin-piutang.png",
      },
      {
        id: 6,
        title: "gallery 6",
        src: "/images/piutangku/Dashboard-admin-piutang-product.png",
      },
      {
        id: 7,
        title: "gallery 7",
        src: "/images/piutangku/Dashboard-admin-piutang-product-create.png",
      },
      {
        id: 8,
        title: "gallery 8",
        src: "/images/piutangku/export-excel-piutang.png",
      },
      {
        id: 9,
        title: "gallery 9",
        src: "/images/piutangku/Export-data-mou.png",
      },
      {
        id: 9,
        title: "gallery 9",
        src: "/images/piutangku/export-pdf-piutang.png",
      },
      {
        id: 10,
        title: "gallery 10",
        src: "/images/piutangku/export-piutang-detail-pdf.png",
      },
      {
        id: 11,
        title: "gallery 11",
        src: "/images/piutangku/export-piutang-product-excel.png",
      },
      {
        id: 12,
        title: "gallery 12",
        src: "/images/piutangku/invoice-piutang-pdf.png",
      },
      {
        id: 13,
        title: "gallery 13",
        src: "/images/piutangku/Midtrans.png",
      },
    ],
  },
  {
    // id: 2,
    title: "Nusantara Trip",
    subTitle: "Capstone Project Dicoding Cycle 6",
    slug: "capstone-project-dicoding-cycle-6",
    description:
      "NusantaraTrip adalah platform informasi pariwisata Indonesia yang dikembangkan sebagai Capstone Project pada program Studi Independen Bersertifikat (SIB) Dicoding x Kampus Merdeka Cycle 6. Proyek ini dibangun secara kolaboratif oleh tim beranggotakan tiga orang, termasuk saya (Mahesa Adi Kusuma), saat saya berada di semester 6. Secara arsitektur, aplikasi web ini memisahkan logika antarmuka dan manajemen data. Sisi Front-End dibangun menggunakan Vanilla JavaScript yang dioptimalkan dengan Webpack untuk menyajikan antarmuka yang responsif dan interaktif dalam menampilkan informasi. Sementara itu, sisi Back-End dan sistem database dikembangkan menggunakan Laravel, yang menangani seluruh operasi CRUD (Create, Read, Update, Delete) serta manajemen konten. Tujuan utama aplikasi ini adalah menyajikan direktori lengkap mengenai berbagai acara pariwisata dan artikel terkait di Nusantara. Selain itu, kami juga mengintegrasikan fitur ulasan interaktif yang memungkinkan pengguna untuk membagikan pengalaman mereka setelah menghadiri sebuah acara.",
    icon: "",
    orientation: "vertical",
    images: "/images/nusantara/thumbnail-capstone.jpg",
    to: "/projects/capstone-project-dicoding-cycle-6",
    demo: "",
    githubLink: "",
    icons: [
      {
        id: 1,
        icon: "devicon:webpack",
        color: "bg-blue-600",
        title: "Webpack",
        to: "/",
      },
      {
        id: 2,
        icon: "devicon:laravel",
        color: "bg-red-600",
        title: "Laravel",
        to: "/",
      },
      {
        id: 3,
        icon: "vscode-icons:file-type-scss",
        color: "bg-pink-600",
        title: "Scss",
        to: "/",
      },
      {
        id: 4,
        icon: "skill-icons:bootstrap",
        color: "bg-blue-800",
        title: "Home",
        to: "/",
      },
    ],
    features: [
      {
        id: 1,
        title: "Acara Pariwisata & Artikel: Menampilkan informasi terkini tentang acara pariwisata yang sedang berlangsung dan yang akan datang, serta artikel terkait"
      },
      {
        id: 2,
        title: "Ulasan Pengguna: Memungkinkan pengguna untuk mengirim dan melihat ulasan, meningkatkan pengalaman pengguna dengan umpan balik yang autentik"
      },
      {
        id: 3,
        title: "Manajemen Data (Back-End Panel): Sistem admin terpusat menggunakan Laravel untuk melakukan seluruh operasi CRUD pada data acara, artikel, dan pengelolaan ulasan pengguna"
      },
      {
        id: 4,
        title: "Rendering Data Dinamis: Implementasi Vanilla JavaScript dan Webpack di sisi Front-End untuk melakukan fetching (pengambilan) data secara dinamis dari server tanpa me-reload halaman secara penuh"
      },
      {
        id: 5,
        title: "Antarmuka Responsif: Desain UI yang responsif dan dapat diakses dengan optimal melalui berbagai ukuran layar perangkat (Desktop, Tablet, maupun Mobile)"
      }
    ],
    techs: [
      {
        id: 1,
        title:
          "Progressive Web App (PWA): Memungkinkan pengguna untuk menginstal situs web sebagai aplikasi seluler, memberikan pengalaman seperti aplikasi native.",
      },
      {
        id: 2,
        title:
          "Webpack: Digunakan sebagai web bundler untuk menyederhanakan dan mengoptimalkan proses pengembangan",
      },
      {
        id: 3,
        title:
          "HTML, CSS, SCSS, dan JS: Membentuk inti dari pengembangan front-end, memastikan antarmuka pengguna yang responsif dan dinamis.",
      },
      {
        id: 4,
        title:
          "Bootstrap: Digunakan untuk mempercepat pengembangan antarmuka yang responsif dan menarik",
      },
      {
        id: 5,
        title:
          "Laravel: Digunakan untuk API back-end, mengelola data dan operasi sisi server secara efisien",
      },
      {
        id: 6,
        title:
          "Axios: Digunakan untuk melakukan pengambilan data dari back-end dengan mudah dan efisien",
      },
      {
        id: 7,
        title:
          "URL Dinamis dengan Slug: Meningkatkan SEO dan memperbaiki pengalaman pengguna dengan menciptakan URL yang mudah dibaca dan deskriptif",
      },
    ],
    galleries: [
      {
        id: 1,
        title: "gallery 1",
        src: "/images/nusantara/thumbnail-capstone.jpg",
      },
      {
        id: 2,
        title: "gallery 2",
        src: "/images/nusantara/mockup-home-page.png",
      },
      {
        id: 3,
        title: "gallery 3",
        src: "/images/nusantara/nusantara-detail.png",
      },
    ],
  },
  {
    // id: 3,
    title: "Furniluxe Livewire",
    subTitle: "furniluxe livewire",
    slug: "furniluxe-livewire",
    description:
      "Furniluxe adalah sebuah website e-commerce yang dibuat untuk jual beli furniture, dikembangkan menggunakan teknologi Livewire dan Laravel.",
    icon: "",
    orientation: "vertical",
    images: "/images/Furniluxe.webp",
    to: "/projects/furniluxe-livewire",
    demo: "",
    githubLink: "",
    icons: [
      {
        id: 1,
        icon: "i-mdi:home",
        title: "Home",
        to: "/",
      },
    ],
    galleries: [],
  },
  {
    // id: 4,
    title: "Store Online",
    subTitle: "store online",
    slug: "store-online",
    description:
      "Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.",
    icon: "",
    orientation: "vertical",
    images: "/images/Store.webp",
    to: "/projects/store-online",
    demo: "",
    githubLink: "",
    icons: [
      {
        id: 1,
        icon: "i-mdi:home",
        title: "Home",
        to: "/",
      },
    ],
    galleries: [],
  },
  {
    // id: 5,
    title: "Travel Nomads",
    subTitle: "travel Nomads",
    slug: "travel-nomads",
    description:
      "Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.",
    icon: "",
    orientation: "vertical",
    images: "/images/Nomads.webp",
    to: "/projects/travel-nomads",
    demo: "",
    githubLink: "",
    icons: [
      {
        id: 1,
        icon: "i-mdi:home",
        title: "Home",
        to: "/",
      },
    ],
    galleries: [],
  },
];

export const useCards = () => {
  // 3. Mapping data mentah tadi untuk men-generate 'id' secara otomatis
  const cards: CardItem[] = rawProjectsData.map((project, index) => ({
    ...project,
    id: index + 1, // Otomatis mengisi id: 1, 2, 3, dst berdasarkan urutan
  }));

  return { cards };
};