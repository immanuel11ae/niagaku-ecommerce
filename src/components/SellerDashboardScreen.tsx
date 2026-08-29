import React from 'react';
import { ScreenType } from '../types';

interface SellerDashboardScreenProps {
  sellerProducts: Array<{
    id: string;
    name: string;
    category: string;
    stock: number;
    salesCount: number;
    status: string;
    image: string;
    price: number;
  }>;
  onNavigate: (screen: ScreenType) => void;
  onDeleteSellerProduct?: (id: string) => void;
}

export const SellerDashboardScreen: React.FC<SellerDashboardScreenProps> = ({
  sellerProducts,
  onNavigate,
  onDeleteSellerProduct,
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
            onClick={() => onNavigate('profile')}
            className="p-1.5 rounded-full hover:bg-[#eae7e7] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <div>
            <h1 className="font-manrope text-lg md:text-xl font-bold text-[#1b1c1c]">
              Dashboard Penjual
            </h1>
            <p className="text-[11px] text-[#75777f]">Toko: Gaya Hidup Premium Official</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('seller-store')}
            className="text-xs font-semibold text-[#041534] border border-[#041534] px-3 py-1.5 rounded-lg hover:bg-[#041534] hover:text-white transition-colors cursor-pointer"
          >
            Lihat Toko Publik
          </button>
          <button
            onClick={() => onNavigate('add-product')}
            className="bg-[#fd6a49] text-white px-3.5 py-1.5 rounded-lg font-manrope text-xs font-bold hover:bg-[#e05838] transition-all flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            + Produk
          </button>
        </div>
      </div>

      <main className="max-w-[900px] mx-auto px-4 pt-4 md:pt-6 space-y-5">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {/* Card 1: Saldo */}
          <div className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1">
            <span className="text-xs font-semibold text-[#75777f]">Saldo Pendapatan</span>
            <h2 className="font-manrope text-xl md:text-2xl font-extrabold text-[#041534] mt-1">
              Rp 12.450.000
            </h2>
            <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600 mt-2">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>+15% dari minggu lalu</span>
            </div>
          </div>

          {/* Card 2: Pesanan Baru */}
          <div className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1">
            <span className="text-xs font-semibold text-[#75777f]">Pesanan Baru</span>
            <h2 className="font-manrope text-xl md:text-2xl font-extrabold text-[#fd6a49] mt-1">
              24
            </h2>
            <p className="text-xs text-[#45464e] mt-2">Perlu diproses hari ini</p>
          </div>

          {/* Card 3: Produk Aktif */}
          <div className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1">
            <span className="text-xs font-semibold text-[#75777f]">Produk Aktif</span>
            <h2 className="font-manrope text-xl md:text-2xl font-extrabold text-[#041534] mt-1">
              {sellerProducts.length + 154} / 200
            </h2>
            <p className="text-xs text-[#45464e] mt-2">Batas katalog terpakai</p>
          </div>
        </div>

        {/* Produk Anda Section */}
        <div className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#e4e2e1]">
            <h2 className="font-manrope text-base font-bold text-[#1b1c1c]">Produk Anda</h2>
            <button
              onClick={() => onNavigate('add-product')}
              className="text-xs font-bold text-[#fd6a49] hover:underline cursor-pointer"
            >
              + Tambah Produk Baru
            </button>
          </div>

          <div className="divide-y divide-[#e4e2e1]/60">
            {sellerProducts.map((prod) => (
              <div
                key={prod.id}
                className="py-3.5 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-16 h-16 rounded-xl object-cover border border-[#e4e2e1] bg-[#fcf9f8] flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-worksans text-xs md:text-sm font-semibold text-[#1b1c1c]">
                      {prod.name}
                    </h3>
                    <p className="text-xs font-bold text-[#041534] mt-0.5">
                      {formatRupiah(prod.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] text-[#75777f]">
                        Stok: <strong>{prod.stock}</strong> • Terjual: {prod.salesCount}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          prod.stock < 5
                            ? 'bg-red-100 text-red-700'
                            : 'bg-emerald-100 text-emerald-700'
                        }`}
                      >
                        {prod.stock < 5 ? 'Stok Menipis' : 'Aktif'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => onNavigate('add-product')}
                    className="px-3 py-1.5 rounded-lg border border-[#e4e2e1] text-xs font-medium hover:bg-[#f6f3f2] cursor-pointer"
                  >
                    Edit
                  </button>
                  {onDeleteSellerProduct && (
                    <button
                      onClick={() => onDeleteSellerProduct(prod.id)}
                      className="px-3 py-1.5 rounded-lg border border-red-200 text-red-600 text-xs font-medium hover:bg-red-50 cursor-pointer"
                    >
                      Hapus
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
