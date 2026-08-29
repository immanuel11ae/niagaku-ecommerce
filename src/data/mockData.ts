import { Product, Address, Order, TrackingInfo, NotificationItem, Conversation } from '../types';

import cameraMirrorlessPro from '../assets/images/camera_mirrorless_pro_1787992344613.jpg';
import cameraBackDisplay from '../assets/images/camera_back_display_1787992361974.jpg';
import smartwatchAmoled from '../assets/images/smartwatch_amoled_1787992375056.jpg';
import wirelessHeadphones from '../assets/images/wireless_anc_headphones_1787992386534.jpg';
import kemejaNavy from '../assets/images/kemeja_navy_pria_1787992400356.jpg';
import sneakersPutih from '../assets/images/sneakers_putih_1787992413434.jpg';
import mugKeramik from '../assets/images/mug_keramik_artisan_1787992427038.jpg';
import keyboardMekanik from '../assets/images/keyboard_mekanik_rgb_1787992441882.jpg';
import ergonomicChair from '../assets/images/ergonomic_office_chair_1787992456852.jpg';
import pourOverCoffee from '../assets/images/pour_over_coffee_set_1787992469376.jpg';
import leatherDuffel from '../assets/images/leather_duffel_bag_1787992481810.jpg';
import bambooOrganizer from '../assets/images/bamboo_desk_organizer_1787992495049.jpg';
import brassGlobeLamp from '../assets/images/brass_globe_lamp_1787992511482.jpg';
import linenNapkins from '../assets/images/linen_napkins_set_1787992525352.jpg';
import blusSutra from '../assets/images/blus_sutra_beige_1787992536960.jpg';
import gelasKeramik from '../assets/images/gelas_keramik_artisan_1787992549798.jpg';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-smartwatch-2024',
    name: 'Smartwatch Pro 2024 - AMOLED Display & GPS Tracker',
    price: 1299000,
    originalPrice: 2199000,
    discountBadge: '-40%',
    category: 'Elektronik',
    rating: 4.9,
    reviewCount: 412,
    salesCount: 120,
    location: 'Jakarta Barat',
    images: [
      smartwatchAmoled,
    ],
    stock: 5,
    stockLeft: 5,
    isFlashSale: true,
    description:
      'Smartwatch Pro 2024 menghadirkan layar AMOLED Ultra HD 1.43 inch dengan ketahanan air 5ATM, pemantau detak jantung 24/7, SpO2, GPS presisi tinggi, dan baterai tahan hingga 14 hari.',
    specs: {
      'Tipe Layar': 'AMOLED 1.43 inch 466x466 px',
      'Konektivitas': 'Bluetooth 5.3 & GPS Terintegrasi',
      'Baterai': '450 mAh (hingga 14 hari pemakaian)',
      'Ketahanan Air': '5ATM (Tahan hingga kedalaman 50m)',
      'Sensor': 'Detak Jantung Optik, SpO2, Akselerometer, Kompas',
    },
    variants: ['Midnight Black', 'Space Grey', 'Ocean Blue'],
    storeName: 'TechBoutique Official',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_3NOOHcYSHheES8pBx5NSPFAORzU9s-zZr_SdRNbK7NqFSbUxo09GzI5zAb2zS7Zn9HN2DDKznhSryd9yLC-zLzrw_qvyPdkEuDgOcHrZLj4eG0OUAw3AiqfqEYpzuz3pfRZSM3Q4DxNistwAKloQM-uRSIeoXnbLRdXCXWX09LUH6F0H5bwOTKgDsAXQSlyL9xPxLD1oVow2A6mmQcUnZJxgQ_L6Thq1uPfyUDJv2SaD_03acP4H',
    storeRating: 4.9,
  },
  {
    id: 'prod-wireless-headphones',
    name: 'Wireless Headphones X-Series Noise Canceling',
    price: 899000,
    originalPrice: 1199000,
    discountBadge: '-25%',
    category: 'Elektronik',
    rating: 4.8,
    reviewCount: 320,
    salesCount: 120,
    location: 'Jakarta Selatan',
    images: [
      wirelessHeadphones,
    ],
    stock: 28,
    stockLeft: 28,
    isFlashSale: true,
    description:
      'Headphone nirkabel X-Series dengan teknologi Active Noise Canceling (ANC) mutakhir, driver 40mm berdaya akustik tinggi, dan bantalan telinga busa memori ultra-nyaman.',
    specs: {
      'Driver': '40mm Neodymium Hi-Res Dynamic',
      'ANC': 'Peredam Kebisingan Aktif Hibrida -35dB',
      'Baterai': 'Hingga 40 jam pemutaran (Fast Charging USB-C)',
      'Bobot': '245 gram',
    },
    variants: ['Matte Black', 'Warm Sand', 'Navy Blue'],
    storeName: 'Tech & Lifestyle Co.',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7VIoTzRgsA8hcIDyMIIZ6qQtHDiaHmlIZk8kK2zkDC9agEa-Qk06tbMgKvh9mEsWffwbzDtJ8s1W7Z_VAxohon79R7Ue20aoRFSn79QUd0E01klR55QTH78xjhsKYQZjj7w3UrKoLuk2ZZaaX8ePHsrjo_TBCSFCWEcvp6lYhkpAP-l5oULBVqvLrrQlFz9_Fj54BxfePWsgI8i1HakATmZwdiQTT37JYgClBqe4lsanCnRmK1YI3',
    storeRating: 4.8,
  },
  {
    id: 'prod-camera-mirrorless',
    name: 'Kamera Mirrorless Pro X-Series Terbaru',
    price: 15499000,
    originalPrice: 17000000,
    discountBadge: 'Hot Item',
    category: 'Elektronik',
    rating: 4.9,
    reviewCount: 184,
    salesCount: 65,
    location: 'Jakarta Pusat',
    images: [
      cameraMirrorlessPro,
      cameraBackDisplay,
    ],
    stock: 5,
    stockLeft: 5,
    description:
      'Hadirkan kualitas visual profesional dalam genggaman Anda. Kamera Mirrorless Pro X-Series dirancang untuk para kreator yang menuntut kesempurnaan dalam setiap jepretan. Dilengkapi sensor full-frame terbaru, sistem autofokus hybrid super cepat, dan kemampuan perekaman video 4K tanpa crop, menjadikannya andalan utama untuk proyek kreatif harian Anda.',
    specs: {
      'Sensor': '24.2 MP Full-Frame BSI CMOS',
      'Video': '4K 60p 10-bit 4:2:2 Internal Recording',
      'Autofokus': '693 Phase-Detection AF Points with Eye-AF',
      'Stabilisasi': '5-Axis In-Body Image Stabilization (IBIS)',
    },
    variants: ['Hitam Matte', 'Silver Classic'],
    storeName: 'TechBoutique Official',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_3NOOHcYSHheES8pBx5NSPFAORzU9s-zZr_SdRNbK7NqFSbUxo09GzI5zAb2zS7Zn9HN2DDKznhSryd9yLC-zLzrw_qvyPdkEuDgOcHrZLj4eG0OUAw3AiqfqEYpzuz3pfRZSM3Q4DxNistwAKloQM-uRSIeoXnbLRdXCXWX09LUH6F0H5bwOTKgDsAXQSlyL9xPxLD1oVow2A6mmQcUnZJxgQ_L6Thq1uPfyUDJv2SaD_03acP4H',
    storeRating: 4.9,
  },
  {
    id: 'prod-kemeja-navy',
    name: 'Kemeja Casual Pria Lengan Panjang Premium Navy',
    price: 150000,
    originalPrice: 187500,
    discountBadge: '20% OFF',
    category: 'Fashion',
    rating: 4.8,
    reviewCount: 120,
    salesCount: 120,
    location: 'Jakarta Selatan',
    images: [
      kemejaNavy,
    ],
    stock: 45,
    description:
      'Kemeja casual pria lengan panjang dari katun poplin premium 100% yang lembut, adem, dan rapi sepanjang hari. Jahitan presisi berkualitas tailoring boutique.',
    specs: {
      'Bahan': '100% Katun Poplin Premium',
      'Fitting': 'Slim-Fit Modern',
      'Kancing': 'Resin Tahan Panas Kualitas Ekspor',
    },
    variants: ['Navy Blue', 'Charcoal Grey', 'Soft Sand'],
    storeName: 'Toko Baju Elegan',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAmjfRqq-qrUjMMd55VaLWQKq538pVNNGObufF_VDU_XJZHFdzGYE-HrjuxJPDt9f-jHorB7WWlwzhZoG1tM2ZjSY4SSEaF3oi6J-DuZJdmdyN0LvzChGN3mfLCrWksDMzRQgWF7siJmtSo8z02LejS1CBjqM7Cao-eyejJO_kHrhyAQsNkbLpZ7NOJCdz3xH_So_30No0V7IBAUtauuHkV0KAHd4L_K3PO8CTIlv7uqPirptajmXvH',
    storeRating: 4.8,
  },
  {
    id: 'prod-sneakers-putih',
    name: 'Sepatu Sneakers Putih Casual Pria Original',
    price: 299000,
    originalPrice: 399000,
    discountBadge: 'Gratis Ongkir',
    category: 'Fashion',
    rating: 4.9,
    reviewCount: 89,
    salesCount: 45,
    location: 'Bandung',
    images: [
      sneakersPutih,
    ],
    stock: 30,
    description:
      'Sepatu sneakers kulit putih minimalis dengan insole berteknologi OrthoComfort yang empuk untuk melangkah seharian tanpa lelah. Desain versatile serasi untuk gaya kasual maupun formal santai.',
    specs: {
      'Material Upper': 'Kulit Sintetis Premium Vegan Leather',
      'Outsole': 'Karet Anti-Slip Thermoplastic Rubber (TPR)',
      'Insole': 'Memory Foam Breathable',
    },
    variants: ['Putih Bersih (Ukuran 40)', 'Putih Bersih (Ukuran 41)', 'Putih Bersih (Ukuran 42)', 'Putih Bersih (Ukuran 43)'],
    storeName: 'Sepatu Super',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdwxx8JkepbhUEKyhTBghUHjeeXLobJcGuKYlYu-kMQr7jboIq7nI8bciyXTC5XOKLw_9QGCUPSQenEvQB5-Ap85RTCVryzlDAyc3NoMTZArPtt3rXzDFsnmGg2Xuxq6Qm7M5TAC7nMrFW1LnIYRsq8GHJZo0t6BQnPjAoCiCaBG8RgZ8oAU2R137mp7gowUi9u219XNd19k5Iq_lCmdZ0koREvK9ibFaPmdeoev6AgOEdTACXwRfC',
    storeRating: 4.9,
  },
  {
    id: 'prod-mug-keramik',
    name: 'Mug Keramik Artisan Minimalis',
    price: 45000,
    originalPrice: 65000,
    category: 'Rumah',
    rating: 4.9,
    reviewCount: 215,
    salesCount: 520,
    location: 'Yogyakarta',
    images: [
      mugKeramik,
    ],
    stock: 50,
    description:
      'Mug keramik buatan tangan dengan glaze earthy matte alami. Memberikan sensasi minum kopi dan teh yang lebih hangat dan tenang di rumah.',
    specs: {
      'Kapasitas': '350 ml',
      'Material': 'Keramik Stoneware Tahan Panas Microwave',
      'Finishing': 'Matte Artisan Glaze',
    },
    variants: ['Krem Hangat', 'Charcoal Black', 'Terracotta'],
    storeName: 'Boutique Artisan',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJbajhby6aW5bU3-zHtIMMarzQMmYz5bqplOcM5WinextXe_Xsl-k0vciQO413gdu3iy0KImXBBKhOiW73d6qhm5y2DcWSlaYO842vp6i-5VL22mX-XA6RNHbkkCX06958SjIQTYbJhFduglyckK9EYyN8MiO6nU5jUjKERHmHzCEqTu8JKSflmr0Je6dFdIOD-TNa9pgG1xBzvSSQChyvcbqHDWH5EXXBy-PWhqHSfMTorW6XR8BG',
    storeRating: 4.9,
  },
  {
    id: 'prod-keyboard-mekanik',
    name: 'Keyboard Mekanik K8 Pro Wireless Custom',
    price: 750000,
    originalPrice: 950000,
    category: 'Elektronik',
    rating: 4.9,
    reviewCount: 165,
    salesCount: 240,
    location: 'Jakarta Barat',
    images: [
      keyboardMekanik,
    ],
    stock: 18,
    description:
      'Keyboard mekanik wireless dengan layout 75%, hotswappable switch, peredam suara multi-layer poron foam, dan koneksi triple mode (Bluetooth 5.1 / 2.4Ghz / Type-C).',
    specs: {
      'Layout': '75% Compact (84 Keys)',
      'Switch': 'Gateron G Pro Brown / Red',
      'Koneksi': 'Bluetooth 5.1, Wireless 2.4G, USB Type-C',
      'Baterai': '4000 mAh rechargeable',
    },
    variants: ['Brown Switch, RGB', 'Red Switch, White LED', 'Blue Switch, RGB'],
    storeName: 'Tech Haven Store',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBm8VdyqkaZg_DNQvyr_bQFGbGot5lXr8odZ9RcoMnsIbHWRkJ5qq4ycc8N_hIvi8ln0xfKx4fq_pggufJB3fpH4LSuo0H1HIHB77uCsI-yMDN0-TN9KHT7svr3bJAZe5Wv4kG4g6gLt3Dr0hwmkHLKWpvRhF6MMQoDZrH22U5SBSoDTsZ6M6CVbhy1BxG8bmSe9fHbiolu-UDv4b12dEsKLe2xEhMIR89_a9bajHbjM_XDVDpNbUxS',
    storeRating: 4.9,
  },
  {
    id: 'prod-ergonomic-chair',
    name: 'Ergonomic Office Chair Mesh High-Back',
    price: 2500000,
    originalPrice: 3200000,
    category: 'Rumah',
    rating: 4.8,
    reviewCount: 95,
    salesCount: 78,
    location: 'Tangerang',
    images: [
      ergonomicChair,
    ],
    stock: 12,
    description:
      'Kursi kerja ergonomis dengan penopang tulang belakang dinamis, jaring breathable premium dari Jerman, 3D adjustable armrest, dan mekanisme recline hingga 135 derajat.',
    specs: {
      'Material': 'Breathable Mesh & Aluminium Base',
      'Maksimum Beban': '150 kg',
      'Garansi Mekanisme': '3 Tahun',
    },
    variants: ['Dark Grey', 'Cool Black'],
    storeName: 'Furnitur Impian',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMg37eH03ZZ4wYWXZxMY6ODhuhqu8oLvH09N8wnFlN5dcsGqtet8JgXVX9WYicyH4UUlyhVYWAkriOQTlabHhWxyNgCbHc4r_tszfXbgoqujT5pB4eN_RclwHtqEIMvaMmJiJqbxay5lkP7Xe4alKBUHwq2Lyg3Y4eFTPWLcB7HPjpbe904HVpR325Ler98ls9HCuchl1lFj5_sFC8xbZAHZLGtpVVnr65vguMgDI_YD3LtrOgpprk',
    storeRating: 4.8,
  },
  {
    id: 'prod-coffee-set',
    name: 'Ceramic Pour-Over Coffee Set',
    price: 450000,
    originalPrice: 550000,
    category: 'Kuliner',
    rating: 5.0,
    reviewCount: 48,
    salesCount: 110,
    location: 'Jakarta Barat',
    images: [
      pourOverCoffee,
    ],
    stock: 22,
    description:
      'Satu set alat seduh kopi manual pour over terbuat dari keramik stoneware artisan lengkap dengan server kaca borosilikat tahan panas 500ml dan tatakan kayu walnut.',
    specs: {
      'Kelengkapan': 'Dripper Keramik V60, Server Kaca 500ml, Tatakan Kayu, Sendok Takar',
      'Material': 'Stoneware Ceramic & Heat-Resistant Borosilicate Glass',
    },
    variants: ['Krem Natural', 'Matte Charcoal'],
    storeName: 'Boutique Artisan',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJbajhby6aW5bU3-zHtIMMarzQMmYz5bqplOcM5WinextXe_Xsl-k0vciQO413gdu3iy0KImXBBKhOiW73d6qhm5y2DcWSlaYO842vp6i-5VL22mX-XA6RNHbkkCX06958SjIQTYbJhFduglyckK9EYyN8MiO6nU5jUjKERHmHzCEqTu8JKSflmr0Je6dFdIOD-TNa9pgG1xBzvSSQChyvcbqHDWH5EXXBy-PWhqHSfMTorW6XR8BG',
    storeRating: 4.9,
  },
  {
    id: 'prod-leather-duffel',
    name: 'Classic Leather Weekend Duffel Bag',
    price: 3200000,
    originalPrice: 3800000,
    category: 'Fashion',
    rating: 4.9,
    reviewCount: 76,
    salesCount: 52,
    location: 'Surabaya',
    images: [
      leatherDuffel,
    ],
    stock: 9,
    description:
      'Tas jinjing akhir pekan berbahan kulit sapi asli full-grain premium dengan pengerjaan tangan halus. Tahan lama, luas untuk pakaian 3-4 hari perjalanan dengan kompartemen sepatu khusus.',
    specs: {
      'Material': '100% Genuine Full-Grain Pull-Up Leather',
      'Dimensi': '52 x 28 x 26 cm',
      'Hardware': 'Solid Antique Brass Zippers & Hooks',
    },
    variants: ['Cognac Tan', 'Vintage Brown', 'Ebony Black'],
    storeName: 'Gaya Hidup Premium',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWCEA50K6quLMdF1urUJIaxYxSkVxYl4tCeZFHvlOybRmI2lktE_P7NNpajc1gGz8pzajjQWwHmt67L52GTKHdkZRcRu3IPazHWam6Sx5R3Po6K7cz7xGyEcrFlAPyB0TBaOfzaXYmCuQsmwIEtxj1m0tG9rq7gEeNhaUJ-ourofmSJgwk_jg0rWLTr0mAyxxomQP48K_dNuLHkOZ-72T_zWMOcmpHO5xcheRCHHduf4pdkgwAawrh',
    storeRating: 4.9,
  },
  {
    id: 'prod-desk-organizer',
    name: 'Organizer Meja Kerja Bambu Modern',
    price: 189000,
    originalPrice: 225000,
    category: 'Rumah',
    rating: 4.8,
    reviewCount: 85,
    salesCount: 85,
    location: 'Jakarta Utara',
    images: [
      bambooOrganizer,
    ],
    stock: 40,
    description:
      'Organizer meja serbaguna kombinasi metal jaring matte hitam dan kayu bambu natural. Menjaga perlengkapan kantor, pulpen, dan gadget Anda tetap rapi.',
    specs: {
      'Material': 'Bambu Alami & Besi Metal Coated',
      'Dimensi': '24 x 14 x 11 cm',
    },
    variants: ['Bambu + Matte Black'],
    storeName: 'Gaya Hidup Premium',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWCEA50K6quLMdF1urUJIaxYxSkVxYl4tCeZFHvlOybRmI2lktE_P7NNpajc1gGz8pzajjQWwHmt67L52GTKHdkZRcRu3IPazHWam6Sx5R3Po6K7cz7xGyEcrFlAPyB0TBaOfzaXYmCuQsmwIEtxj1m0tG9rq7gEeNhaUJ-ourofmSJgwk_jg0rWLTr0mAyxxomQP48K_dNuLHkOZ-72T_zWMOcmpHO5xcheRCHHduf4pdkgwAawrh',
    storeRating: 4.9,
  },
  {
    id: 'prod-table-lamp',
    name: 'Lampu Meja Kuningan Kaca Frosted',
    price: 345000,
    originalPrice: 420000,
    category: 'Rumah',
    rating: 5.0,
    reviewCount: 32,
    salesCount: 45,
    location: 'Jakarta Barat',
    images: [
      brassGlobeLamp,
    ],
    stock: 15,
    description:
      'Lampu meja aksen modern dengan tiang kuningan brushed gold dan kap bola kaca frosted yang memancarkan cahaya hangat menenangkan.',
    specs: {
      'Fitting': 'E27 Warm Light LED Included',
      'Material': 'Brushed Brass Metal & Frosted Glass Globe',
      'Tinggi': '38 cm',
    },
    variants: ['Brushed Brass + Frosted Globe'],
    storeName: 'Gaya Hidup Premium',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWCEA50K6quLMdF1urUJIaxYxSkVxYl4tCeZFHvlOybRmI2lktE_P7NNpajc1gGz8pzajjQWwHmt67L52GTKHdkZRcRu3IPazHWam6Sx5R3Po6K7cz7xGyEcrFlAPyB0TBaOfzaXYmCuQsmwIEtxj1m0tG9rq7gEeNhaUJ-ourofmSJgwk_jg0rWLTr0mAyxxomQP48K_dNuLHkOZ-72T_zWMOcmpHO5xcheRCHHduf4pdkgwAawrh',
    storeRating: 4.9,
  },
  {
    id: 'prod-linen-napkins',
    name: 'Serbet Linen Premium Set 4 Warna Earth',
    price: 89000,
    originalPrice: 99000,
    discountBadge: 'Diskon 10%',
    category: 'Rumah',
    rating: 4.7,
    reviewCount: 210,
    salesCount: 340,
    location: 'Bali',
    images: [
      linenNapkins,
    ],
    stock: 60,
    description:
      'Set 4 helai serbet meja makan dari 100% linen alami washed halus bernuansa earth tones. Menghadirkan suasana makan ala bistro Skandinavia.',
    specs: {
      'Isi': '4 Pcs (Sage Green, Sand, Taupe, Terracotta)',
      'Ukuran': '45 x 45 cm',
      'Material': '100% Washed European Flax Linen',
    },
    variants: ['Earth Tone Mix (4 Pcs)'],
    storeName: 'Gaya Hidup Premium',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWCEA50K6quLMdF1urUJIaxYxSkVxYl4tCeZFHvlOybRmI2lktE_P7NNpajc1gGz8pzajjQWwHmt67L52GTKHdkZRcRu3IPazHWam6Sx5R3Po6K7cz7xGyEcrFlAPyB0TBaOfzaXYmCuQsmwIEtxj1m0tG9rq7gEeNhaUJ-ourofmSJgwk_jg0rWLTr0mAyxxomQP48K_dNuLHkOZ-72T_zWMOcmpHO5xcheRCHHduf4pdkgwAawrh',
    storeRating: 4.9,
  },
];

