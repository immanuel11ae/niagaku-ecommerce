import React from 'react';
import { Product, ScreenType } from '../types';

interface WishlistScreenProps {
  wishlist: Product[];
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, variant: string, quantity: number) => void;
  onSelectProduct: (product: Product) => void;
  onNavigate: (screen: ScreenType) => void;
}

export const WishlistScreen: React.FC<WishlistScreenProps> = ({
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct,
  onNavigate,
}) => {
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
          <h1 className="font-manrope text-lg md:text-xl font-bold text-[#1b1c1c]">
            Wishlist Saya ({wishlist.length})
          </h1>
        </div>
      </div>

      <main className="max-w-[1000px] mx-auto px-4 pt-4 md:pt-6">
        {wishlist.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-level-1 border border-[#e4e2e1] mt-6">
            <span className="material-symbols-outlined text-6xl text-[#ae3115]/30 mb-3">
              favorite_border
            </span>
            <h2 className="font-manrope text-lg font-bold text-[#1b1c1c]">Wishlist Anda Kosong</h2>
            <p className="text-xs md:text-sm text-[#45464e] mt-1 mb-6">
              Simpan barang favorit Anda di sini untuk dibeli nanti.
            </p>
            <button
              onClick={() => onNavigate('category')}
              className="bg-[#041534] text-white px-6 py-2.5 rounded-xl font-manrope text-sm font-bold hover:bg-[#1b2a4a] transition-all cursor-pointer"
            >
              Jelajahi Produk
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#e4e2e1] shadow-level-1 flex flex-col justify-between group hover:shadow-level-2 transition-all"
              >
                <div
                  className="relative aspect-square overflow-hidden bg-[#fcf9f8] cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/90 shadow-md text-[#ae3115] hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    title="Hapus dari Wishlist"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      favorite
                    </span>
                  </button>
                </div>

                <div className="p-3 flex flex-col flex-1 justify-between">
                  <div onClick={() => onSelectProduct(product)} className="cursor-pointer">
                    <h3 className="font-worksans text-xs md:text-sm font-medium text-[#1b1c1c] line-clamp-2 mb-1 group-hover:text-[#041534]">
                      {product.name}
                    </h3>
                    <p className="font-manrope text-sm md:text-base font-bold text-[#041534]">
                      {formatRupiah(product.price)}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#e4e2e1]">
                    <button
                      onClick={() =>
                        onAddToCart(
                          product,
                          product.variants ? product.variants[0] : 'Standar',
                          1
                        )
                      }
                      className="w-full py-2 bg-[#041534] text-white rounded-xl text-xs font-bold hover:bg-[#1b2a4a] transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        add_shopping_cart
                      </span>
                      <span>+ Keranjang</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
