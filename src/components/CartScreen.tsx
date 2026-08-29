import React from 'react';
import { CartItem, ScreenType } from '../types';

interface CartScreenProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onToggleSelect: (id: string) => void;
  onToggleSelectAll: () => void;
  onProceedToCheckout: () => void;
  onNavigate: (screen: ScreenType) => void;
}

export const CartScreen: React.FC<CartScreenProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onToggleSelect,
  onToggleSelectAll,
  onProceedToCheckout,
  onNavigate,
}) => {
  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  const allSelected = cartItems.length > 0 && cartItems.every((item) => item.selected);
  const selectedItems = cartItems.filter((item) => item.selected);
  const totalPrice = selectedItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  // Group items by store
  const storeGroups = cartItems.reduce((acc, item) => {
    if (!acc[item.storeName]) {
      acc[item.storeName] = [];
    }
    acc[item.storeName].push(item);
    return acc;
  }, {} as Record<string, CartItem[]>);

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] pb-32 pt-16">
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
            Keranjang ({cartItems.length})
          </h1>
        </div>
      </div>

      <main className="max-w-[800px] mx-auto px-4 pt-4 md:pt-6">
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-level-1 border border-[#e4e2e1] mt-8">
            <span className="material-symbols-outlined text-6xl text-[#75777f]/40 mb-3">
              shopping_cart
            </span>
            <h2 className="font-manrope text-lg font-bold text-[#1b1c1c]">Keranjang Belanja Kosong</h2>
            <p className="text-xs md:text-sm text-[#45464e] mt-1 mb-6">
              Yuk, jelajahi produk menarik dan tambahkan ke keranjang Anda!
            </p>
            <button
              onClick={() => onNavigate('home')}
              className="bg-[#041534] text-white px-6 py-2.5 rounded-xl font-manrope text-sm font-bold hover:bg-[#1b2a4a] transition-all cursor-pointer"
            >
              Mulai Belanja
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Select All Row */}
            <div className="p-3.5 bg-white rounded-xl border border-[#e4e2e1] shadow-level-1 flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={onToggleSelectAll}
                  className="w-4 h-4 rounded text-[#041534] focus:ring-[#041534] cursor-pointer"
                />
                <span className="font-worksans text-sm font-semibold text-[#1b1c1c]">
                  Pilih Semua ({cartItems.length} barang)
                </span>
              </label>
              {selectedItems.length > 0 && (
                <button
                  onClick={() => {
                    selectedItems.forEach((item) => onRemoveItem(item.id));
                  }}
                  className="text-xs font-semibold text-[#ae3115] hover:underline cursor-pointer"
                >
                  Hapus Terpilih
                </button>
              )}
            </div>

            {/* Store Groups */}
            {(Object.entries(storeGroups) as [string, CartItem[]][]).map(([storeName, items]) => {
              const allStoreSelected = items.every((i) => i.selected);

              return (
                <div
                  key={storeName}
                  className="bg-white rounded-2xl p-4 border border-[#e4e2e1] shadow-level-1 space-y-4"
                >
                  {/* Store Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#e4e2e1]">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={allStoreSelected}
                        onChange={() => {
                          items.forEach((i) => {
                            if (allStoreSelected) {
                              if (i.selected) onToggleSelect(i.id);
                            } else {
                              if (!i.selected) onToggleSelect(i.id);
                            }
                          });
                        }}
                        className="w-4 h-4 rounded text-[#041534] focus:ring-[#041534] cursor-pointer"
                      />
                      <span className="material-symbols-outlined text-[20px] text-[#041534]">
                        storefront
                      </span>
                      <span className="font-manrope text-sm font-bold text-[#1b1c1c]">
                        {storeName}
                      </span>
                    </div>
                  </div>

                  {/* Item List */}
                  <div className="divide-y divide-[#e4e2e1]/60">
                    {items.map((item) => (
                      <div key={item.id} className="pt-3 first:pt-0 flex gap-3 items-start">
                        <input
                          type="checkbox"
                          checked={item.selected}
                          onChange={() => onToggleSelect(item.id)}
                          className="w-4 h-4 rounded text-[#041534] focus:ring-[#041534] mt-3 cursor-pointer"
                        />

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-xl object-cover border border-[#e4e2e1] bg-[#fcf9f8] flex-shrink-0"
                        />

                        <div className="flex-1 flex flex-col justify-between min-h-[80px]">
                          <div>
                            <h3 className="font-worksans text-xs md:text-sm font-medium text-[#1b1c1c] line-clamp-2">
                              {item.name}
                            </h3>
                            <span className="inline-block text-[11px] bg-[#f6f3f2] text-[#45464e] px-2 py-0.5 rounded-md mt-1">
                              {item.variant}
                            </span>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <span className="font-manrope text-sm md:text-base font-bold text-[#041534]">
                              {formatRupiah(item.price)}
                            </span>

                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => onRemoveItem(item.id)}
                                className="text-[#75777f] hover:text-[#ae3115] p-1 transition-colors cursor-pointer"
                                title="Hapus"
                              >
                                <span className="material-symbols-outlined text-[18px]">
                                  delete
                                </span>
                              </button>

                              <div className="flex items-center border border-[#e4e2e1] rounded-lg overflow-hidden bg-white">
                                <button
                                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                  className="px-2.5 py-0.5 text-sm hover:bg-[#f6f3f2] cursor-pointer"
                                >
                                  -
                                </button>
                                <span className="px-2.5 text-xs font-bold text-[#1b1c1c]">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                  className="px-2.5 py-0.5 text-sm hover:bg-[#f6f3f2] cursor-pointer"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Sticky Bottom Checkout Bar */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-[#e4e2e1] p-3 px-4 md:px-8 shadow-checkout flex items-center justify-between">
          <div className="max-w-[800px] mx-auto w-full flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-[#75777f]">Total Pembayaran</span>
              <span className="font-manrope text-base md:text-xl font-extrabold text-[#041534]">
                {formatRupiah(totalPrice)}
              </span>
            </div>

            <button
              id="btn-checkout"
              disabled={selectedItems.length === 0}
              onClick={onProceedToCheckout}
              className={`py-3 px-6 md:px-8 rounded-xl font-manrope text-xs md:text-sm font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95 ${
                selectedItems.length > 0
                  ? 'bg-[#041534] text-white hover:bg-[#1b2a4a]'
                  : 'bg-[#e4e2e1] text-[#75777f] cursor-not-allowed'
              }`}
            >
              <span>Checkout ({selectedItems.length})</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
