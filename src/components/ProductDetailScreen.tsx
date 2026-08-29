import React, { useState } from 'react';
import { Product, ScreenType } from '../types';

interface ProductDetailScreenProps {
  product: Product;
  onAddToCart: (product: Product, variant: string, quantity: number) => void;
  onBuyNow: (product: Product, variant: string, quantity: number) => void;
  onNavigate: (screen: ScreenType) => void;
  onOpenChatWithProduct: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  product,
  onAddToCart,
  onBuyNow,
  onNavigate,
  onOpenChatWithProduct,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants ? product.variants[0] : 'Standar'
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'deskripsi' | 'spesifikasi' | 'ulasan'>('deskripsi');
  const [addedToast, setAddedToast] = useState(false);

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  const handleAddToCart = () => {
    onAddToCart(product, selectedVariant, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2000);
  };

  const handleBuyNow = () => {
    onBuyNow(product, selectedVariant, quantity);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] pb-28 pt-16">
      {/* Toast Notification */}
      {addedToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#041534] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top duration-200">
          <span className="material-symbols-outlined text-[#fd6a49] text-base">check_circle</span>
          Berhasil ditambahkan ke keranjang!
        </div>
      )}

      {/* Mobile Top Navigation */}
      <div className="md:hidden sticky top-16 z-30 bg-[#fcf9f8]/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-[#e4e2e1]">
        <button
          onClick={() => onNavigate('home')}
          className="p-1.5 rounded-full hover:bg-[#eae7e7] transition-colors cursor-pointer flex items-center"
        >
          <span className="material-symbols-outlined text-[24px]">arrow_back</span>
        </button>
        <h2 className="font-manrope text-sm font-bold truncate max-w-[200px]">Detail Produk</h2>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onToggleWishlist(product)}
            className={`p-1.5 rounded-full hover:bg-[#eae7e7] transition-colors cursor-pointer ${
              isWishlisted ? 'text-[#ae3115]' : 'text-[#75777f]'
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={isWishlisted ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              favorite
            </span>
          </button>
          <button
            onClick={() => onNavigate('cart')}
            className="p-1.5 rounded-full hover:bg-[#eae7e7] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">shopping_cart</span>
          </button>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 pt-4 md:pt-6">
        {/* Desktop Breadcrumbs */}
        <div className="hidden md:flex items-center gap-2 text-xs text-[#75777f] mb-4">
          <button onClick={() => onNavigate('home')} className="hover:underline">
            Beranda
          </button>
          <span>/</span>
          <button onClick={() => onNavigate('category')} className="hover:underline">
            {product.category}
          </button>
          <span>/</span>
          <span className="text-[#1b1c1c] font-medium truncate max-w-md">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Product Image Gallery */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-[#e4e2e1] shadow-level-1">
              <img
                src={product.images[selectedImageIdx] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.discountBadge && (
                <div className="absolute top-4 left-4 bg-[#FF6B4A] text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {product.discountBadge}
                </div>
              )}
            </div>

            {/* Thumbnail selector */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      selectedImageIdx === idx
                        ? 'border-[#041534] scale-102'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details & Purchase Actions */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="inline-block bg-[#041534]/10 text-[#041534] text-xs font-bold px-2.5 py-0.5 rounded-full mb-2">
                {product.category}
              </span>
              <h1 className="font-manrope text-xl md:text-2xl lg:text-3xl font-extrabold text-[#1b1c1c] leading-snug">
                {product.name}
              </h1>

              {/* Rating & Sales */}
              <div className="flex items-center gap-3 mt-2 text-xs md:text-sm">
                <div className="flex items-center text-[#F59E0B]">
                  <span className="material-symbols-outlined text-[18px] filled">star</span>
                  <span className="font-bold text-[#1b1c1c] ml-1">{product.rating}</span>
                </div>
                <span className="text-[#75777f]">•</span>
                <span className="text-[#45464e]">{product.reviewCount} Ulasan</span>
                <span className="text-[#75777f]">•</span>
                <span className="text-[#45464e]">{product.salesCount} Terjual</span>
                <span className="text-[#75777f]">•</span>
                <span className="text-[#45464e] flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">location_on</span>
                  {product.location}
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="p-4 rounded-xl bg-white border border-[#e4e2e1] shadow-xs flex items-baseline gap-3">
              <span className="font-manrope text-2xl md:text-3xl font-black text-[#041534]">
                {formatRupiah(product.price)}
              </span>
              {product.originalPrice && (
                <span className="font-worksans text-sm text-[#75777f] line-through">
                  {formatRupiah(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#45464e] mb-2">
                  Pilih Varian
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold border transition-all cursor-pointer ${
                        selectedVariant === variant
                          ? 'bg-[#041534] text-white border-[#041534] shadow-xs'
                          : 'bg-white text-[#1b1c1c] border-[#e4e2e1] hover:border-[#041534]'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#45464e] mb-2">
                Jumlah
              </h3>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#e4e2e1] bg-white rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 px-3 hover:bg-[#f6f3f2] active:scale-95 transition-transform"
                  >
                    -
                  </button>
                  <span className="px-4 font-bold text-sm text-[#041534]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-2 px-3 hover:bg-[#f6f3f2] active:scale-95 transition-transform"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-[#75777f]">Stok: {product.stock} tersisa</span>
              </div>
            </div>

            {/* Store Card */}
            <div className="p-4 rounded-xl bg-white border border-[#e4e2e1] shadow-level-1 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={product.storeAvatar}
                  alt={product.storeName}
                  className="w-12 h-12 rounded-full object-cover border border-[#e4e2e1]"
                />
                <div>
                  <h4 className="font-manrope text-sm font-bold text-[#1b1c1c]">
                    {product.storeName}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#75777f]">
                    <span className="flex items-center text-[#F59E0B]">
                      <span className="material-symbols-outlined text-xs filled">star</span>
                      {product.storeRating}
                    </span>
                    <span>• Official Store</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('seller-store')}
                className="px-3.5 py-1.5 rounded-lg border border-[#041534] text-[#041534] text-xs font-bold hover:bg-[#041534] hover:text-white transition-colors cursor-pointer"
              >
                Kunjungi Toko
              </button>
            </div>
          </div>
        </div>

        {/* Tab Sections (Deskripsi, Spesifikasi, Ulasan) */}
        <section className="mt-10 bg-white rounded-2xl p-6 border border-[#e4e2e1] shadow-level-1">
          <div className="flex border-b border-[#e4e2e1] mb-6">
            <button
              onClick={() => setActiveTab('deskripsi')}
              className={`pb-3 px-4 font-manrope text-sm md:text-base font-bold transition-all border-b-2 cursor-pointer ${
                activeTab === 'deskripsi'
                  ? 'border-[#041534] text-[#041534]'
                  : 'border-transparent text-[#75777f] hover:text-[#1b1c1c]'
              }`}
            >
              Deskripsi
            </button>
            <button
              onClick={() => setActiveTab('spesifikasi')}
              className={`pb-3 px-4 font-manrope text-sm md:text-base font-bold transition-all border-b-2 cursor-pointer ${
                activeTab === 'spesifikasi'
                  ? 'border-[#041534] text-[#041534]'
                  : 'border-transparent text-[#75777f] hover:text-[#1b1c1c]'
              }`}
            >
              Spesifikasi
            </button>
            <button
              onClick={() => setActiveTab('ulasan')}
              className={`pb-3 px-4 font-manrope text-sm md:text-base font-bold transition-all border-b-2 cursor-pointer ${
                activeTab === 'ulasan'
                  ? 'border-[#041534] text-[#041534]'
                  : 'border-transparent text-[#75777f] hover:text-[#1b1c1c]'
              }`}
            >
              Ulasan ({product.reviewCount})
            </button>
          </div>

          {activeTab === 'deskripsi' && (
            <div className="font-worksans text-sm md:text-base text-[#45464e] leading-relaxed space-y-3">
              <p>{product.description}</p>
              <p>
                Semua produk yang dijual dijamin 100% original, bergaransi resmi, dan dikemas aman
                dengan asuransi pengiriman penuh.
              </p>
            </div>
          )}

          {activeTab === 'spesifikasi' && (
            <div className="divide-y divide-[#e4e2e1] text-sm">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="py-2.5 flex flex-col sm:flex-row">
                  <span className="w-48 font-bold text-[#1b1c1c]">{key}</span>
                  <span className="text-[#45464e]">{val}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'ulasan' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#fcf9f8] border border-[#e4e2e1] flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#041534]">Rian Hidayat</span>
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                      Pembeli Terverifikasi
                    </span>
                  </div>
                  <span className="text-xs text-[#75777f]">2 hari lalu</span>
                </div>
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm filled">
                      star
                    </span>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-[#45464e]">
                  Kualitas produk sangat bagus, barang original dan sesuai deskripsi. Pengiriman
                  cepat dan packing rapi berlapis bubble wrap.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#fcf9f8] border border-[#e4e2e1] flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#041534]">Dewi Sartika</span>
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                      Pembeli Terverifikasi
                    </span>
                  </div>
                  <span className="text-xs text-[#75777f]">1 minggu lalu</span>
                </div>
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm filled">
                      star
                    </span>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-[#45464e]">
                  Sangat puas belanja di sini. Respon penjual ramah dan cepat tanggap. Recommended
                  banget!
                </p>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-[#e4e2e1] p-3 px-4 md:px-8 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenChatWithProduct(product)}
            className="p-2.5 rounded-xl border border-[#e4e2e1] text-[#041534] hover:bg-[#f6f3f2] transition-colors flex flex-col items-center justify-center cursor-pointer"
            title="Chat Penjual"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span className="text-[10px] font-semibold mt-0.5">Chat</span>
          </button>
          <button
            onClick={() => onToggleWishlist(product)}
            className={`p-2.5 rounded-xl border transition-colors flex flex-col items-center justify-center cursor-pointer ${
              isWishlisted
                ? 'border-[#ae3115] text-[#ae3115] bg-[#ae3115]/5'
                : 'border-[#e4e2e1] text-[#75777f] hover:bg-[#f6f3f2]'
            }`}
            title="Wishlist"
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={isWishlisted ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              favorite
            </span>
            <span className="text-[10px] font-semibold mt-0.5">Wishlist</span>
          </button>
        </div>

        <div className="flex items-center gap-2 flex-1 max-w-md">
          <button
            id="btn-add-to-cart"
            onClick={handleAddToCart}
            className="flex-1 py-3 px-4 rounded-xl border-2 border-[#041534] text-[#041534] font-manrope text-xs md:text-sm font-bold hover:bg-[#041534] hover:text-white transition-all cursor-pointer active:scale-95 text-center"
          >
            + Keranjang
          </button>
          <button
            id="btn-buy-now"
            onClick={handleBuyNow}
            className="flex-1 py-3 px-4 rounded-xl bg-[#041534] text-white font-manrope text-xs md:text-sm font-bold hover:bg-[#1b2a4a] transition-all shadow-md cursor-pointer active:scale-95 text-center"
          >
            Beli Langsung
          </button>
        </div>
      </div>
    </div>
  );
};
