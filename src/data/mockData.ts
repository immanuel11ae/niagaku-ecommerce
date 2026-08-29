import { Product, Address, Order, TrackingInfo, NotificationItem, Conversation } from '../types';

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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIIaRTCg_4gVD1Lu4k32m_nd_n2JGCN0VzeGlB-igueajjq81pLuSg0C1sKHt1_LLigMSapZ3JBTT9K7HdeYuurWoIaWNiCS4R02bNuEunIOU-iY6mOmZLcrK4twKgzYRz4vou4yVKpntEU_sXdmC0PFaIz6O4VMZyjyCSZqk0CJYHTdeDXe029ahCT6Bvyg48NvEjEaCC9Wuy-JElOKah-4R3eiKDI7akh2c4xWl-E7JNCD78dyi0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD07BuKptMmEZ4kfYtAEEa0LVXnDqLniHMB2eYJCuShoJwaYYsTmVDpZbL8ShXDJa1_BwlXjXHJLqsSp2GVIvCDKllncEivE5ZZQhc46tk7p2cRSfCyQc3OOE64bMnMbfOS4ZxvP6QizVO3dcj2mRfhZvy8q_pENWFSkUL6sn6Luq8VS5ZmZtexK4NveMCYc88ZqQu-ovmzlYLqOYJfj1fzZ8zwtiLVavy4vP2zPFCNyZdaF9TwiVri',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1elQQyUYdwFCudM1rglwk5HG3MfgnD1Z3229fJhGCTAOi32Wgd8Q1_4DSOOEUfjGHftWn1ILkYK20ioX13dGnsvLXnV5yhQh9bYNkMpuYGXehxD6L3VOHotS-Vh3b63A3ugZ3TtSxS0fxnviw8LgO39_wlGVvwiYzr5xI6WzPQxXmriHslbImsKAl9OZyQ-s6ylWNrYKA4Fsx_5qxrC9k3tGz5OvT5G38xwaVUX29wkowPaPRkepP',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYS_8wbgeyf2POdIlRTLf_YgCW3n9vB37_x_plNbRKiaGJ-OJP6X4gz4LZfGb19ldMgF_TIsiI02WpT36yUBJEMue3lUTGn0iHq8oZ1TbmYL6IeKZSsbHn1EQuVW7JwPxw5uhRTQy4ulTOan-qQEqkTyLtRXjVus1NW8S8CNNUnTs-WLPCdGJ1y8YDk7Svaoi6lPfNo1hvSEse2yToFCYYu4zSIXS9dDdleP6-h4l2k2vDnXFIiA3h',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB0Sjr_M2y2azlVG9akzKkMu7ipJ_gXC8jeJp3Xnmjw-bZFuH3WJQPFolJZv5mkiivCadSLRUWbcJoKy7RHzNpasnT4mSrl_w2x96G9sAvFJuKQcEGPKmAwLzruxJvVULp7owhqiUzOc9nvF0nwmwfcQOOwdhFspelGHyhYLO8kIwYGOgzodYeeQuEwH6u2HVKh7fOkHuzZUJwO6LocuM6PqfDk7TE7R-AjsJXwxz88HnW6ZBhI2ZH3',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQkWHr6yIXXo5wFZpMbKRjqnYdzwMXfSa2HaJyKaW1PigU-_TkilgSGFmQWRbXEhV-vBQ4wR09ouKprBDqfYYq1HXUfsXvErNuxYgi2BI2aT3d4W1M0TJtLU0PEMYoBz_EIBNvocnYPS3HRepVmA1qeVItSw_ZpCu8JIwihK6fusEjZ-2EhYDxaD8O-bKKrkzlTlRL1ydixPCldP_OmjRuS9LgBYqQzhxvjNX7Q-QhCwqDoYJCpAhg',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdwxx8JkepbhUEKyhTBghUHjeeXLobJcGuKYlYu-kMQr7jboIq7nI8bciyXTC5XOKLw_9QGCUPSQenEvQB5-Ap85RTCVryzlDAyc3NoMTZArPtt3rXzDFsnmGg2Xuxq6Qm7M5TAC7nMrFW1LnIYRsq8GHJZo0t6BQnPjAoCiCaBG8RgZ8oAU2R137mp7gowUi9u219XNd19k5Iq_lCmdZ0koREvK9ibFaPmdeoev6AgOEdTACXwRfC',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDWWTX--mGvBZWSb0EqcaFktDFqajr8nvLDSWNWZg_kkqHKoqKBAPg7FZbYtyTewQq0YHPCwGOBi_kAMod9YPb2Z26mUzthafHmtBG6eJGQsL9rNh3JupPA8DoAL2JHArTlghB8pOrcdKcE0U-mCBh9m8Rnn1_xhyhe_DdlZq_GMQ2XYPtUkwWR1-TFpXvP_DrIDPNy6dN5YOsPK_6Q3Elkq4kzl9Tt9QFOoJ_cmNij3oQOJOPJVmJu',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJbajhby6aW5bU3-zHtIMMarzQMmYz5bqplOcM5WinextXe_Xsl-k0vciQO413gdu3iy0KImXBBKhOiW73d6qhm5y2DcWSlaYO842vp6i-5VL22mX-XA6RNHbkkCX06958SjIQTYbJhFduglyckK9EYyN8MiO6nU5jUjKERHmHzCEqTu8JKSflmr0Je6dFdIOD-TNa9pgG1xBzvSSQChyvcbqHDWH5EXXBy-PWhqHSfMTorW6XR8BG',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCiLNCDaROKEHaH8bktgtpbZ-iF2i9F0FwaasisDjNgAv_L_z1ZYRzM40E4dq87Bj623brO3TkCDDqDO-Boe9AMNbWT8D1YiBaxStcre9u-nmMDATmRPOD2WJSQNBUmREFPDNrGo3gA54_Wh-wRq2OB42VqPPpmsUodz_1nUz6V8cGQjTbB46Mf7dq2Deyt_1MG1M-e5Gom1W0EUgrWn8mZLZA94BJMz3LYDEZVd4fW5i_oWJ1_30hN',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCCTUHWNzMUzgry8PfLQDtSRil7xNgD86yMaJISQka6ODcs5KYz5bxiL0Qku6JNZGRmXjfj0Y8QUzC9Ziq8PrOE0aPuAwtkw83Mnmi8MksE5UhuMPFwx-JZNtmyK2w_N2Q5Q7YjwoyqQC9vK_7P91M-ZmEXPwtOuiT9NS-D4G2G4jBK2IRYFXs8cLaGk-0T2EQYvKVKHQbMSAvNsbq5zElofYIKd5l2pbG0Cm_HpPxdC4i8_AG5rloB',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuATXzd2EcjporUqE-JSaLhLQ7PJBdDdA-cOi4evlBN9yZt_JMc4OlxVhVeaJLsw3_-NZXcLVvxatagPffHHg_krt_lGlo0GF60U46bNz3jS6EQ_sM1Lr5YKwhDq7MHEOGejDDCTTunEwkY6165hI64yhPtmgXESswrqiq-4MthHo53jOpPmA4pfjV2fZ1Eu8qMTXAMLefXjG3XIVUOZvuGtx2tDXrhNG0PgmHWzXlrWY0EjnAbAB_S_',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUMcG6uTiqGbIZrcLr-G3fofJfcsFR1tbpvr-mRZdABt_uuoYlhzj-a7rRXG9dWI1WMZ2jpmsYmg2BkVE6zt3fZTmTd8AQ8OHQGSLLTQ-b37nEnNKLrVpLAezvUSYB-1P9ZuTeL46LLjycnKhoz0re7GOKtkIHds0BsWNFNGyW1k7Aplbtxj8k6De8v2Emd6fA7wAYT7zWvuGlmXbIzeLQOwJwXz99zBvzImX22WyDowMgpJTfiAAM',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCCQ_t3xF6oSYm5EzjkpCU-QBmIcgUOwOEOeId2o02sjjtvcLeiAxcqU0bSBd1SVnFOVtqWCGDspKv4RiYb0eEN285rgFfeP_D6UMlxIwXRk_XnZtEgDlReJ2KgY_5K5d5xIvYC6m947Y_ftxDMwpFCIhpUWgeCmAlcOph4i-c2b4miWwkGNdiGFbCpYgVSgmCwtTqwIOfY9NWdQ8JpVUvFtZ31asP_Iy08-EHEm7jw_xUQ9oPvML0n',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAzuGz4vrzgmyEY7nrUMxT4D4GscDsTt3I8zBqS1jOsW6g-BDpaDwC4fZjPky4sDUFA-T6VV8RC20-0HxeGdXOKeoGlkPT2-0xxBVX3NT7JU4K1JxOX9J46ckzdwGlref7qILqZEdwAFf0G7w0WOtzy4RTnD6TVYRVa1nXCMYQz6C55iTM4e7Vvz3-tcyN9SIMmPjacCmaFo_9_gzA3X9qVKYMTwEyuIAolA3GNy6NMi8qD18KlYTWg',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDv-DW0nJpq9tQPsjevjIyQjwh3tXLQoSZluS0RuApLzboCew5PQDt3kiPhuzkWnrBNpICKQ2wawJHlcFHBU5uwK7Vx0J1oB8nzRZaWjSHp4IK75NosaShU9dyXMjO4E1LQX3NiADia7KTiNmLU3hVT-tB5O_o1z8P1XVGeDb8kFnzlhcm4itVA78FGo1ziK5n1UG_xmcprwQumlHeT3UJwILWWuL5GbVsZSgDu8FlNEOpQjkcqE5x3',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8a1Fa8RSAxm-a8HIUPe2K1zvIRnoyYQTRc_hY5Xm8f5mID5Thy9bWLHfnPIA_DZqtKrfNVsaSyx-FtilX3P4wMTJFxcHk1kCC_kKQrCPIC-xMoZDfaMA3jXMLxILAwboE-SjiQyxDPIZVXKwlD3eNcFPQcQ5OiTTIxNJDqeUaNSrVGya2x6BwSwuE_SDD-NQdumaR3xaYzfWX1hQIEfQ6ruui4tWYiz9eNXnHwIa5CdqEVlXY-Vfx',
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
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBm8VdyqkaZg_DNQvyr_bQFGbGot5lXr8odZ9RcoMnsIbHWRkJ5qq4ycc8N_hIvi8ln0xfKx4fq_pggufJB3fpH4LSuo0H1HIHB77uCsI-yMDN0-TN9KHT7svr3bJAZe5Wv4kG4g6gLt3Dr0hwmkHLKWpvRhF6MMQoDZrH22U5SBSoDTsZ6M6CVbhy1BxG8bmSe9fHbiolu-UDv4b12dEsKLe2xEhMIR89_a9bajHbjM_XDVDpNbUxS',
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
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuDufJQfJnzKUzAPIKAZ1SmcVhFvuBfPbZEn-PooUNzIzxL-EZtvmDH6yx-nM2gST2S9WnCSV7h1I6_piZkTazypWJ1x_x5f6iXb15oedH2SktQcAqUEatoS4zhuOXay940aheZnB7quZ24nvq0K_z0shUjwS-fji7mocnE4run0SyRSeqrouwLOieC0FvnTTCI-gNUnWez0SuIrVdURvMmmLOeUvE7v778cXsK7rVPK8mriQHQi_pUz',
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
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAJbajhby6aW5bU3-zHtIMMarzQMmYz5bqplOcM5WinextXe_Xsl-k0vciQO413gdu3iy0KImXBBKhOiW73d6qhm5y2DcWSlaYO842vp6i-5VL22mX-XA6RNHbkkCX06958SjIQTYbJhFduglyckK9EYyN8MiO6nU5jUjKERHmHzCEqTu8JKSflmr0Je6dFdIOD-TNa9pgG1xBzvSSQChyvcbqHDWH5EXXBy-PWhqHSfMTorW6XR8BG',
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
  productImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDqjDPGuqyG8udIH4G8NJj1Hp1EucztO_GRDnOYbpvUIqYwVqg9eJ1Yis1xDeX1mo7K-v1f1mDGHaUAaQ34ttunppEnnn2FwI6VM0TDsweNt_tThBtiFM-JWE2sPKrTemGgbgZqgX1TcE3oZZBD4ObSepRwT3BK92X6iOJeZWJrxAafrRhuLcyocik1jA15jQDx_E_3uA7oCJaX-tO5THX-FItlNSn4OsZofel_aCku89BFYkjSEDkC',
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
    message: 'Smartwatch Pro Series 5 hampir habis. Segera selesaikan pembayaran Anda sebelum kehabisan stok.',
    time: 'Kemarin',
    type: 'cart',
    isRead: true,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBE9e7E831TGGUhjD7d4e4mdrZBYZj5d1p50EJ2hDNRoWA3lP4V-NjifHUNiUagml6v1uRq5oBHkfLPfc80mumU8l3mNF1gdA04H7XoyfaggtsRpHgwokh3dfvoWi-BEoa5yNXRUYkYN5cSUqMt97IvrDbrMJX385doNdyc7ewynQyVN2Xs-t5FG56bwa752Cj65pTYnxoa7bGj0Us0Pd1A_qzaD5zEI-_Gw5i1hTNz2QSihu5r3Vh7',
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
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBpy-SK9LFlOGpnQrrrdADf9IILlgWzXQR0HmBep00uZXyegKMhyBoEp7emOndPGxXclXF8U5bccW4W_04FUpLXXKh2V69dPggU_aJHu8SnVdH-GHHiPOOVWGhuQ00X2eYDfl2pQUuZb5ur9L1Qm6jwHZeDsxfE9Sx3AnAihRfwJHNF-VjYYAetDQDESby5SAzU_xlMZVPcwFFp-aa8LH4D07PY0gyPfWydHbY250MvPptG1rIJZ_Fj',
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
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDm1pBj5omPntye5q3F_dT-vqbCA6U0IjcmIp-LLnhHbm8BnICZBrR2AYq8Fgd-TevyT5QR4tbIKMQxWGM7GzMFrdbHbB_9TBittJ78-9uDQDPvmPdSQX7eVszrY7b4DTzwm53nXNvAdbjOOPbvs5syZ-yfDZfUQhHCwbYPLV5g4MrNKMq6D9WAXItqNKZb6tffqyBSojv_K1_KWESh1d5pfb8e49V3xUaQFbyQlWRHBz5sEGArXfSZ',
    price: 850000,
  },
  {
    id: 'seller-prod-2',
    name: 'Gelas Keramik Artisan',
    category: 'Home & Living',
    stock: 3,
    salesCount: 85,
    status: 'Stok Menipis',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCjUi3KGQSQiwxpicAgKlGL29aX17uIWz-Zkn-Yv6pHBXaoIJPUJZ1UWn7o4W1Kxj6sI_dhPBQ4-pojzcLc4slFHktZxK4BpEfAy5EqnX63pInMdZc9YFfuxPLpvGzVB-I_u55pLcRIS3f-ocwc2Ir-E1YA7Sn5fSnvFrFPwe6JjRUG9b0fLM9T65V_PodzhU1_e2AaEgvaCePQ_A-vHEHOTeFo_YVg_IeHyLsg3VGD1nS28YJiEQik',
    price: 75000,
  },
];
