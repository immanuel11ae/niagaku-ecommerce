import React, { useState } from 'react';
import { Product, ScreenType } from '../types';

interface CategoryScreenProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onSelectProduct: (product: Product) => void;
  onNavigate: (screen: ScreenType) => void;
}

export const CategoryScreen: React.FC<CategoryScreenProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onNavigate,
}) => {
  const [activeFilterCategory, setActiveFilterCategory] = useState<string>(
    selectedCategory || 'Fashion'
  );
  const [searchFilter, setSearchFilter] = useState('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [sortBy, setSortBy] = useState<'Terbaru' | 'Terlaris' | 'Harga Terendah' | 'Harga Tertinggi'>('Terbaru');
  const [onlyHighRating, setOnlyHighRating] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('Semua');

  const categories = ['Semua', 'Fashion', 'Elektronik', 'Rumah', 'Kuliner'];

  // Filter products
  let filtered = products.filter((p) => {
    // Category match
    if (activeFilterCategory !== 'Semua' && p.category.toLowerCase() !== activeFilterCategory.toLowerCase()) {
      return false;
    }
    // Search filter
    if (searchFilter && !p.name.toLowerCase().includes(searchFilter.toLowerCase())) {
      return false;
    }
    // Price range
    if (minPrice && p.price < Number(minPrice)) {
      return false;
    }
    if (maxPrice && p.price > Number(maxPrice)) {
      return false;
    }
    // Rating
    if (onlyHighRating && p.rating < 4.8) {
      return false;
    }
    return true;
  });

  // Sort
  if (sortBy === 'Terlaris') {
    filtered = [...filtered].sort((a, b) => b.salesCount - a.salesCount);
  } else if (sortBy === 'Harga Terendah') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'Harga Tertinggi') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  const handleResetFilters = () => {
    setActiveFilterCategory('Semua');
    setMinPrice('');
    setMaxPrice('');
    setSearchFilter('');
    setOnlyHighRating(false);
    setSortBy('Terbaru');
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] pb-24 md:pb-16 pt-16">
      {/* Mobile Search & Filter Subheader */}
      <div className="md:hidden sticky top-16 z-40 bg-[#fcf9f8]/95 backdrop-blur-md px-4 py-2.5 shadow-xs border-b border-[#e4e2e1]">
        <div className="flex gap-2 items-center">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[#75777f] text-[20px]">
              search
            </span>
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Cari di kategori ini..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-[#e4e2e1] bg-white focus:border-[#041534] text-xs font-worksans shadow-xs outline-none"
            />
          </div>
          <button
            onClick={() => setOnlyHighRating(!onlyHighRating)}
            className={`p-2 rounded-lg border transition-colors flex items-center justify-center cursor-pointer ${
              onlyHighRating
                ? 'bg-[#041534] text-white border-[#041534]'
                : 'bg-white text-[#1b1c1c] border-[#e4e2e1]'
            }`}
            title="Filter Rating > 4.8"
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
          </button>
        </div>
      </div>

      <main className="max-w-[1280px] mx-auto px-4 md:px-6 pt-4 md:pt-8 flex flex-col md:flex-row gap-6">
        {/* Desktop Sidebar Filter */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-24 bg-white rounded-xl p-5 shadow-level-1 border border-[#e4e2e1]">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#e4e2e1]">
              <h2 className="font-manrope text-base font-bold text-[#1b1c1c]">Filter</h2>
              <button
                onClick={handleResetFilters}
                className="text-xs font-semibold text-[#ae3115] hover:underline cursor-pointer"
              >
                Reset
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#45464e] mb-3">
                Kategori
              </h3>
              <ul className="space-y-2 text-sm">
                {categories.map((cat) => (
                  <li key={cat}>
                    <label className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={activeFilterCategory.toLowerCase() === cat.toLowerCase()}
                        onChange={() => {
                          setActiveFilterCategory(cat);
                          onSelectCategory(cat);
                        }}
                        className="text-[#041534] focus:ring-[#041534]"
                      />
                      <span
                        className={`transition-colors ${
                          activeFilterCategory.toLowerCase() === cat.toLowerCase()
                            ? 'font-bold text-[#041534]'
                            : 'text-[#45464e] group-hover:text-[#041534]'
                        }`}
                      >
                        {cat}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="mb-5 border-t border-[#e4e2e1] pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#45464e] mb-2">
                Rentang Harga (Rp)
              </h3>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full rounded-md border border-[#c5c6cf] text-xs px-2 py-1.5 focus:border-[#041534] outline-none"
                />
                <span className="text-[#75777f]">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full rounded-md border border-[#c5c6cf] text-xs px-2 py-1.5 focus:border-[#041534] outline-none"
                />
              </div>
            </div>

            {/* Rating Filter */}
            <div className="border-t border-[#e4e2e1] pt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyHighRating}
                  onChange={(e) => setOnlyHighRating(e.target.checked)}
                  className="rounded text-[#041534] focus:ring-[#041534]"
                />
                <span className="text-xs font-medium text-[#1b1c1c]">Rating &gt; 4.8 Bintang</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Product Listing Area */}
        <div className="flex-1 w-full">
          {/* Sorting & Category Title */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
            <div>
              <h2 className="font-manrope text-xl md:text-2xl font-bold text-[#1b1c1c]">
                {activeFilterCategory === 'Fashion' ? 'Pakaian Pria & Fashion' : activeFilterCategory}
              </h2>
              <p className="font-worksans text-xs md:text-sm text-[#45464e]">
                Menampilkan {filtered.length} produk pilihan
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="relative inline-block w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full sm:w-auto appearance-none bg-white border border-[#e4e2e1] text-[#1b1c1c] py-2 pl-3 pr-8 rounded-lg text-xs md:text-sm font-medium shadow-level-1 focus:outline-none focus:border-[#041534] cursor-pointer"
              >
                <option value="Terbaru">Terbaru</option>
                <option value="Terlaris">Terlaris</option>
                <option value="Harga Terendah">Harga Terendah</option>
                <option value="Harga Tertinggi">Harga Tertinggi</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#75777f]">
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </div>
            </div>
          </div>

          {/* Horizontal Filter Chips (Mobile Only) */}
          <div className="flex md:hidden overflow-x-auto hide-scrollbar gap-2 mb-4 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilterCategory(cat)}
                className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border transition-all ${
                  activeFilterCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#d9e2ff] text-[#0a1a3a] border-[#b7c6ee]'
                    : 'bg-white text-[#45464e] border-[#e4e2e1]'
                }`}
              >
                {cat}
                {activeFilterCategory.toLowerCase() === cat.toLowerCase() && cat !== 'Semua' && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveFilterCategory('Semua');
                    }}
                    className="material-symbols-outlined text-[14px] ml-0.5 hover:text-red-600"
                  >
                    close
                  </span>
                )}
              </button>
            ))}
            <button
              onClick={() => setOnlyHighRating(!onlyHighRating)}
              className={`whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium border transition-all ${
                onlyHighRating
                  ? 'bg-[#d9e2ff] text-[#0a1a3a] border-[#b7c6ee]'
                  : 'bg-white text-[#45464e] border-[#e4e2e1]'
              }`}
            >
              Rating &gt; 4.8
            </button>
          </div>

          {/* Product Grid */}
          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-level-1 border border-[#e4e2e1]">
              <span className="material-symbols-outlined text-5xl text-gray-300 mb-2">search_off</span>
              <h3 className="font-manrope text-lg font-bold text-[#1b1c1c]">Produk tidak ditemukan</h3>
              <p className="text-sm text-[#45464e] mt-1">Coba ubah kata kunci atau reset filter pencarian.</p>
              <button
                onClick={handleResetFilters}
                className="mt-4 px-6 py-2 bg-[#041534] text-white rounded-xl text-xs font-semibold"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  id={`cat-prod-${product.id}`}
                  onClick={() => onSelectProduct(product)}
                  className="bg-white rounded-xl overflow-hidden shadow-level-1 hover:shadow-level-2 transition-all duration-300 border border-[#e4e2e1]/60 group cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#fcf9f8]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.discountBadge && (
                      <div className="absolute top-2 left-2">
                        <span className="bg-[#2DD4BF]/15 text-[#00a493] text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs shadow-xs border border-[#2DD4BF]/30">
                          {product.discountBadge}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-2.5 md:p-3 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-worksans text-xs md:text-sm text-[#2B2B2B] font-medium line-clamp-2 mb-1 group-hover:text-[#041534] transition-colors">
                        {product.name}
                      </h3>
                      <p className="font-manrope text-sm md:text-base font-bold text-[#2B2B2B]">
                        {formatRupiah(product.price)}
                      </p>
                      {product.originalPrice && (
                        <p className="font-worksans text-[10px] md:text-xs text-[#75777f] line-through">
                          {formatRupiah(product.originalPrice)}
                        </p>
                      )}
                    </div>

                    <div className="mt-2 pt-2 border-t border-[#e4e2e1]/40">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px] text-[#F59E0B] filled">
                          star
                        </span>
                        <span className="font-worksans text-[11px] text-[#45464e]">
                          {product.rating} ({product.salesCount} terjual)
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-0.5 text-[#45464e] text-[10px] md:text-[11px]">
                        <span className="material-symbols-outlined text-[12px]">location_on</span>
                        <span className="truncate">{product.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
