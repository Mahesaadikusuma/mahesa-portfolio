interface CardIcon {
  id: number;
  icon: string;
  color?: string;
  title: string;
  to: string;
}
interface feature {
  id: number;
  title: string;
}
interface technologi {
  id: number;
  title: string;
}
interface galleries {
  id: number;
  title: string;
  src: string;
}

interface CardItem {
  id: number;
  title: string;
  subTitle?: string;
  slug: string;
  description: string;
  icon: string;
  orientation?: "vertical" | "horizontal";
  images: string;
  to: string;
  demo: string;
  githubLink: string;
  icons: CardIcon[];
  features?: feature[];
  techs?: technologi[];
  galleries: galleries[];
}

export const useCards = () => {
  const cards: CardItem[] = [
    {
      id: 1,
      title: "PiutangKu",
      subTitle: "piutangku skripsi aplikasi piutang akuntansi",
      slug: "piutangku-skripsi-aplikasi-piutang-akuntansi",
      description:
        "PiutangKu adalah sebuah aplikasi pengelolaan piutang akuntansi yang dibangun menggunakan Laravel dan Livewire sebagai full-stack framework. Dalam proses pengembangan, aplikasi ini menerapkan Repository Design Pattern untuk memisahkan logika bisnis dengan akses data sehingga kode lebih terstruktur, mudah diuji, dan mudah dikembangkan.Aplikasi PiutangKu dirancang untuk membantu pengguna dalam mencatat, memonitor, serta mengelola piutang dagang secara efisien. Pengguna dapat membuat transaksi piutang berdasarkan produk, menentukan tenor cicilan, serta melihat riwayat atau status pembayaran secara real time. Selain itu, sistem ini dilengkapi dengan fitur pembayaran online menggunakan Midtrans sebagai payment gateway, memungkinkan proses pelunasan piutang dilakukan secara otomatis, aman, dan lebih praktis.",
      icon: "",
      orientation: "vertical",
      images: "/images/piutangku/Home Page.png",
      to: "/projects/piutangku-skripsi-aplikasi-piutang-akuntansi",
      demo: "",
      githubLink: "https://github.com/Mahesaadikusuma/piutang-skripsi",
      icons: [
        {
          id: 1,
          icon: "i-mdi:home",
          title: "Home",
          to: "/",
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
      id: 2,
      title: "Nusantara Trip",
      subTitle: "Capstone Project Dicoding Cycle 6",
      slug: "capstone-project-dicoding-cycle-6",
      description:
        "NusantaraTrip adalah hasil dari proyek capstone yang dilakukan sebagai bagian dari jalur pembelajaran SIB Dicoding Cycle 6, yang mencakup pengembangan front-end dan back-end. Proyek ini merupakan upaya kolaboratif dalam sebuah kelompok yang terdiri dari tiga anggota, termasuk saya sendiri, Mahesa Adi Kusuma. Tujuan utama dari NusantaraTrip adalah untuk memberikan pengguna informasi lengkap tentang berbagai acara pariwisata dan artikel terkait. Selain itu, kami menyediakan fitur ulasan yang memungkinkan pengguna untuk mengirimkan ulasan mereka tentang acara yang mereka hadiri.",
      icon: "",
      orientation: "vertical",
      images: "/images/thumbnail-capstone.jpg",
      to: "/projects/capstone-project-dicoding-cycle-6",
      demo: "",
      githubLink: "",
      icons: [
        {
          id: 1,
          icon: "devicon:webpack",
          color: "bg-blue-600",
          title: "Home",
          to: "/",
        },
        {
          id: 2,
          icon: "devicon:laravel",
          color: "bg-red-600",
          title: "Home",
          to: "/",
        },
        {
          id: 3,
          icon: "vscode-icons:file-type-scss",
          color: "bg-pink-600",
          title: "Home",
          to: "/",
        },
        {
          id: 3,
          icon: "skill-icons:bootstrap",
          color: "bg-blue-800",
          title: "Home",
          to: "/",
        },
      ],
      features: [
        {
          id: 1,
          title:
            "Acara Pariwisata & Artikel: Menampilkan informasi terkini tentang acara pariwisata yang sedang berlangsung dan yang akan datang, serta artikel terkait",
        },
        {
          id: 2,
          title:
            "Ulasan Pengguna: Memungkinkan pengguna untuk mengirim dan melihat ulasan, meningkatkan pengalaman pengguna dengan umpan balik yang autentik",
        },
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
          id: 5,
          title:
            "Axios: Digunakan untuk melakukan pengambilan data dari back-end dengan mudah dan efisien",
        },
        {
          id: 5,
          title:
            "URL Dinamis dengan Slug: Meningkatkan SEO dan memperbaiki pengalaman pengguna dengan menciptakan URL yang mudah dibaca dan deskriptif",
        },
      ],
      galleries: [
        {
          id: 1,
          title: "gallery 1",
          src: "/images/thumbnail-capstone.jpg",
        },
        // {
        //   id: 2,
        //   title: "gallery 2",
        //   src: "https://picsum.photos/640/640?random=1",
        // },
        // // {
        // //   id: 3,
        // //   title: "gallery 3",
        // //   src: "https://picsum.photos/640/640?random=2",
        // // },
      ],
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
  return { cards };
};
