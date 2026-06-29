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
    title: 'Sirenata - MagangHub',
    subTitle: 'Project MagangHub Di Pusrenaker Kemnaker',
    slug: 'sirenata',
    description: 'Sistem Informasi Perencanaan Tenaga Kerja (SIRENATA) adalah sebuah platform pembelajaran daring berbasis website yang dirancang untuk meningkatkan kompetensi Aparatur Sipil Negara (ASN) di 38 provinsi dan 514 kabupaten/kota terkait Perencanaan Tenaga Kerja Makro, Mikro, dan Indeks Pembangunan Ketenagakerjaan (IPK). Sistem ini dikembangkan untuk mengatasi keterbatasan ruang dan waktu pada metode pembelajaran tatap muka konvensional, serta memfasilitasi pemerataan pengetahuan secara nasional. Selain berfungsi sebagai media transfer pengetahuan yang terintegrasi dengan aplikasi simulator penghitungan Rencana Tenaga Kerja (RTK), SIRENATA juga menjadi instrumen strategis untuk memetakan kapasitas Sumber Daya Manusia (SDM) di daerah. Melalui fitur pelaporan yang terpusat, sistem ini memfasilitasi pengunggahan pelaporan RTK Daerah (RTKD) oleh masing-masing provinsi dan kabupaten/kota, serta pelaporan RTK Nasional oleh instansi pusat. Lebih lanjut, SIRENATA dilengkapi dengan sistem verifikasi berjenjang untuk mengesahkan agar dokumen RTK tersebut valid dan dapat berlaku. Dalam alur ini, instansi pusat memiliki wewenang penuh untuk memverifikasi pelaporan dari seluruh provinsi hingga kabupaten/kota. Sementara itu, pemerintah provinsi memiliki hak verifikasi khusus untuk mengesahkan RTK di wilayah provinsinya sendiri beserta laporan dari kabupaten/kota yang berada di bawah naungannya (misalnya, Provinsi Jawa Barat memverifikasi kabupaten/kota di wilayah Jawa Barat). Di sisi lain, instansi tingkat kabupaten/kota dikhususkan sebagai penyusun yang hanya bertugas mengunggah dan melaporkan dokumen RTK mereka ke dalam sistem untuk diverifikasi oleh tingkat di atasnya',
    icon: '',
    orientation: 'vertical',
    images: '/images/sirenata/thumbnail-sirenata.png',
    to: '/projects/sirenata',
    demo: '',
    githubLink: '',
    icons: [
      {
        id: 1,
        icon: "devicon:laravel",
        color: "bg-red-600",
        title: "Laravel",
        to: "/",
      },
      {
        id: 2,
        icon: "devicon:tailwindcss",
        color: "bg-red-600",
        title: "Tailwind CSS",
        to: "/",
      },
      {
        id: 3,
        icon: "devicon:livewire",
        color: "bg-red-600",
        title: "Livewire",
        to: "/",
      },
      {
        id: 4,
        icon: "devicon:alpinejs",
        color: "bg-blue-600",
        title: "Alpine JS",
        to: "/",
      },
    ],
    features: [
      {
        id: 1,
        title: 'Mengembangkan modul pelaporan di mana instansi Kabupaten/Kota dapat mengunggah dokumen RTK, sementara instansi Pusat menyusun RTK Nasional'
      },
      {
        id: 2,
        title: 'Membuat sistem verifikasi berjenjang yang memberikan wewenang verifikasi kepada instansi Pusat untuk seluruh wilayah, instansi Provinsi untuk wilayahnya sendiri, dan Kabupaten/Kota sebagai penyusun dokumen'
      },
      {
        id: 3,
        title: 'Merancang dashboard monitoring yang terintegrasi dengan database pusat, memungkinkan pemerintah pusat untuk memantau dan mengevaluasi data secara real-time dari seluruh daerah'
      },
      {
        id: 4,
        title: 'Membuat sistem pelacakan (tracking) progres ASN yang sedang menonton video pembelajaran dengan tingkat akses data yang disesuaikan'
      },
      {
        id: 5,
        title: 'Mengatur hak akses agar instansi Pusat dapat melihat rekapitulasi seluruh Provinsi dan Kabupaten/Kota'
      },
      {
        id: 6,
        title: 'Mengatur hak akses agar Provinsi dapat memantau rekapitulasi data SDM di tingkat provinsinya sendiri serta wilayah Kabupaten/Kota binaannya'
      },
      {
        id: 7,
        title: 'Mengatur hak akses agar Kabupaten/Kota dapat melihat rekapitulasi data SDM khusus di instansinya masing-masing'
      },
      {
        id: 8,
        title: 'Mengembangkan fitur CRUD (Create, Read, Update, Delete) terintegrasi untuk mengelola seluruh materi, modul, dan video pembelajaran yang ada di dalam platform'
      },
      {
        id: 9,
        title: 'Membangun alur autentikasi pengguna yang aman, meliputi proses Login, Register, dan Reset Password'
      },
      {
        id: 10,
        title: 'Mengimplementasikan manajemen hak akses pengguna (Role/Permission) yang dinamis menggunakan library Laravel Permission (Spatie) untuk memisahkan wewenang secara spesifik'
      },
      {
        id: 11,
        title: 'Merancang dan membangun REST API yang efisien untuk mendukung kelancaran komunikasi data dan fungsionalitas sistem secara keseluruhan'
      },
      {
        id: 12,
        title: 'Menyusun dokumentasi API secara otomatis, interaktif, dan terstruktur menggunakan Laravel Scramble guna mempermudah kolaborasi tim'
      }
    ],
    techs: [
      {
        id: 1,
        title: 'Laravel: Framework PHP utama yang digunakan sebagai fondasi backend, mengelola rute, keamanan, dan logika inti aplikasi'
      },
      {
        id: 2,
        title: 'Livewire: Digunakan bersama komponen Blade untuk membangun antarmuka frontend reaktif dan dinamis yang terhubung langsung dengan backend'
      },
      {
        id: 3,
        title: 'Tailwind CSS: Framework CSS utility-first yang digunakan untuk merancang antarmuka pengguna yang responsif, modern, dan rapi'
      },
      {
        id: 4,
        title: 'Alpine JS: Framework JavaScript ringan yang disematkan untuk menambahkan interaktivitas pada antarmuka frontend secara efisien'
      },
      {
        id: 5,
        title: 'Laravel Modules: Library yang digunakan untuk menstrukturkan aplikasi ke dalam arsitektur modular, sehingga pengelolaan fitur yang kompleks menjadi lebih rapi, independen, dan mudah dikembangkan (scalable)'
      }
    ],
    
    galleries: [
      {
        id: 1,
        title: "Thumnbnail-sirenata",
        src: "/images/sirenata/thumbnail-sirenata.png"
      },
      {
        id: 2,
        title: "Auth Sirenata",
        src: "/images/sirenata/auth-sirenata.png"
      },
      {
        id: 3,
        title: "Dashboard Sirenata",
        src: "/images/sirenata/admin-pusat/dashboard-admin-pusat.png"
      },
      {
        id: 4,
        title: "Rencana Tenaga Kerja Nasional Sirenata",
        src: "/images/sirenata/admin-pusat/rencana-tenaga-kerja-nasional.png"
      },
      {
        id: 5,
        title: "Rencana Tenaga Kerja Nasional Sirenata",
        src: "/images/sirenata/admin-pusat/rencana-tenaga-kerja-nasional-create-edit-delete.png"
      },
      {
        id: 6,
        title: "Rencana Tenaga Kerja Sirenata Verification",
        src: "/images/sirenata/admin-pusat/rencana-tenaga-kerja-daerah-verification.png"
      },
      {
        id: 7,
        title: "Rekapitulasi SDM Sirenata",
        src: "/images/sirenata/admin-pusat/rekapitulasi-sdm-province-kab-kota.png"
      },
      {
        id: 8,
        title: "Management Course Sirenata",
        src: "/images/sirenata/admin-pusat/management-course.png"
      },
      {
        id: 9,
        title: "Management Course Detail Sirenata",
        src: "/images/sirenata/admin-pusat/management-course-detail.png"
      },
      {
        id: 10,
        title: "Dashboard Sirenata",
        src: "/images/sirenata/admin-province/dashboard-province.png"
      },
      {
        id: 11,
        title: "Rencana Tenaga Kerja Daerah Sirenata",
        src: "/images/sirenata/admin-province/rencana-tenaga-kerja-daerah-province-kab-kota.png"
      },
      {
        id: 12,
        title: "Rencana Tenaga Kerja Daerah Sirenata",
        src: "/images/sirenata/admin-province/rencana-tenaga-kerja-daerah-province.png"
      },
      {
        id: 13,
        title: "Dashboard Sirenata",
        src: "/images/sirenata/admin-kab-kota/dashboard-kab-kota.png"
      },
      {
        id: 14,
        title: "Rekapitulasi SDM Sirenata",
        src: "/images/sirenata/admin-kab-kota/rekapitulasi-sdm-kab-kota.png"
      },
      {
        id: 15,
        title: "Dashboard Sirenata",
        src: "/images/sirenata/admin-kab-kota/dashboard-kab-kota.png"
      },
      {
        id: 16,
        title: "Rencana Tenaga Kerja Daerah Sirenata",
        src: "/images/sirenata/admin-kab-kota/rencana-tenaga-kerja-daerah-kab-kota.png"
      }
    ],
    
  }, 
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
      "Furniluxe adalah sebuah platform e-commerce interaktif yang dirancang khusus untuk memfasilitasi transaksi jual beli furnitur secara daring. Proyek ini merupakan inisiatif personal yang saya kembangkan sebagai sarana pembelajaran dan eksplorasi teknis untuk memperdalam keterampilan Full-Stack Development. Aplikasi ini dibangun menggunakan framework Laravel sebagai fondasi backend yang tangguh, yang dipadukan dengan Livewire untuk menciptakan antarmuka pengguna (UI) yang dinamis, reaktif, dan mulus tanpa harus bergantung pada framework JavaScript yang kompleks.",
    icon: "",
    orientation: "vertical",
    images: "/images/furniluxe/Furniluxe.webp",
    to: "/projects/furniluxe-livewire",
    demo: "",
    githubLink: "",
    icons: [
      {
        id: 1,
        icon: "devicon:laravel",
        color: "bg-red-600",
        title: "Laravel",
        to: "/",
      },
      {
        id: 2,
        icon: "devicon:tailwindcss",
        color: "bg-red-600",
        title: "Tailwind CSS",
        to: "/",
      },
      {
        id: 3,
        icon: "devicon:livewire",
        color: "bg-red-600",
        title: "Livewire",
        to: "/",
      },
      {
        id: 4,
        icon: "devicon:alpinejs",
        color: "bg-blue-600",
        title: "Alpine JS",
        to: "/",
      },
    ],
    galleries: [
      {
        id: 1,
        title: "",
        src: "/images/furniluxe/Furniluxe.webp"
      },
      {
        id: 2,
        title: "",
        src: "/images/furniluxe/thumbnail-furniluxe.png"
      },
      {
        id: 3,
        title: "",
        src: "/images/furniluxe/thumbnail-furniluxe-2.png"
      },
    ],
    features: [
      {
        id: 1,
        title: 'Membangun sistem autentikasi pengguna yang aman dan terstruktur (Login, Register, dan Manajemen Profil) menggunakan Laravel Jetstream'
      },
      {
        id: 2,
        title: 'Membangun katalog produk interaktif yang memungkinkan pengguna melihat detail furnitur, harga, dan ketersediaan stok secara real-time'
      },
      {
        id: 3,
        title: 'Mengimplementasikan fitur keranjang belanja (Shopping Cart) yang reaktif menggunakan Livewire tanpa perlu me-refresh halaman'
      },
      {
        id: 4,
        title: 'Mengembangkan sistem manajemen produk (CRUD) pada halaman Admin untuk menambah, mengubah, dan menghapus data furnitur beserta gambarnya'
      },
      {
        id: 5,
        title: 'Membuat alur checkout sederhana untuk mensimulasikan proses pemesanan barang oleh pelanggan'
      }
    ],
    techs: [
      {
        id: 1,
        title: 'Laravel: Digunakan sebagai framework backend utama untuk menangani routing, logika bisnis, dan manajemen database (ORM)'
      },
      {
        id: 2,
        title: 'Livewire: Diimplementasikan untuk membangun antarmuka pengguna yang reaktif (seperti filter produk dan update keranjang) layaknya Single Page Application (SPA) hanya dengan menggunakan PHP'
      },
      {
        id: 3,
        title: 'Laravel Jetstream: Digunakan sebagai starter kit autentikasi yang tangguh untuk mengelola sesi pengguna, keamanan login, dan manajemen profil dengan mudah'
      }
    ]
  },
  {
    // id: 4,
    title: "Store Online",
    subTitle: "store online",
    slug: "store-online",
    description:
      "Proyek ini adalah sebuah platform e-commerce dan marketplace komprehensif yang saya kembangkan melalui program pembelajaran \"Full-Stack Web Developer: Toko Online\" di BuildWithAngga. Aplikasi ini dirancang untuk mensimulasikan sistem perdagangan daring berskala besar yang terinspirasi dari platform terkemuka masa kini.",
    icon: "",
    orientation: "vertical",
    images: "/images/bwa-store/thumbnail-bwa-store.png",
    to: "/projects/store-online",
    demo: "",
    githubLink: "https://github.com/Mahesaadikusuma/bwa-store-laravel",
    icons: [
       {
        id: 1,
        icon: "devicon:laravel",
        color: "bg-red-600",
        title: "Laravel",
        to: "/",
      },
      {
        id: 2,
        icon: "devicon:bootstrap",
        color: "bg-purple-600",
        title: "Bootstrap",
        to: "/",
      },
    ],
    galleries: [
      {
        id: 1,
        title: "gallery 1",
        src: "/images/bwa-store/thumbnail-bwa-store.png",
      },
      {
        id: 2,
        title: "gallery 2",
        src: "/images/bwa-store/thumbnail-bwa-store-auth.png",
      },
      {
        id: 3,
        title: "gallery 3",
        src: "/images/bwa-store/thumbnail-bwa-store-checkout.png",
      },
      {
        id: 4,
        title: "gallery 4",
        src: "/images/bwa-store/thumbnail-bwa-store-dashboard.png",
      },
      {
        id: 5,
        title: "gallery 5",
        src: "/images/bwa-store/thumbnail-bwa-store-dashboard-2.png",
      },
      {
        id: 6,
        title: "gallery 6",
        src: "/images/bwa-store/thumbnail-bwa-store-dashboard-3.png",
      },
      {
        id: 7,
        title: "gallery 7",
        src: "/images/bwa-store/thumbnail-bwa-store-dashboard-4.png",
      },
    ],
    features: [
      {
        id: 1,
        title: "Membangun sistem autentikasi pengguna yang aman dan terstruktur (Login, Register, dan Manajemen Profil) menggunakan Laravel Jetstream"
      },
      {
        id: 2,
        title: "Membangun katalog produk interaktif yang memungkinkan pengguna melihat detail furnitur, harga, dan ketersediaan stok"
      },
      {
        id: 3,
        title: "Mengimplementasikan fitur keranjang belanja (Shopping Cart) yang reaktif menggunakan Livewire tanpa perlu me-refresh halaman"
      },
      {
        id: 4,
        title: "Mengembangkan sistem manajemen produk (CRUD) pada halaman Admin untuk menambah, mengubah, dan menghapus data furnitur beserta gambarnya"
      },
      {
        id: 5,
        title: "Membuat alur checkout sederhana untuk mensimulasikan proses pemesanan barang oleh pelanggan"
      },
      {
        id: 6,
        title: "Mengintegrasikan Midtrans sebagai layanan Payment Gateway untuk menangani proses verifikasi dan pembayaran transaksi pelanggan secara otomatis dan aman"
      },
    ],
    techs: [
      {
        id: 1,
        title: "HTML, CSS, JavaScript: Fondasi utama untuk membangun antarmuka web yang interaktif dan responsif."
      },
      {
        id: 2,
        title: 'Laravel 7: Digunakan sebagai fondasi backend utama untuk mengelola logika bisnis, routing aplikasi, dan operasi database'
      },
      {
        id: 3,
        title: 'VueJS 2: Diimplementasikan di sisi frontend untuk membangun komponen antarmuka pengguna yang reaktif, dinamis, dan modern'
      },
      {
        id: 4,
        title: 'Bootstrap 4: Digunakan sebagai framework CSS untuk mempercepat proses desain UI yang responsif dan ramah perangkat seluler (mobile-friendly)'
      },
      {
        id: 5,
        title: 'Midtrans API: Diintegrasikan untuk simulasi pemrosesan pembayaran digital (Payment Gateway) secara real-time layaknya aplikasi e-commerce profesional'
      }
    ],
  },
  {
    // id: 5,
    title: "Travel Nomads",
    subTitle: "travel Nomads",
    slug: "travel-nomads",
    description:
      "Proyek ini adalah sebuah aplikasi web yang saya bangun untuk memantapkan fundamental sebagai seorang Full-Stack Web Developer. Berbeda dengan pendekatan pengembangan biasa, proyek ini mencakup seluruh siklus pembuatan website secara komprehensif (End-to-End), dimulai dari tahapan perancangan UI/UX Design hingga implementasi kode pada frontend dan backend.",
    icon: "",
    orientation: "vertical",
    images: "/images/nomads/thumbnail-bwa-nomads.png",
    to: "/projects/travel-nomads",
    demo: "",
    githubLink: "https://github.com/Mahesaadikusuma/Nomads",
    icons: [
      {
        id: 1,
        icon: "devicon:laravel",
        color: "bg-red-600",
        title: "Laravel",
        to: "/",
      },
      {
        id: 2,
        icon: "devicon:html5",
        color: "bg-orange-600",
        title: "HTML5",
        to: "/",
      },
      {
        id: 3,
        icon: "devicon:css3",
        color: "bg-blue-600",
        title: "CSS3",
        to: "/",
      },
      {
        id: 4,
        icon: "devicon:javascript",
        color: "bg-yellow-600",
        title: "JavaScript",
        to: "/",
      },
    ],
    galleries: [
      {
        id: 1,
        title: "",
        src: "/images/nomads/thumbnail-bwa-nomads.png"
      },
      {
        id: 2,
        title: "",
        src: "/images/nomads/thumbnail-bwa-nomads-2.png"
      },
    ],
    features: [
      {
        id: 1,
        title: 'Merancang alur pengalaman pengguna (UX) dan antarmuka (UI) yang intuitif sebelum memasuki tahap penulisan kode (Development)'
      },
      {
        id: 2,
        title: 'Mengembangkan tampilan frontend yang responsif, modern, dan ramah pengguna di berbagai perangkat menggunakan framework Bootstrap'
      },
      {
        id: 3,
        title: 'Membangun logika bisnis (business logic) dan arsitektur backend yang terstruktur dengan baik menggunakan arsitektur MVC pada Laravel'
      },
      {
        id: 4,
        title: 'Mengintegrasikan antarmuka visual dengan sistem backend secara mulus (seamless) untuk memastikan stabilitas fungsionalitas keseluruhan website'
      }
    ],
    techs: [
      {
        id: 1,
        title: 'Laravel 6: Digunakan sebagai framework PHP utama di sisi server (backend) untuk mengatur routing, keamanan, dan manipulasi database'
      },
      {
        id: 2,
        title: 'PHP (≥ 7.2): Menjadi bahasa pemrograman fondasi dalam menjalankan logika inti aplikasi dan operasi server-side'
      },
      {
        id: 3,
        title: 'Bootstrap: Framework CSS yang dimanfaatkan untuk mempercepat pembuatan komponen antarmuka (UI) yang responsif dan konsisten'
      },
      {
        id: 4,
        title: 'UI/UX Design Principles: Diimplementasikan secara aktif dalam proses perancangan untuk memastikan kemudahan dan kenyamanan pengguna saat berinteraksi dengan sistem'
      }
    ],
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