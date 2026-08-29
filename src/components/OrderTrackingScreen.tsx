import React, { useState } from 'react';
import { TrackingInfo, ScreenType } from '../types';

interface OrderTrackingScreenProps {
  trackingInfo: TrackingInfo;
  onNavigate: (screen: ScreenType) => void;
}

export const OrderTrackingScreen: React.FC<OrderTrackingScreenProps> = ({
  trackingInfo,
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyResi = () => {
    navigator.clipboard?.writeText(trackingInfo.trackingNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] pb-28 pt-16">
      {/* Top Header */}
      <div className="sticky top-16 z-30 bg-[#fcf9f8]/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-[#e4e2e1]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('orders')}
            className="p-1.5 rounded-full hover:bg-[#eae7e7] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 className="font-manrope text-lg md:text-xl font-bold text-[#1b1c1c]">Lacak Pesanan</h1>
        </div>
        <button
          onClick={() => onNavigate('chat')}
          className="text-xs font-semibold text-[#041534] hover:underline"
        >
          Bantuan
        </button>
      </div>

      <main className="max-w-[720px] mx-auto px-4 pt-4 md:pt-6 space-y-4">
        {/* Tracking Card Info */}
        <div className="bg-white rounded-2xl p-5 border border-[#e4e2e1] shadow-level-1 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#e4e2e1]">
            <div>
              <span className="text-[11px] font-semibold text-[#75777f]">Nomor Resi</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-manrope font-bold text-base text-[#041534]">
                  {trackingInfo.trackingNumber}
                </span>
                <button
                  onClick={handleCopyResi}
                  className="text-xs text-[#041534] hover:bg-[#f6f3f2] p-1 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                  title="Salin Nomor Resi"
                >
                  <span className="material-symbols-outlined text-sm">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span className="text-[10px] font-semibold">{copied ? 'Tersalin' : 'Salin'}</span>
                </button>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] font-semibold text-[#75777f]">Kurir</span>
              <p className="font-bold text-sm text-[#041534]">{trackingInfo.courier}</p>
            </div>
          </div>

          {/* Product Summary */}
          <div className="flex items-center justify-between gap-3 bg-[#fcf9f8] p-3 rounded-xl border border-[#e4e2e1]">
            <div className="flex items-center gap-3">
              <img
                src={trackingInfo.productImage}
                alt="Product"
                className="w-14 h-14 rounded-lg object-cover border border-[#e4e2e1] bg-white flex-shrink-0"
              />
              <div>
                <h4 className="font-worksans text-xs md:text-sm font-semibold text-[#1b1c1c] line-clamp-1">
                  {trackingInfo.productName}
                </h4>
                <p className="text-[11px] text-[#75777f]">{trackingInfo.itemCount} barang</p>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="text-[10px] text-[#75777f]">Estimasi Tiba</span>
              <p className="font-manrope font-bold text-sm text-[#ae3115]">
                {trackingInfo.estimatedArrival}
              </p>
            </div>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="bg-white rounded-2xl p-5 md:p-6 border border-[#e4e2e1] shadow-level-1">
          <h2 className="font-manrope text-base font-bold text-[#1b1c1c] mb-6">
            Status Pengiriman Terkini
          </h2>

          <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#e4e2e1]">
            {trackingInfo.steps.map((step, index) => {
              const isFirst = index === 0;

              return (
                <div key={index} className="relative group">
                  {/* Step Dot Icon */}
                  <div
                    className={`absolute -left-6 top-0 w-6 h-6 rounded-full flex items-center justify-center border-2 z-10 transition-all ${
                      isFirst
                        ? 'bg-[#041534] border-[#041534] text-white ring-4 ring-[#041534]/15'
                        : 'bg-white border-[#75777f] text-[#75777f]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[13px]">{step.icon}</span>
                  </div>

                  <div className="pl-3">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
                      <h3
                        className={`font-manrope text-xs md:text-sm font-bold ${
                          isFirst ? 'text-[#041534]' : 'text-[#1b1c1c]'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span className="text-[10px] md:text-xs text-[#75777f]">{step.time}</span>
                    </div>
                    <p className="font-worksans text-xs text-[#45464e] mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-4 border-t border-[#e4e2e1] flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={() => onNavigate('chat')}
              className="flex-1 py-2.5 rounded-xl bg-[#041534] text-white text-xs font-bold hover:bg-[#1b2a4a] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">chat</span>
              Hubungi Penjual
            </button>
            <button
              onClick={() => onNavigate('orders')}
              className="flex-1 py-2.5 rounded-xl border border-[#041534] text-[#041534] text-xs font-bold hover:bg-[#f6f3f2] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Kembali ke Pesanan
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
