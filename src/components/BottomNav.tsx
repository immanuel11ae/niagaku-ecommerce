import React from 'react';
import { ScreenType } from '../types';

interface BottomNavProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  unreadNotifsCount?: number;
  unreadChatCount?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentScreen,
  onNavigate,
  unreadNotifsCount = 2,
  unreadChatCount = 2,
}) => {
  // Hide bottom nav on full transactional/checkout screens when necessary, or keep persistent
  const isNavHidden = currentScreen === 'checkout';

  if (isNavHidden) {
    return null;
  }

  const isHomeActive = currentScreen === 'home';
  const isCategoryActive = currentScreen === 'category';
  const isChatActive = currentScreen === 'chat';
  const isNotifActive = currentScreen === 'notifications';
  const isAccountActive =
    currentScreen === 'profile' ||
    currentScreen === 'orders' ||
    currentScreen === 'address' ||
    currentScreen === 'wishlist' ||
    currentScreen === 'seller-dashboard' ||
    currentScreen === 'add-product' ||
    currentScreen === 'seller-store' ||
    currentScreen === 'tracking';

  return (
    <nav
      id="bottom-nav-bar"
      className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 py-2.5 pb-safe bg-[#fcf9f8] border-t border-[#e4e2e1] shadow-[0_-4px_20px_rgba(27,42,74,0.04)] rounded-t-2xl backdrop-blur-md"
    >
      {/* Home Tab */}
      <button
        id="nav-tab-home"
        onClick={() => onNavigate('home')}
        className={`flex flex-col items-center justify-center transition-all duration-200 px-3 py-1 rounded-xl cursor-pointer ${
          isHomeActive
            ? 'text-[#ae3115] bg-[#fd6a49]/10 font-bold scale-105'
            : 'text-[#45464e] hover:bg-[#eae7e7] active:scale-90'
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          data-icon="home"
          style={isHomeActive ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          home
        </span>
        <span className="font-worksans text-[11px] mt-0.5">Home</span>
      </button>

      {/* Category Tab */}
      <button
        id="nav-tab-category"
        onClick={() => onNavigate('category')}
        className={`flex flex-col items-center justify-center transition-all duration-200 px-3 py-1 rounded-xl cursor-pointer ${
          isCategoryActive
            ? 'text-[#ae3115] bg-[#fd6a49]/10 font-bold scale-105'
            : 'text-[#45464e] hover:bg-[#eae7e7] active:scale-90'
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          data-icon="category"
          style={isCategoryActive ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          category
        </span>
        <span className="font-worksans text-[11px] mt-0.5">Kategori</span>
      </button>

      {/* Chat Tab */}
      <button
        id="nav-tab-chat"
        onClick={() => onNavigate('chat')}
        className={`flex flex-col items-center justify-center transition-all duration-200 px-3 py-1 rounded-xl relative cursor-pointer ${
          isChatActive
            ? 'text-[#ae3115] bg-[#fd6a49]/10 font-bold scale-105'
            : 'text-[#45464e] hover:bg-[#eae7e7] active:scale-90'
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          data-icon="chat"
          style={isChatActive ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          chat
        </span>
        <span className="font-worksans text-[11px] mt-0.5">Chat</span>
        {unreadChatCount > 0 && (
          <span className="absolute top-1 right-2 w-2.5 h-2.5 bg-[#ae3115] rounded-full border-2 border-[#fcf9f8]" />
        )}
      </button>

      {/* Notifications Tab */}
      <button
        id="nav-tab-notifications"
        onClick={() => onNavigate('notifications')}
        className={`flex flex-col items-center justify-center transition-all duration-200 px-3 py-1 rounded-xl relative cursor-pointer ${
          isNotifActive
            ? 'text-[#ae3115] bg-[#fd6a49]/10 font-bold scale-105'
            : 'text-[#45464e] hover:bg-[#eae7e7] active:scale-90'
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          data-icon="notifications"
          style={isNotifActive ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          notifications
        </span>
        <span className="font-worksans text-[11px] mt-0.5">Notifikasi</span>
        {unreadNotifsCount > 0 && (
          <span className="absolute top-1 right-2 w-2.5 h-2.5 bg-[#ae3115] rounded-full border-2 border-[#fcf9f8]" />
        )}
      </button>

      {/* Account Tab */}
      <button
        id="nav-tab-account"
        onClick={() => onNavigate('profile')}
        className={`flex flex-col items-center justify-center transition-all duration-200 px-3 py-1 rounded-xl cursor-pointer ${
          isAccountActive
            ? 'text-[#ae3115] bg-[#fd6a49]/10 font-bold scale-105'
            : 'text-[#45464e] hover:bg-[#eae7e7] active:scale-90'
        }`}
      >
        <span
          className="material-symbols-outlined text-[24px]"
          data-icon="person"
          style={isAccountActive ? { fontVariationSettings: "'FILL' 1" } : {}}
        >
          person
        </span>
        <span className="font-worksans text-[11px] mt-0.5">Akun</span>
      </button>
    </nav>
  );
};