export const INITIAL_ADDRESSES: Address[] = [
  {
    id: 'addr-1',
    label: 'Rumah',
    isPrimary: true,
    recipientName: 'Budi Santoso',
    phone: '081234567890',
    fullAddress: 'Jl. Jend. Sudirman No. 123, Komplek Permata Hijau Blok C4, RT 01/RW 02, Kel. Senayan, Kec. Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12240',
    landmark: 'Depan minimarket biru, pagar hitam',
  },
  {
    id: 'addr-2',
    label: 'Kantor',
    isPrimary: false,
    recipientName: 'Budi Santoso',
    phone: '081234567890',
    fullAddress: 'Gedung Niagaku Tower, Lantai 10, Jl. M.H. Thamrin No. 9, Jakarta Pusat, DKI Jakarta 10350',
    landmark: 'Resepsionis lobby utama lantai dasar',
  },
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord-1',
    orderNumber: 'ORD-9823471',
    storeName: 'Tech Haven Store',
    status: 'Dikirim',
    items: [
      {
        name: 'Mechanical Keyboard K8 Pro Wireless Custom',
        variant: 'Brown Switch, RGB',
        price: 1450000,
        quantity: 1,
        image: keyboardMekanik,
      },
    ],
    totalPrice: 1450000,
    shippingMethod: 'JNE Reguler',
    shippingCost: 25000,
    date: '24 Mei 2026',
    trackingNumber: 'JNE12345678',
  },
  {
    id: 'ord-2',
    orderNumber: 'ORD-9823485',
    storeName: 'Audioophile ID',
    status: 'Dikirim',
    items: [
      {
        name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
        variant: 'Black',
        price: 4299000,
        quantity: 1,
        image: wirelessHeadphones,
      },
    ],
    totalPrice: 4299000,
    shippingMethod: 'SiCepat Best',
    shippingCost: 35000,
    date: '23 Mei 2026',
    trackingNumber: 'SCP88294101',
  },
  {
    id: 'ord-3',
    orderNumber: 'ORD-9823420',
    storeName: 'Boutique Artisan',
    status: 'Selesai',
    items: [
      {
        name: 'Mug Keramik Minimalis Warm Cream',
        variant: 'Krem Hangat',
        price: 125000,
        quantity: 2,
        image: mugKeramik,
      },
    ],
    totalPrice: 250000,
    shippingMethod: 'JNE Reguler',
    shippingCost: 20000,
    date: '18 Mei 2026',
  },
];

