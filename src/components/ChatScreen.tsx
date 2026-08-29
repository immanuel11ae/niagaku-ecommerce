import React, { useState } from 'react';
import { Conversation, Product, ScreenType } from '../types';

interface ChatScreenProps {
  conversations: Conversation[];
  activeConvId: string;
  onSelectConversation: (id: string) => void;
  onSendMessage: (convId: string, text: string) => void;
  onNavigate: (screen: ScreenType) => void;
  attachedProduct?: Product | null;
}

export const ChatScreen: React.FC<ChatScreenProps> = ({
  conversations,
  activeConvId,
  onSelectConversation,
  onSendMessage,
  onNavigate,
  attachedProduct,
}) => {
  const [inputText, setInputText] = useState('');
  const [mobileView, setMobileView] = useState<'list' | 'detail'>(
    activeConvId ? 'detail' : 'list'
  );

  const activeConv = conversations.find((c) => c.id === activeConvId) || conversations[0];

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;
    onSendMessage(activeConv.id, text);
    setInputText('');
  };

  const quickReplies = [
    'Apakah stok ini masih tersedia?',
    'Bisa tolong dikirim hari ini?',
    'Apakah ada garansi resminya?',
    'Terima kasih banyak kak!',
  ];

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] pb-24 pt-16 flex flex-col">
      <main className="flex-1 max-w-[1100px] w-full mx-auto px-2 sm:px-4 py-2 sm:py-4 flex gap-4 h-[calc(100vh-8.5rem)]">
        {/* Left: Conversations List (Visible on Desktop always, or Mobile list view) */}
        <div
          className={`${
            mobileView === 'detail' ? 'hidden md:flex' : 'flex'
          } w-full md:w-80 flex-col bg-white rounded-2xl border border-[#e4e2e1] shadow-level-1 overflow-hidden`}
        >
          <div className="p-4 border-b border-[#e4e2e1] bg-[#fcf9f8] flex items-center justify-between">
            <h1 className="font-manrope text-base font-bold text-[#1b1c1c]">Pesan & Chat Toko</h1>
            <span className="text-xs bg-[#041534]/10 text-[#041534] font-bold px-2 py-0.5 rounded-full">
              {conversations.length} Toko
            </span>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-[#e4e2e1]/60">
            {conversations.map((conv) => {
              const isSelected = conv.id === activeConv.id;

              return (
                <div
                  key={conv.id}
                  onClick={() => {
                    onSelectConversation(conv.id);
                    setMobileView('detail');
                  }}
                  className={`p-3.5 flex items-center gap-3 cursor-pointer transition-colors ${
                    isSelected ? 'bg-[#041534]/5 border-l-4 border-[#041534]' : 'hover:bg-[#f6f3f2]'
                  }`}
                >
                  <div className="relative flex-shrink-0">
                    <img
                      src={conv.storeAvatar}
                      alt={conv.storeName}
                      className="w-12 h-12 rounded-full object-cover border border-[#e4e2e1]"
                    />
                    {conv.isOnline && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-manrope text-xs sm:text-sm font-bold text-[#1b1c1c] truncate">
                        {conv.storeName}
                      </h3>
                      <span className="text-[10px] text-[#75777f]">{conv.lastTime}</span>
                    </div>
                    <p className="font-worksans text-xs text-[#45464e] truncate mt-0.5">
                      {conv.lastMessage}
                    </p>
                  </div>

                  {conv.unreadCount && conv.unreadCount > 0 ? (
                    <span className="w-5 h-5 bg-[#ae3115] text-white text-[10px] font-bold rounded-full flex items-center justify-center flex-shrink-0">
                      {conv.unreadCount}
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Active Chat View */}
        <div
          className={`${
            mobileView === 'list' ? 'hidden md:flex' : 'flex'
          } flex-1 flex-col bg-white rounded-2xl border border-[#e4e2e1] shadow-level-1 overflow-hidden`}
        >
          {/* Active Chat Header */}
          <div className="p-3.5 px-4 border-b border-[#e4e2e1] bg-[#fcf9f8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileView('list')}
                className="md:hidden p-1 rounded-full hover:bg-[#eae7e7] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[22px]">arrow_back</span>
              </button>

              <div className="relative">
                <img
                  src={activeConv.storeAvatar}
                  alt={activeConv.storeName}
                  className="w-10 h-10 rounded-full object-cover border border-[#e4e2e1]"
                />
                {activeConv.isOnline && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
                )}
              </div>

              <div>
                <h2 className="font-manrope text-sm font-bold text-[#1b1c1c]">
                  {activeConv.storeName}
                </h2>
                <span className="text-[11px] text-emerald-600 font-medium">
                  {activeConv.isOnline ? 'Online sekarang' : 'Offline'}
                </span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('seller-store')}
              className="text-xs font-bold text-[#041534] border border-[#041534] px-3 py-1.5 rounded-lg hover:bg-[#041534] hover:text-white transition-colors cursor-pointer"
            >
              Kunjungi Toko
            </button>
          </div>

          {/* Attached Product Box (if user came from a product detail page) */}
          {attachedProduct && (
            <div className="p-3 bg-[#041534]/5 border-b border-[#e4e2e1] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={attachedProduct.images[0]}
                  alt={attachedProduct.name}
                  className="w-12 h-12 rounded-lg object-cover border border-[#e4e2e1] bg-white flex-shrink-0"
                />
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold text-[#ae3115]">
                    Sedang Dilihat
                  </span>
                  <h4 className="font-worksans text-xs font-semibold text-[#1b1c1c] truncate">
                    {attachedProduct.name}
                  </h4>
                  <p className="font-manrope text-xs font-bold text-[#041534]">
                    {formatRupiah(attachedProduct.price)}
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  handleSend(`Halo min, apakah produk "${attachedProduct.name}" ini masih ready stok?`)
                }
                className="text-xs font-bold bg-[#041534] text-white px-3 py-1.5 rounded-lg hover:bg-[#1b2a4a] whitespace-nowrap cursor-pointer"
              >
                Tanya Produk
              </button>
            </div>
          )}

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fcf9f8]">
            {activeConv.messages.map((msg) => {
              const isMe = msg.sender === 'user';

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                >
                  {/* Product Attachment inside message if any */}
                  {msg.productAttachment && (
                    <div className="mb-2 p-2.5 bg-white rounded-xl border border-[#e4e2e1] shadow-xs flex items-center gap-2.5 max-w-[280px]">
                      <img
                        src={msg.productAttachment.image}
                        alt={msg.productAttachment.name}
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-[#1b1c1c] truncate">
                          {msg.productAttachment.name}
                        </p>
                        <p className="text-xs font-bold text-[#ae3115]">
                          {formatRupiah(msg.productAttachment.price)}
                        </p>
                      </div>
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] md:max-w-[70%] p-3.5 rounded-2xl text-xs md:text-sm leading-relaxed shadow-xs ${
                      isMe
                        ? 'bg-[#041534] text-white rounded-br-xs'
                        : 'bg-white text-[#1b1c1c] border border-[#e4e2e1] rounded-bl-xs'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span
                      className={`block text-[10px] mt-1 text-right ${
                        isMe ? 'text-white/70' : 'text-[#75777f]'
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Replies */}
          <div className="px-4 py-2 bg-white border-t border-[#e4e2e1] flex overflow-x-auto hide-scrollbar gap-2">
            {quickReplies.map((qr, i) => (
              <button
                key={i}
                onClick={() => handleSend(qr)}
                className="whitespace-nowrap text-[11px] font-medium bg-[#f6f3f2] text-[#041534] hover:bg-[#eae7e7] px-3 py-1 rounded-full border border-[#e4e2e1] transition-colors cursor-pointer"
              >
                {qr}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-white border-t border-[#e4e2e1] flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder="Ketik pesan untuk penjual..."
              className="flex-1 px-4 py-2.5 rounded-xl border border-[#c5c6cf] text-xs md:text-sm font-worksans focus:border-[#041534] outline-none"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputText.trim()}
              className={`p-2.5 rounded-xl transition-all flex items-center justify-center cursor-pointer ${
                inputText.trim()
                  ? 'bg-[#041534] text-white hover:bg-[#1b2a4a]'
                  : 'bg-[#e4e2e1] text-[#75777f] cursor-not-allowed'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
