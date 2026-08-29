import React, { useState } from 'react';
import { NotificationItem, ScreenType } from '../types';

interface NotificationsScreenProps {
  notifications: NotificationItem[];
  onMarkAllAsRead: () => void;
  onNavigate: (screen: ScreenType) => void;
}

export const NotificationsScreen: React.FC<NotificationsScreenProps> = ({
  notifications,
  onMarkAllAsRead,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<string>('Semua');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const tabs = ['Semua', 'Promo', 'Pesanan', 'Chat', 'Info'];

  const filtered = notifications.filter((n) => {
    if (activeTab === 'Semua') return true;
    if (activeTab === 'Promo') return n.type === 'promo';
    if (activeTab === 'Pesanan') return n.type === 'order';
    if (activeTab === 'Chat') return n.type === 'chat';
    if (activeTab === 'Info') return n.type === 'system';
    return true;
  });

  // Group by date
  const groups: { [key: string]: NotificationItem[] } = {};
  filtered.forEach((item) => {
    if (!groups[item.dateGroup]) {
      groups[item.dateGroup] = [];
    }
    groups[item.dateGroup].push(item);
  });

  const handleCopy = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'promo':
        return 'local_offer';
      case 'order':
        return 'local_shipping';
      case 'chat':
        return 'chat';
      case 'cart':
        return 'shopping_cart';
      default:
        return 'info';
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] pb-28 pt-16">
      {/* Top Header */}
      <div className="sticky top-16 z-30 bg-[#fcf9f8]/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-[#e4e2e1]">
        <h1 className="font-manrope text-lg md:text-xl font-bold text-[#1b1c1c]">Notifikasi</h1>
        <button
          onClick={onMarkAllAsRead}
          className="text-xs font-bold text-[#041534] hover:underline cursor-pointer"
        >
          Tandai Semua Dibaca
        </button>
      </div>

      <main className="max-w-[720px] mx-auto px-4 pt-4 md:pt-6">
        {/* Category Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#041534] text-white shadow-xs'
                  : 'bg-white text-[#45464e] border border-[#e4e2e1] hover:bg-[#f6f3f2]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grouped Notifications */}
        <div className="space-y-6">
          {Object.entries(groups).map(([dateGroup, items]) => (
            <div key={dateGroup} className="space-y-3">
              <h2 className="text-xs font-bold text-[#75777f] uppercase tracking-wider px-1">
                {dateGroup}
              </h2>

              <div className="space-y-2.5">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`bg-white rounded-2xl p-4 border transition-all ${
                      !item.isRead
                        ? 'border-[#041534]/30 shadow-level-1 bg-[#fbfbfc]'
                        : 'border-[#e4e2e1] shadow-xs'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          item.type === 'promo'
                            ? 'bg-[#fd6a49]/15 text-[#ae3115]'
                            : item.type === 'order'
                            ? 'bg-blue-100 text-blue-800'
                            : item.type === 'chat'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {getIcon(item.type)}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-manrope text-xs md:text-sm font-bold text-[#1b1c1c]">
                            {item.title}
                          </h3>
                          <span className="text-[10px] text-[#75777f] whitespace-nowrap">
                            {item.time}
                          </span>
                        </div>

                        <p className="font-worksans text-xs text-[#45464e] mt-1 leading-relaxed">
                          {item.message}
                        </p>

                        {/* Promo Code Pill */}
                        {item.promoCode && (
                          <div className="mt-2.5 flex items-center gap-2">
                            <span className="font-mono text-xs font-bold bg-[#fd6a49]/10 text-[#ae3115] px-2.5 py-1 rounded-md border border-[#fd6a49]/30">
                              {item.promoCode}
                            </span>
                            <button
                              onClick={() => handleCopy(item.promoCode!)}
                              className="text-[11px] font-bold text-[#041534] hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-xs">
                                {copiedCode === item.promoCode ? 'check' : 'content_copy'}
                              </span>
                              {copiedCode === item.promoCode ? 'Tersalin' : 'Salin Kode'}
                            </button>
                          </div>
                        )}

                        {/* Action buttons */}
                        {item.actionText && (
                          <div className="mt-3">
                            <button
                              onClick={() =>
                                onNavigate((item.actionScreen as ScreenType) || 'orders')
                              }
                              className="px-4 py-1.5 rounded-lg bg-[#041534] text-white text-xs font-bold hover:bg-[#1b2a4a] transition-all cursor-pointer"
                            >
                              {item.actionText}
                            </button>
                          </div>
                        )}

                        {item.image && (
                          <div
                            onClick={() => onNavigate('cart')}
                            className="mt-3 flex items-center gap-3 p-2 bg-[#fcf9f8] rounded-xl border border-[#e4e2e1] cursor-pointer hover:bg-[#f0eded]"
                          >
                            <img
                              src={item.image}
                              alt="Cart item"
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold text-[#041534]">
                                Lanjutkan Checkout Sekarang
                              </p>
                              <p className="text-[11px] text-[#75777f]">Stok hampir habis</p>
                            </div>
                            <span className="material-symbols-outlined text-sm text-[#041534]">
                              arrow_forward
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
