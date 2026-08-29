import React, { useState } from 'react';
import { ScreenType } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  cartCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  cartCount,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex items-center justify-between px-4 md:px-8 h-16 bg-[#041534] backdrop-blur-md bg-opacity-95 shadow-md text-white transition-all">
        <div className="flex items-center gap-3 md:gap-4">
          <button
            id="btn-main-menu"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(true)}
            className="text-white hover:bg-[#1b2a4a] transition-colors rounded-full p-2 active:scale-95 flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
          <button
            id="brand-logo-btn"
            onClick={() => onNavigate('home')}
            className="flex items-center cursor-pointer text-left group"
          >
            <span className="font-manrope text-2xl md:text-3xl font-extrabold text-[#fd6a49] group-hover:opacity-90 transition-opacity">
              Niagaku
            </span>
          </button>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <form onSubmit={onSearchSubmit} className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#75777f]">
              search
            </span>
            <input
              id="desktop-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari di Niagaku... (misal: Kamera, Smartwatch, Kemeja)"
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#e4e2e1] bg-[#fcf9f8] text-[#1b1c1c] placeholder-[#75777f] focus:outline-none focus:border-[#fd6a49] focus:ring-1 focus:ring-[#fd6a49] font-worksans text-sm shadow-sm transition-all"
            />
          </form>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-2">
          <nav className="flex items-center gap-1">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentScreen === 'home'
                  ? 'text-[#fd6a49] font-bold bg-white/10'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('category')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentScreen === 'category'
                  ? 'text-[#fd6a49] font-bold bg-white/10'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              Kategori
            </button>
            <button
              onClick={() => onNavigate('wishlist')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentScreen === 'wishlist'
                  ? 'text-[#fd6a49] font-bold bg-white/10'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              Wishlist
            </button>
            <button
              onClick={() => onNavigate('chat')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentScreen === 'chat'
                  ? 'text-[#fd6a49] font-bold bg-white/10'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              Chat
            </button>
            <button
              onClick={() => onNavigate('seller-dashboard')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors border border-[#fd6a49]/40 ${
                currentScreen === 'seller-dashboard' || currentScreen === 'seller-store'
                  ? 'bg-[#fd6a49] text-white'
                  : 'text-[#fd6a49] hover:bg-[#fd6a49]/10'
              }`}
            >
              Toko Penjual
            </button>
          </nav>
        </div>

        {/* Cart Action Button */}
        <div className="flex items-center gap-2">
          <button
            id="btn-cart-header"
            aria-label="Keranjang"
            onClick={() => onNavigate('cart')}
            className="text-white hover:bg-[#1b2a4a] transition-colors rounded-full p-2 relative active:scale-95 flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-[20px] px-1 bg-[#fd6a49] text-white text-[11px] font-bold rounded-full border-2 border-[#041534] flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Slide-over Drawer Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-80 max-w-full bg-[#fcf9f8] text-[#1b1c1c] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200">
            {/* Drawer Header */}
            <div className="p-5 bg-[#041534] text-white flex items-center justify-between">
              <div>
                <h2 className="font-manrope text-xl font-bold text-[#fd6a49]">Niagaku</h2>
                <p className="text-xs text-white/70">Aplikasi E-Commerce Terpercaya</p>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Quick Profile Summary */}
            <div
              onClick={() => {
                onNavigate('profile');
                setIsMenuOpen(false);
              }}
              className="p-4 bg-white border-b border-[#e4e2e1] flex items-center gap-3 cursor-pointer hover:bg-[#f6f3f2] transition-colors"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiGkxw1Y-DnFPaEsKirS13DtVwxok8HkZuJ8xjzTvx2XSyBneNDLVV2rGwqhqPFSZ_Ld7sGAJuz3C-4oeq4rEdp19SgEDeHnCLmtepTaFxDo5oyDMTMoW02Y21GQpRUHkE47W9Fl3-7l8ULTznMmWUQzZn7lqQBPzO7UbAIRRivuIxm-ibEQOScvLptZ-DKixuE9frDJIV3iVRd1T10qfeeo8bg1GTjLn1MbobwTelVFu_kl_80SsW"
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover border-2 border-[#fd6a49]"
              />
              <div className="flex-1">
                <p className="font-semibold text-sm text-[#041534]">Budi Santoso</p>
                <span className="inline-block text-[11px] font-semibold text-[#f57f17] bg-[#fff8e1] px-2 py-0.5 rounded-full mt-0.5">
                  Gold Member
                </span>
              </div>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
            </div>

            {/* Navigation List */}
            <div className="flex-1 overflow-y-auto py-2">
              <div className="px-4 py-2 text-xs font-bold text-[#75777f] uppercase tracking-wider">
                Menu Utama
              </div>
              <button
                onClick={() => {
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#f0eded] text-sm font-medium cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#1b2a4a]">home</span>
                Beranda
              </button>
              <button
                onClick={() => {
                  onNavigate('category');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#f0eded] text-sm font-medium cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#1b2a4a]">category</span>
                Kategori Produk
              </button>
              <button
                onClick={() => {
                  onNavigate('cart');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#f0eded] text-sm font-medium cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#1b2a4a]">shopping_cart</span>
                  Keranjang Belanja
                </div>
                {cartCount > 0 && (
                  <span className="bg-[#fd6a49] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => {
                  onNavigate('wishlist');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#f0eded] text-sm font-medium cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#1b2a4a]">favorite</span>
                Wishlist Saya
              </button>
              <button
                onClick={() => {
                  onNavigate('orders');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#f0eded] text-sm font-medium cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#1b2a4a]">receipt_long</span>
                Pesanan Saya
              </button>
              <button
                onClick={() => {
                  onNavigate('tracking');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#f0eded] text-sm font-medium cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#1b2a4a]">local_shipping</span>
                Lacak Pesanan
              </button>
              <button
                onClick={() => {
                  onNavigate('address');
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#f0eded] text-sm font-medium cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#1b2a4a]">location_on</span>
                Daftar Alamat
              </button>

              <div className="border-t border-[#e4e2e1] my-2 pt-2">
                <div className="px-4 py-2 text-xs font-bold text-[#75777f] uppercase tracking-wider">
                  Toko & Mitra
                </div>
                <button
                  onClick={() => {
                    onNavigate('seller-dashboard');
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#f0eded] text-sm font-semibold text-[#ae3115] cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#ae3115]">storefront</span>
                    Dashboard Penjual
                  </div>
                  <span className="text-[10px] bg-[#ae3115]/10 text-[#ae3115] font-bold px-2 py-0.5 rounded-full">
                    Seller
                  </span>
                </button>
                <button
                  onClick={() => {
                    onNavigate('seller-store');
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#f0eded] text-sm font-medium cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[#1b2a4a]">store</span>
                  Kunjungi Toko Gaya Hidup
                </button>
                <button
                  onClick={() => {
                    onNavigate('add-product');
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#f0eded] text-sm font-medium cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[#1b2a4a]">add_circle</span>
                  Tambah Produk Baru
                </button>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-[#e4e2e1] bg-white">
              <button
                onClick={() => {
                  onNavigate('chat');
                  setIsMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-[#041534] text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#1b2a4a] transition-colors"
              >
                <span className="material-symbols-outlined text-sm">support_agent</span>
                Hubungi Bantuan CS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
