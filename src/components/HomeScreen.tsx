import React, { useState, useEffect } from 'react';
import { Product, ScreenType } from '../types';

interface HomeScreenProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onNavigate: (screen: ScreenType) => void;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  products,
  onSelectProduct,
  onNavigate,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) => {
  // Flash sale countdown timer state (hours, minutes, seconds)
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 15, seconds: 45 });
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);

  // Ticking countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (num: number) => String(num).padStart(2, '0');

  const bannerImages = [
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGoxyCK_8c83g6qmVwgxB2kLogevn-qjDW4pcES7tbVC3WtTnkwjSOp41J_JkMQz2ADz3bYUFGcNf-htzUn8zzPij-dmZatjXVj7CK2Z08x9ddlqMgTUgAVdvMs2ADJWPYFbhS6G8Iqghkw3HnSJuPH974ZsKBvk6pVIqV0AhEBvBT6YC8CDygSM67LtX9ikdIqWXiArwgouadcFMrxVQ4KfpX_1Vdza2ahc1t2ywBaWHiCCJGtuzH',
      title: 'MEGA DEALS FESTIVAL',
      subtitle: 'UP TO 60% OFF',
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOnT5KWXJTG5WFRJE93l91HS5pI68_iBSaFtfdNLIT5VbMop79oWV4YkRXPt0Og3di2sX-nKm3epzB2aIYjFYNpC_YjZuqF_1epaD39V68wPBD7_SoX_bxBYfUYlF1DVtnc6QqdNxsfZkNbGfU40Lmxd0UvyZBQcgqOwmXKxx3ohoaKcLgpie9dCAms8SueJKgkSQfynHQ75jXveWt8iAIikdi4yILZ81f5N0-nE0Ihbk369eWjiTn',
      title: 'KOLEKSI GAYA HIDUP',
      subtitle: 'PRODUK PILIHAN TERBAIK',
    },
  ];

  const categories = [
    { name: 'Elektronik', icon: 'devices' },
    { name: 'Fashion', icon: 'checkroom' },
    { name: 'Rumah', icon: 'chair' },
    { name: 'Kuliner', icon: 'restaurant' },
    { name: 'Gaming', icon: 'sports_esports' },
    { name: 'Buku', icon: 'menu_book' },
  ];

  const flashSaleProducts = products.filter((p) => p.isFlashSale);
  const regularProducts = products.filter((p) => !p.isFlashSale);

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#1b1c1c] pb-24 md:pb-12 pt-16 md:pt-20">
      {/* Mobile Sticky Search Bar */}
      <div className="md:hidden sticky top-16 z-40 bg-[#f8f5f0]/95 backdrop-blur-md px-4 py-2 shadow-xs border-b border-[#e4e2e1]/50">
        <div className="relative w-full shadow-level-1">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#75777f]">
            search
          </span>
          <input
            id="mobile-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari di Niagaku..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#e4e2e1] bg-white focus:border-[#1b2a4a] focus:ring-1 focus:ring-[#1b2a4a] font-worksans text-sm outline-none shadow-sm transition-all"
          />
        </div>
      </div>

      <main className="max-w-[1280px] mx-auto px-4 md:px-6">
        {/* Promo Banner Carousel */}
        <section className="mt-3 md:mt-6">
          <div className="relative w-full h-44 sm:h-64 md:h-[380px] rounded-2xl overflow-hidden shadow-level-1 group bg-[#041534]">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-102 cursor-pointer"
              style={{ backgroundImage: `url('${bannerImages[activeBannerIndex].url}')` }}
              onClick={() => onNavigate('category')}
            />

            {/* Carousel Navigation Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/20 backdrop-blur-xs px-2.5 py-1 rounded-full">
              {bannerImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveBannerIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeBannerIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/50'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Row */}
        <section className="mt-6 md:mt-8">
          <div className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-8 pb-2 snap-x">
            {categories.map((cat) => (
              <button
                key={cat.name}
                id={`cat-btn-${cat.name.toLowerCase()}`}
                onClick={() => onSelectCategory(cat.name)}
                className="flex flex-col items-center gap-2 min-w-[72px] snap-start group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-level-1 flex items-center justify-center text-[#1b2a4a] group-hover:bg-[#1b2a4a] group-hover:text-white transition-all duration-300 group-hover:scale-105 border border-[#e4e2e1]/40">
                  <span className="material-symbols-outlined text-[26px]">{cat.icon}</span>
                </div>
                <span className="font-worksans text-xs md:text-sm font-medium text-[#45464e] group-hover:text-[#1b2a4a] transition-colors">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Flash Sale Section */}
        <section className="mt-8 md:mt-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h2 className="font-manrope text-xl md:text-2xl font-bold text-[#1b2a4a]">Flash Sale</h2>
              <div className="flex gap-1.5 items-center bg-[#FF6B4A] text-white px-2.5 py-1 rounded-lg text-xs md:text-sm font-semibold shadow-xs">
                <span className="material-symbols-outlined text-sm md:text-base">timer</span>
                <span>
                  {formatTimer(timeLeft.hours)}:{formatTimer(timeLeft.minutes)}:
                  {formatTimer(timeLeft.seconds)}
                </span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('category')}
              className="text-sm md:text-base font-semibold text-[#1b2a4a] hover:text-[#FF6B4A] transition-colors cursor-pointer"
            >
              Lihat Semua
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {flashSaleProducts.map((product) => (
              <div
                key={product.id}
                id={`flash-card-${product.id}`}
                onClick={() => onSelectProduct(product)}
                className="bg-white rounded-xl overflow-hidden shadow-level-1 hover:shadow-level-2 transition-all duration-300 group cursor-pointer border border-[#e4e2e1]/60 flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden bg-[#fcf9f8]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-xl"
                  />
                  {product.discountBadge && (
                    <div className="absolute top-2 left-2 bg-[#FF6B4A] text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-xs">
                      {product.discountBadge}
                    </div>
                  )}
                </div>

                <div className="p-3 md:p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-worksans text-xs md:text-sm text-[#1b1c1c] font-medium line-clamp-2 mb-1 group-hover:text-[#041534] transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-manrope text-sm md:text-base font-bold text-[#1b2a4a]">
                      {formatRupiah(product.price)}
                    </p>
                    {product.originalPrice && (
                      <p className="font-worksans text-xs text-[#75777f] line-through">
                        {formatRupiah(product.originalPrice)}
                      </p>
                    )}
                  </div>

                  <div className="mt-3">
                    <div className="w-full bg-[#e4e2e1] rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-[#FF6B4A] h-1.5 rounded-full"
                        style={{
                          width: product.stockLeft && product.stockLeft < 10 ? '80%' : '45%',
                        }}
                      />
                    </div>
                    <p className="text-[11px] font-semibold text-[#FF6B4A] mt-1">
                      {product.stockLeft && product.stockLeft < 10
                        ? `Sisa ${product.stockLeft}`
                        : `Terjual ${product.salesCount}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inspirasi Belanja Bento Grid */}
        <section className="mt-10 md:mt-14 mb-8">
          <h2 className="font-manrope text-xl md:text-2xl font-bold text-[#1b2a4a] mb-6 text-center">
            Inspirasi Belanja
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 auto-rows-[190px] md:auto-rows-[220px]">
            {/* Large Bento Card */}
            <div
              onClick={() => onSelectCategory('Rumah')}
              className="col-span-2 row-span-2 bg-white rounded-2xl overflow-hidden shadow-level-1 relative group cursor-pointer border border-[#e4e2e1]/60"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0v5W-0huLjkCLepLB3RxqsdIxDbVHOQBbddX9coOn7wH2xCPYjtv_0O_viV6gs8kE8ut6w_7jYuK9HngeORT0n-IdqlEnLBsheJCEz_KJzxSuCNmG5MA3W1OzUxWc6KeApOerB5Z9OjuPTfI_dggzZbIrJo_aLMHcIlj8928x-WfqNJHK5HpGCiT_7uSCWpHcChsKoNu8qF1CKz4J1IpL22ROVB-ujr7ul5dLsy8biNrkwJPqshJO"
                alt="Dekorasi Ruang Keluarga"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-5 md:p-6 text-white">
                <span className="text-xs uppercase tracking-wider text-[#fd6a49] font-bold mb-1">
                  Koleksi Pilihan
                </span>
                <h3 className="font-manrope text-lg md:text-2xl font-bold mb-1">
                  Dekorasi Ruang Keluarga
                </h3>
                <p className="font-worksans text-xs md:text-sm text-white/90">
                  Koleksi minimalis untuk kenyamanan maksimal.
                </p>
              </div>
            </div>

            {/* Standard Card 1: Mug Keramik */}
            <div
              onClick={() => {
                const prod = products.find((p) => p.id === 'prod-mug-keramik') || products[0];
                onSelectProduct(prod);
              }}
              className="bg-white rounded-xl overflow-hidden shadow-level-1 border border-[#e4e2e1]/60 flex flex-col group cursor-pointer hover:shadow-level-2 transition-all"
            >
              <div className="relative h-2/3 overflow-hidden bg-[#fcf9f8]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWWTX--mGvBZWSb0EqcaFktDFqajr8nvLDSWNWZg_kkqHKoqKBAPg7FZbYtyTewQq0YHPCwGOBi_kAMod9YPb2Z26mUzthafHmtBG6eJGQsL9rNh3JupPA8DoAL2JHArTlghB8pOrcdKcE0U-mCBh9m8Rnn1_xhyhe_DdlZq_GMQ2XYPtUkwWR1-TFpXvP_DrIDPNy6dN5YOsPK_6Q3Elkq4kzl9Tt9QFOoJ_cmNij3oQOJOPJVmJu"
                  alt="Mug Keramik Artisan"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-3 flex-1 flex flex-col justify-center">
                <h4 className="font-worksans text-xs md:text-sm font-semibold text-[#1b2a4a] line-clamp-1">
                  Mug Keramik Artisan
                </h4>
                <p className="text-xs md:text-sm font-bold text-[#FF6B4A] mt-0.5">
                  Mulai Rp 45.000
                </p>
              </div>
            </div>

            {/* Standard Card 2: Keyboard Mekanik */}
            <div
              onClick={() => {
                const prod = products.find((p) => p.id === 'prod-keyboard-mekanik') || products[0];
                onSelectProduct(prod);
              }}
              className="bg-white rounded-xl overflow-hidden shadow-level-1 border border-[#e4e2e1]/60 flex flex-col group cursor-pointer hover:shadow-level-2 transition-all"
            >
              <div className="relative h-2/3 overflow-hidden bg-[#fcf9f8]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiLNCDaROKEHaH8bktgtpbZ-iF2i9F0FwaasisDjNgAv_L_z1ZYRzM40E4dq87Bj623brO3TkCDDqDO-Boe9AMNbWT8D1YiBaxStcre9u-nmMDATmRPOD2WJSQNBUmREFPDNrGo3gA54_Wh-wRq2OB42VqPPpmsUodz_1nUz6V8cGQjTbB46Mf7dq2Deyt_1MG1M-e5Gom1W0EUgrWn8mZLZA94BJMz3LYDEZVd4fW5i_oWJ1_30hN"
                  alt="Keyboard Mekanik"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-3 flex-1 flex flex-col justify-center">
                <h4 className="font-worksans text-xs md:text-sm font-semibold text-[#1b2a4a] line-clamp-1">
                  Keyboard Mekanik
                </h4>
                <p className="text-xs md:text-sm font-bold text-[#FF6B4A] mt-0.5">
                  Mulai Rp 750.000
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              id="btn-load-more-home"
              onClick={() => onNavigate('category')}
              className="bg-white border-2 border-[#1b2a4a] text-[#1b2a4a] font-worksans text-sm md:text-base font-semibold py-2.5 px-8 rounded-full hover:bg-[#1b2a4a] hover:text-white transition-all shadow-xs cursor-pointer active:scale-95"
            >
              Muat Lebih Banyak
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