export const INITIAL_TRACKING: TrackingInfo = {
  trackingNumber: 'JNE12345678',
  courier: 'JNE Reguler',
  productName: 'Smartwatch Alpha Pro - Midnight Black',
  productImage: smartwatchAmoled,
  itemCount: 1,
  estimatedArrival: '25 Mei',
  steps: [
    {
      title: 'Paket sedang dikirim oleh kurir',
      description: 'Kurir (Budi Santoso) sedang dalam perjalanan menuju alamat tujuan.',
      time: 'Hari ini, 09:30 WIB',
      completed: true,
      active: true,
      icon: 'local_shipping',
    },
    {
      title: 'Paket tiba di Jakarta (Hub Transit)',
      description: 'Paket telah disortir dan siap untuk proses pengiriman selanjutnya.',
      time: 'Kemarin, 22:15 WIB',
      completed: true,
      icon: 'location_on',
    },
    {
      title: 'Paket diberangkatkan dari Surabaya',
      description: 'Paket dalam perjalanan transit antar kota via jalur darat ekspres.',
      time: 'Kemarin, 14:00 WIB',
      completed: true,
      icon: 'flight_takeoff',
    },
    {
      title: 'Pesanan diproses oleh penjual',
      description: 'Penjual telah mengemas pesanan Anda dengan bubble wrap tebal dan menyerahkan ke kurir.',
      time: '23 Mei, 10:00 WIB',
      completed: true,
      icon: 'inventory_2',
    },
  ],
};

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Diskon Kilat 50% Khusus Hari Ini!',
    message: 'Jangan lewatkan kesempatan emas ini. Gunakan kode promo NIAGAKU50 saat checkout untuk mendapatkan diskon hingga Rp 50.000 untuk semua produk pilihan.',
    time: 'Baru saja',
    type: 'promo',
    isRead: false,
    promoCode: 'NIAGAKU50',
    dateGroup: 'Hari Ini',
  },
  {
    id: 'notif-2',
    title: 'Pesanan Anda Sedang Dikirim',
    message: 'Pesanan #ORD-9823471 sedang dalam perjalanan menuju alamat Anda oleh kurir partner kami. Lacak pengiriman sekarang.',
    time: '2 jam lalu',
    type: 'order',
    isRead: false,
    actionText: 'Lacak Pesanan',
    actionScreen: 'tracking',
    dateGroup: 'Hari Ini',
  },
  {
    id: 'notif-3',
    title: 'Pesan Baru dari Toko Kopi Sejahtera',
    message: '"Halo kak, untuk biji kopi robusta ready ya..."',
    time: '14:30',
    type: 'chat',
    isRead: true,
    actionScreen: 'chat',
    dateGroup: 'Kemarin',
  },
  {
    id: 'notif-4',
    title: 'Ada barang yang tertinggal di keranjang!',
    message: 'Smartwatch Pro 2024 hampir habis. Segera selesaikan pembayaran Anda sebelum kehabisan stok.',
    time: 'Kemarin',
    type: 'cart',
    isRead: true,
    image: smartwatchAmoled,
    actionScreen: 'cart',
    dateGroup: 'Kemarin',
  },
  {
    id: 'notif-5',
    title: 'Pembaruan Sistem Berhasil',
    message: 'Aplikasi Niagaku Anda telah diperbarui ke versi terbaru. Nikmati performa yang lebih cepat dan fitur-fitur baru.',
    time: '2 Hari Lalu',
    type: 'system',
    isRead: true,
    dateGroup: '2 Hari Lalu',
  },
];

