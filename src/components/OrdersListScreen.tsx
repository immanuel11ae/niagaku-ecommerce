import React, { useState } from 'react';
import { Order, ScreenType } from '../types';

interface OrdersListScreenProps {
  orders: Order[];
  onSelectOrderToTrack: (order: Order) => void;
  onNavigate: (screen: ScreenType) => void;
}

export const OrdersListScreen: React.FC<OrdersListScreenProps> = ({
  orders,
  onSelectOrderToTrack,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<string>('Semua');
  const tabs = ['Semua', 'Belum Bayar', 'Diproses', 'Dikirim', 'Selesai', 'Dibatalkan'];

  const filteredOrders = orders.filter((o) => {
    if (activeTab === 'Semua') return true;
    return o.status === activeTab;
  });

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  const getStatusBadge = (status: Order['status']) => {
    switch (status) {
      case 'Dikirim':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Diproses':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Selesai':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Belum Bayar':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
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
          <h1 className="font-manrope text-lg md:text-xl font-bold text-[#1b1c1c]">Pesanan Saya</h1>
        </div>
      </div>

      <main className="max-w-[760px] mx-auto px-4 pt-4 md:pt-6">
        {/* Status Filter Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#041534] text-white shadow-xs'
                  : 'bg-white text-[#45464e] border border-[#e4e2e1] hover:bg-[#f6f3f2]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-level-1 border border-[#e4e2e1] mt-4">
            <span className="material-symbols-outlined text-6xl text-[#75777f]/40 mb-3">
              receipt_long
            </span>
            <h2 className="font-manrope text-lg font-bold text-[#1b1c1c]">Belum Ada Pesanan</h2>
            <p className="text-xs md:text-sm text-[#45464e] mt-1 mb-6">
              Tidak ada riwayat transaksi pada status ini.
            </p>
            <button
              onClick={() => onNavigate('category')}
              className="bg-[#041534] text-white px-6 py-2.5 rounded-xl font-manrope text-sm font-bold hover:bg-[#1b2a4a] transition-all cursor-pointer"
            >
              Belanja Sekarang
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1 space-y-3"
              >
                {/* Order Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-[#e4e2e1]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-[#041534]">
                      storefront
                    </span>
                    <span className="font-manrope text-xs md:text-sm font-bold text-[#1b1c1c]">
                      {order.storeName}
                    </span>
                    <span className="text-[11px] text-[#75777f]">• {order.date}</span>
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${getStatusBadge(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>

                {/* Items */}
                <div className="space-y-2.5">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover border border-[#e4e2e1] flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-worksans text-xs md:text-sm font-medium text-[#1b1c1c] line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-[#75777f] mt-0.5">
                          {item.variant} • {item.quantity} barang
                        </p>
                        <p className="text-xs font-bold text-[#041534] mt-1">
                          {formatRupiah(item.price)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-3 border-t border-[#e4e2e1] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-[#75777f]">Total Belanja:</span>
                    <p className="font-manrope text-sm md:text-base font-extrabold text-[#041534]">
                      {formatRupiah(order.totalPrice)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {order.status === 'Dikirim' && (
                      <button
                        onClick={() => {
                          onSelectOrderToTrack(order);
                          onNavigate('tracking');
                        }}
                        className="px-4 py-2 rounded-xl bg-[#041534] text-white text-xs font-bold hover:bg-[#1b2a4a] transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-sm">local_shipping</span>
                        <span>Lacak Paket</span>
                      </button>
                    )}
                    <button
                      onClick={() => onNavigate('category')}
                      className="px-4 py-2 rounded-xl border border-[#041534] text-[#041534] text-xs font-bold hover:bg-[#041534] hover:text-white transition-all cursor-pointer"
                    >
                      Beli Lagi
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
