import React, { useState } from 'react';
import { Product, ScreenType } from '../types';

interface SellerStoreScreenProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, variant: string, quantity: number) => void;
  onNavigate: (screen: ScreenType) => void;
}

export const SellerStoreScreen: React.FC<SellerStoreScreenProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  onNavigate,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState<'produk' | 'kategori' | 'ulasan' | 'tentang'>('produk');

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] pb-28 pt-16">
      {/* Top Header */}
      <div className="sticky top-16 z-30 bg-[#fcf9f8]/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-[#e4e2e1]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="p-1.5 rounded-full hover:bg-[#eae7e7] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 className="font-manrope text-base md:text-lg font-bold text-[#1b1c1c] truncate">
            Gaya Hidup Premium Official
          </h1>
        </div>
      </div>

      {/* Store Banner */}
      <div className="relative h-40 md:h-56 w-full bg-[#041534] overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOnT5KWXJTG5WFRJE93l91HS5pI68_iBSaFtfdNLIT5VbMop79oWV4YkRXPt0Og3di2sX-nKm3epzB2aIYjFYNpC_YjZuqF_1epaD39V68wPBD7_SoX_bxBYfUYlF1DVtnc6QqdNxsfZkNbGfU40Lmxd0UvyZBQcgqOwmXKxx3ohoaKcLgpie9dCAms8SueJKgkSQfynHQ75jXveWt8iAIikdi4yILZ81f5N0-nE0Ihbk369eWjiTn"
          alt="Store Banner"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      <main className="max-w-[1100px] mx-auto px-4 -mt-14 relative z-10 space-y-6">
        {/* Store Profile Card */}
        <div className="bg-white rounded-2xl p-5 border border-[#e4e2e1] shadow-level-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWCEA50K6quLMdF1urUJIaxYxSkVxYl4tCeZFHvlOybRmI2lktE_P7NNpajc1gGz8pzajjQWwHmt67L52GTKHdkZRcRu3IPazHWam6Sx5R3Po6K7cz7xGyEcrFlAPyB0TBaOfzaXYmCuQsmwIEtxj1m0tG9rq7gEeNhaUJ-ourofmSJgwk_jg0rWLTr0mAyxxomQP48K_dNuLHkOZ-72T_zWMOcmpHO5xcheRCHHduf4pdkgwAawrh"
              alt="Gaya Hidup Premium"
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover border-4 border-white shadow-md flex-shrink-0"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-manrope text-base md:text-xl font-bold text-[#1b1c1c]">
                  Gaya Hidup Premium
                </h2>
                <span className="material-symbols-outlined text-blue-600 text-[18px] filled">
                  verified
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs text-[#75777f] mt-1">
                <span className="flex items-center text-[#F59E0B] font-bold">
                  <span className="material-symbols-outlined text-xs filled mr-0.5">star</span>
                  4.9 (1.2k ulasan)
                </span>
                <span>•</span>
                <span>12.5k Pengikut</span>
                <span>•</span>
                <span>Jakarta Barat</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className={`flex-1 sm:flex-initial px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isFollowing
                  ? 'bg-[#f6f3f2] text-[#041534] border border-[#e4e2e1]'
                  : 'bg-[#041534] text-white hover:bg-[#1b2a4a]'
              }`}
            >
              {isFollowing ? 'Mengikuti' : '+ Ikuti Toko'}
            </button>
            <button
              onClick={() => onNavigate('chat')}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl border border-[#041534] text-[#041534] text-xs font-bold hover:bg-[#041534] hover:text-white transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              Chat
            </button>
          </div>
        </div>

        {/* Store Tabs */}
        <div className="flex border-b border-[#e4e2e1] bg-white rounded-t-2xl px-4 pt-2">
          <button
            onClick={() => setActiveTab('produk')}
            className={`pb-3 px-4 font-manrope text-xs md:text-sm font-bold border-b-2 cursor-pointer transition-all ${
              activeTab === 'produk'
                ? 'border-[#041534] text-[#041534]'
                : 'border-transparent text-[#75777f]'
            }`}
          >
            Semua Produk ({products.length})
          </button>
          <button
            onClick={() => setActiveTab('ulasan')}
            className={`pb-3 px-4 font-manrope text-xs md:text-sm font-bold border-b-2 cursor-pointer transition-all ${
              activeTab === 'ulasan'
                ? 'border-[#041534] text-[#041534]'
                : 'border-transparent text-[#75777f]'
            }`}
          >
            Ulasan Toko
          </button>
          <button
            onClick={() => setActiveTab('tentang')}
            className={`pb-3 px-4 font-manrope text-xs md:text-sm font-bold border-b-2 cursor-pointer transition-all ${
              activeTab === 'tentang'
                ? 'border-[#041534] text-[#041534]'
                : 'border-transparent text-[#75777f]'
            }`}
          >
            Tentang Toko
          </button>
        </div>

        {/* Products Grid Tab */}
        {activeTab === 'produk' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="bg-white rounded-2xl overflow-hidden border border-[#e4e2e1] shadow-level-1 hover:shadow-level-2 transition-all group cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-square overflow-hidden bg-[#fcf9f8]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.discountBadge && (
                    <span className="absolute top-2 left-2 bg-[#FF6B4A] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {product.discountBadge}
                    </span>
                  )}
                </div>

                <div className="p-3 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-worksans text-xs md:text-sm font-medium text-[#1b1c1c] line-clamp-2 mb-1 group-hover:text-[#041534]">
                      {product.name}
                    </h3>
                    <p className="font-manrope text-sm md:text-base font-bold text-[#041534]">
                      {formatRupiah(product.price)}
                    </p>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between text-xs text-[#75777f] pt-2 border-t border-[#e4e2e1]/60">
                    <span className="flex items-center text-[#F59E0B]">
                      <span className="material-symbols-outlined text-xs filled mr-0.5">star</span>
                      {product.rating}
                    </span>
                    <span>{product.salesCount} terjual</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Ulasan Tab */}
        {activeTab === 'ulasan' && (
          <div className="bg-white rounded-2xl p-6 border border-[#e4e2e1] shadow-level-1 space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b border-[#e4e2e1]">
              <div className="text-center">
                <span className="font-manrope text-4xl font-extrabold text-[#041534]">4.9</span>
                <div className="flex text-[#F59E0B] justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm filled">
                      star
                    </span>
                  ))}
                </div>
                <span className="text-xs text-[#75777f] mt-0.5 block">1.250 ulasan pembeli</span>
              </div>
            </div>
            <p className="text-xs text-[#45464e]">
              98% pembeli merasa puas dengan kualitas barang dan kecepatan pengiriman toko ini.
            </p>
          </div>
        )}

        {/* Tentang Toko Tab */}
        {activeTab === 'tentang' && (
          <div className="bg-white rounded-2xl p-6 border border-[#e4e2e1] shadow-level-1 space-y-4">
            <h3 className="font-manrope text-base font-bold text-[#1b1c1c]">
              Tentang Gaya Hidup Premium Official
            </h3>
            <p className="text-xs md:text-sm text-[#45464e] leading-relaxed">
              Gaya Hidup Premium Official adalah toko resmi yang menghadirkan produk kurasi fashion,
              home living, dan aksesoris berkualitas boutique dengan standar material terbaik di
              Indonesia.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
              <div className="p-3 bg-[#fcf9f8] rounded-xl border border-[#e4e2e1]">
                <span className="text-xs text-[#75777f]">Bergabung Sejak</span>
                <p className="font-bold text-xs md:text-sm text-[#041534] mt-0.5">Januari 2022</p>
              </div>
              <div className="p-3 bg-[#fcf9f8] rounded-xl border border-[#e4e2e1]">
                <span className="text-xs text-[#75777f]">Kecepatan Balas Chat</span>
                <p className="font-bold text-xs md:text-sm text-[#041534] mt-0.5">&lt; 5 Menit (99%)</p>
              </div>
              <div className="p-3 bg-[#fcf9f8] rounded-xl border border-[#e4e2e1]">
                <span className="text-xs text-[#75777f]">Garansi Resmi</span>
                <p className="font-bold text-xs md:text-sm text-[#041534] mt-0.5">100% Original</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
