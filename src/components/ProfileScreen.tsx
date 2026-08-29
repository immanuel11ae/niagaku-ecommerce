import React from 'react';
import { ScreenType } from '../types';

interface ProfileScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] pb-28 pt-16">
      {/* Top Header */}
      <div className="sticky top-16 z-30 bg-[#fcf9f8]/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-[#e4e2e1]">
        <h1 className="font-manrope text-lg md:text-xl font-bold text-[#1b1c1c]">Profil Saya</h1>
        <button
          onClick={() => onNavigate('home')}
          className="p-1.5 rounded-full hover:bg-[#eae7e7] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[22px]">settings</span>
        </button>
      </div>

      <main className="max-w-[720px] mx-auto px-4 pt-4 md:pt-6 space-y-4">
        {/* User Info Card */}
        <div className="bg-white rounded-2xl p-5 border border-[#e4e2e1] shadow-level-1 flex items-center gap-4">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiGkxw1Y-DnFPaEsKirS13DtVwxok8HkZuJ8xjzTvx2XSyBneNDLVV2rGwqhqPFSZ_Ld7sGAJuz3C-4oeq4rEdp19SgEDeHnCLmtepTaFxDo5oyDMTMoW02Y21GQpRUHkE47W9Fl3-7l8ULTznMmWUQzZn7lqQBPzO7UbAIRRivuIxm-ibEQOScvLptZ-DKixuE9frDJIV3iVRd1T10qfeeo8bg1GTjLn1MbobwTelVFu_kl_80SsW"
            alt="Budi Santoso"
            className="w-16 h-16 rounded-full object-cover border-2 border-[#fd6a49] shadow-sm flex-shrink-0"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="font-manrope text-base md:text-lg font-bold text-[#1b1c1c]">
                Budi Santoso
              </h2>
              <span className="bg-[#fff8e1] text-[#f57f17] text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-[#f57f17]/30">
                Gold Member
              </span>
            </div>
            <p className="text-xs text-[#75777f] mt-0.5">+62 812-3456-7890 • budi.santoso@email.com</p>
          </div>
        </div>

        {/* Bento Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => onNavigate('orders')}
            className="bg-white p-3.5 rounded-xl border border-[#e4e2e1] shadow-level-1 text-center hover:bg-[#f6f3f2] transition-colors cursor-pointer"
          >
            <span className="font-manrope text-lg md:text-xl font-extrabold text-[#041534] block">
              12
            </span>
            <span className="text-[11px] font-medium text-[#45464e]">Pesanan Aktif</span>
          </button>

          <button
            onClick={() => onNavigate('category')}
            className="bg-white p-3.5 rounded-xl border border-[#e4e2e1] shadow-level-1 text-center hover:bg-[#f6f3f2] transition-colors cursor-pointer"
          >
            <span className="font-manrope text-lg md:text-xl font-extrabold text-[#fd6a49] block">
              4
            </span>
            <span className="text-[11px] font-medium text-[#45464e]">Kupon Diskon</span>
          </button>

          <div className="bg-white p-3.5 rounded-xl border border-[#e4e2e1] shadow-level-1 text-center">
            <span className="font-manrope text-lg md:text-xl font-extrabold text-[#00a493] block">
              850
            </span>
            <span className="text-[11px] font-medium text-[#45464e]">Poin Niagaku</span>
          </div>
        </div>

        {/* Seller Mode Promo Card */}
        <div className="bg-gradient-to-r from-[#041534] to-[#1b2a4a] text-white rounded-2xl p-5 shadow-level-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-[#fd6a49] text-[20px]">
                storefront
              </span>
              <h3 className="font-manrope font-bold text-sm md:text-base">Mulai Berjualan di Niagaku</h3>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              Buka tokomu sekarang, upload produk, dan raih jutaan pembeli setia di seluruh Indonesia.
            </p>
          </div>
          <button
            onClick={() => onNavigate('seller-dashboard')}
            className="bg-[#fd6a49] text-white px-5 py-2.5 rounded-xl font-manrope text-xs font-bold hover:bg-[#e05838] transition-all shadow-sm flex-shrink-0 cursor-pointer active:scale-95"
          >
            Buka Toko Penjual
          </button>
        </div>

        {/* Main Menu List */}
        <div className="bg-white rounded-2xl border border-[#e4e2e1] shadow-level-1 divide-y divide-[#e4e2e1]/60">
          <button
            onClick={() => onNavigate('orders')}
            className="w-full flex items-center justify-between p-4 hover:bg-[#f6f3f2] transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#041534] text-[22px]">
                receipt_long
              </span>
              <span className="font-worksans text-sm font-semibold text-[#1b1c1c]">
                Pesanan Saya
              </span>
            </div>
            <span className="material-symbols-outlined text-[#75777f] text-[20px]">
              chevron_right
            </span>
          </button>

          <button
            onClick={() => onNavigate('wishlist')}
            className="w-full flex items-center justify-between p-4 hover:bg-[#f6f3f2] transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#041534] text-[22px]">favorite</span>
              <span className="font-worksans text-sm font-semibold text-[#1b1c1c]">
                Wishlist Saya
              </span>
            </div>
            <span className="material-symbols-outlined text-[#75777f] text-[20px]">
              chevron_right
            </span>
          </button>

          <button
            onClick={() => onNavigate('address')}
            className="w-full flex items-center justify-between p-4 hover:bg-[#f6f3f2] transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#041534] text-[22px]">
                location_on
              </span>
              <span className="font-worksans text-sm font-semibold text-[#1b1c1c]">
                Daftar Alamat Pengiriman
              </span>
            </div>
            <span className="material-symbols-outlined text-[#75777f] text-[20px]">
              chevron_right
            </span>
          </button>

          <button
            onClick={() => onNavigate('chat')}
            className="w-full flex items-center justify-between p-4 hover:bg-[#f6f3f2] transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#041534] text-[22px]">
                support_agent
              </span>
              <span className="font-worksans text-sm font-semibold text-[#1b1c1c]">
                Pusat Bantuan CS 24/7
              </span>
            </div>
            <span className="material-symbols-outlined text-[#75777f] text-[20px]">
              chevron_right
            </span>
          </button>
        </div>

        {/* Logout Button */}
        <div className="pt-2">
          <button
            onClick={() => onNavigate('home')}
            className="w-full py-3 bg-red-50 text-red-600 rounded-xl font-manrope text-xs font-bold hover:bg-red-100 transition-colors border border-red-200 cursor-pointer"
          >
            Keluar dari Akun
          </button>
        </div>
      </main>
    </div>
  );
};