export const INITIAL_CONVERSATIONS: Conversation[] = [
  {
    id: 'conv-1',
    storeName: 'Toko Baju Elegan',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAmjfRqq-qrUjMMd55VaLWQKq538pVNNGObufF_VDU_XJZHFdzGYE-HrjuxJPDt9f-jHorB7WWlwzhZoG1tM2ZjSY4SSEaF3oi6J-DuZJdmdyN0LvzChGN3mfLCrWksDMzRQgWF7siJmtSo8z02LejS1CBjqM7Cao-eyejJO_kHrhyAQsNkbLpZ7NOJCdz3xH_So_30No0V7IBAUtauuHkV0KAHd4L_K3PO8CTIlv7uqPirptajmXvH',
    isOnline: true,
    lastMessage: 'Baik kak, pesanan akan segera kami proses hari ini juga ya.',
    lastTime: '10:32',
    unreadCount: 0,
    messages: [
      {
        id: 'm-1',
        sender: 'user',
        text: 'Halo min, untuk blus ini yang ukuran M warna beige apakah masih ready?',
        time: '10:28',
        productAttachment: {
          name: 'Blus Sutra Elegan - Beige',
          price: 250000,
          image: blusSutra,
        },
      },
      {
        id: 'm-2',
        sender: 'store',
        text: 'Halo kak! Terima kasih sudah menghubungi Toko Baju Elegan.',
        time: '10:29',
      },
      {
        id: 'm-3',
        sender: 'store',
        text: 'Untuk ukuran M warna beige saat ini masih ready ya kak. Silahkan langsung dipesan sebelum kehabisan :)',
        time: '10:30',
      },
      {
        id: 'm-4',
        sender: 'user',
        text: 'Oke mantap, saya order sekarang ya min. Tolong diproses hari ini.',
        time: '10:31',
      },
      {
        id: 'm-5',
        sender: 'store',
        text: 'Baik kak, pesanan akan segera kami proses hari ini juga ya.',
        time: '10:32',
      },
    ],
  },
  {
    id: 'conv-2',
    storeName: 'Gadget Plus ID',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7VIoTzRgsA8hcIDyMIIZ6qQtHDiaHmlIZk8kK2zkDC9agEa-Qk06tbMgKvh9mEsWffwbzDtJ8s1W7Z_VAxohon79R7Ue20aoRFSn79QUd0E01klR55QTH78xjhsKYQZjj7w3UrKoLuk2ZZaaX8ePHsrjo_TBCSFCWEcvp6lYhkpAP-l5oULBVqvLrrQlFz9_Fj54BxfePWsgI8i1HakATmZwdiQTT37JYgClBqe4lsanCnRmK1YI3',
    isOnline: false,
    lastMessage: 'Apakah stok iPhone 15 Pro Max warna Titanium masih ada?',
    lastTime: 'Kemarin',
    unreadCount: 2,
    messages: [
      {
        id: 'm-201',
        sender: 'user',
        text: 'Halo admin Gadget Plus ID, ready warna apa saja?',
        time: 'Kemarin, 16:10',
      },
      {
        id: 'm-202',
        sender: 'store',
        text: 'Apakah stok iPhone 15 Pro Max warna Titanium masih ada?',
        time: 'Kemarin, 16:15',
      },
    ],
  },
  {
    id: 'conv-3',
    storeName: 'Furnitur Impian',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMg37eH03ZZ4wYWXZxMY6ODhuhqu8oLvH09N8wnFlN5dcsGqtet8JgXVX9WYicyH4UUlyhVYWAkriOQTlabHhWxyNgCbHc4r_tszfXbgoqujT5pB4eN_RclwHtqEIMvaMmJiJqbxay5lkP7Xe4alKBUHwq2Lyg3Y4eFTPWLcB7HPjpbe904HVpR325Ler98ls9HCuchl1lFj5_sFC8xbZAHZLGtpVVnr65vguMgDI_YD3LtrOgpprk',
    isOnline: true,
    lastMessage: 'Terima kasih atas orderannya kak!',
    lastTime: 'Senin',
    messages: [
      {
        id: 'm-301',
        sender: 'user',
        text: 'Kursi ergonomis sudah sampai dengan selamat ya.',
        time: 'Senin, 11:00',
      },
      {
        id: 'm-302',
        sender: 'store',
        text: 'Terima kasih atas orderannya kak! Senang bisa membantu.',
        time: 'Senin, 11:05',
      },
    ],
  },
  {
    id: 'conv-4',
    storeName: 'Sepatu Super',
    storeAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdwxx8JkepbhUEKyhTBghUHjeeXLobJcGuKYlYu-kMQr7jboIq7nI8bciyXTC5XOKLw_9QGCUPSQenEvQB5-Ap85RTCVryzlDAyc3NoMTZArPtt3rXzDFsnmGg2Xuxq6Qm7M5TAC7nMrFW1LnIYRsq8GHJZo0t6BQnPjAoCiCaBG8RgZ8oAU2R137mp7gowUi9u219XNd19k5Iq_lCmdZ0koREvK9ibFaPmdeoev6AgOEdTACXwRfC',
    isOnline: false,
    lastMessage: 'Ukurannya 42 ready ya kak.',
    lastTime: '20 Mar',
    messages: [
      {
        id: 'm-401',
        sender: 'user',
        text: 'Sneakers putihnya ukuran 42 ada?',
        time: '20 Mar, 09:12',
      },
      {
        id: 'm-402',
        sender: 'store',
        text: 'Ukurannya 42 ready ya kak. Siap kirim hari ini.',
        time: '20 Mar, 09:15',
      },
    ],
  },
];

export const INITIAL_SELLER_PRODUCTS = [
  {
    id: 'seller-prod-1',
    name: 'Keyboard Mekanik Premium',
    category: 'Elektronik',
    stock: 45,
    salesCount: 120,
    status: 'Aktif',
    image: keyboardMekanik,
    price: 850000,
  },
  {
    id: 'seller-prod-2',
    name: 'Gelas Keramik Artisan',
    category: 'Home & Living',
    stock: 3,
    salesCount: 85,
    status: 'Stok Menipis',
    image: gelasKeramik,
    price: 75000,
  },
];
