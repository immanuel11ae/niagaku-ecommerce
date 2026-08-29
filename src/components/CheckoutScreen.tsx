import React, { useState } from 'react';
import { CartItem, Address, Order, ScreenType } from '../types';

interface CheckoutScreenProps {
  items: CartItem[];
  addresses: Address[];
  onPlaceOrder: (order: Order) => void;
  onNavigate: (screen: ScreenType) => void;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({
  items,
  addresses,
  onPlaceOrder,
  onNavigate,
}) => {
  const selectedAddress = addresses.find((a) => a.isPrimary) || addresses[0];
  const [shippingOption, setShippingOption] = useState({
    name: 'JNE Reguler',
    cost: 25000,
    estimate: '2-3 hari',
  });
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'ewallet' | 'cod'>('bank');
  const [selectedBank, setSelectedBank] = useState('BCA Virtual Account');
  const [voucherCode, setVoucherCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; amount: number } | null>(
    null
  );
  const [voucherError, setVoucherError] = useState('');

  const formatRupiah = (val: number) => {
    return 'Rp ' + val.toLocaleString('id-ID');
  };

  const productSubtotal = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const serviceFee = 1000;
  const discountAmount = appliedDiscount ? appliedDiscount.amount : 0;
  const grandTotal = Math.max(0, productSubtotal + shippingOption.cost + serviceFee - discountAmount);

  const handleApplyVoucher = (codeToApply?: string) => {
    const code = (codeToApply || voucherCode).trim().toUpperCase();
    setVoucherError('');

    if (code === 'NIAGAKU50') {
      setAppliedDiscount({ code: 'NIAGAKU50', amount: 50000 });
      setVoucherCode('NIAGAKU50');
    } else if (code === 'GRATISONGKIR') {
      setAppliedDiscount({ code: 'GRATISONGKIR', amount: shippingOption.cost });
      setVoucherCode('GRATISONGKIR');
    } else if (code === 'DISKON10') {
      setAppliedDiscount({ code: 'DISKON10', amount: Math.round(productSubtotal * 0.1) });
      setVoucherCode('DISKON10');
    } else {
      setVoucherError('Kode voucher tidak valid atau sudah kadaluarsa.');
    }
  };

  const handleCreateOrder = () => {
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber: `ORD-${Math.floor(1000000 + Math.random() * 9000000)}`,
      storeName: items[0]?.storeName || 'Niagaku Merchant',
      status: 'Diproses',
      items: items.map((i) => ({
        name: i.name,
        variant: i.variant,
        price: i.price,
        quantity: i.quantity,
        image: i.image,
      })),
      totalPrice: grandTotal,
      shippingMethod: shippingOption.name,
      shippingCost: shippingOption.cost,
      date: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      trackingNumber: `JNE${Math.floor(10000000 + Math.random() * 90000000)}`,
    };

    onPlaceOrder(newOrder);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] pb-32 pt-16">
      {/* Top Bar */}
      <div className="sticky top-16 z-30 bg-[#fcf9f8]/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-[#e4e2e1]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('cart')}
            className="p-1.5 rounded-full hover:bg-[#eae7e7] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 className="font-manrope text-lg md:text-xl font-bold text-[#1b1c1c]">
            Pengiriman & Pembayaran
          </h1>
        </div>
      </div>

      <main className="max-w-[760px] mx-auto px-4 pt-4 md:pt-6 space-y-4">
        {/* Alamat Pengiriman */}
        <section className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-[#041534]">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
              <h2 className="font-manrope text-sm md:text-base font-bold">Alamat Pengiriman</h2>
            </div>
            <button
              onClick={() => onNavigate('address')}
              className="text-xs font-semibold text-[#ae3115] hover:underline cursor-pointer"
            >
              Ubah Alamat
            </button>
          </div>

          {selectedAddress ? (
            <div className="p-3 bg-[#fcf9f8] rounded-xl border border-[#e4e2e1] text-xs md:text-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-[#1b1c1c]">{selectedAddress.recipientName}</span>
                <span className="text-[#75777f]">({selectedAddress.phone})</span>
                {selectedAddress.isPrimary && (
                  <span className="bg-[#041534]/10 text-[#041534] text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Utama
                  </span>
                )}
              </div>
              <p className="text-[#45464e] leading-relaxed">{selectedAddress.fullAddress}</p>
              {selectedAddress.landmark && (
                <p className="text-[11px] text-[#75777f] mt-1 italic">
                  Patokan: {selectedAddress.landmark}
                </p>
              )}
            </div>
          ) : (
            <button
              onClick={() => onNavigate('address')}
              className="w-full py-3 border-2 border-dashed border-[#c5c6cf] rounded-xl text-xs font-semibold text-[#041534] hover:bg-[#f6f3f2]"
            >
              + Tambah Alamat Baru
            </button>
          )}
        </section>

        {/* Ringkasan Produk */}
        <section className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1 space-y-3">
          <h2 className="font-manrope text-sm md:text-base font-bold text-[#1b1c1c] flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#041534]">
              shopping_bag
            </span>
            Produk Dipesan ({items.length})
          </h2>

          <div className="divide-y divide-[#e4e2e1]">
            {items.map((item) => (
              <div key={item.id} className="py-2.5 first:pt-0 flex gap-3 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-lg object-cover border border-[#e4e2e1] flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-worksans text-xs md:text-sm font-medium text-[#1b1c1c] truncate">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-[#75777f] mt-1">
                    <span>
                      {item.variant} • {item.quantity}x
                    </span>
                    <span className="font-bold text-[#041534]">
                      {formatRupiah(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Opsi Pengiriman */}
        <section className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1">
          <h2 className="font-manrope text-sm md:text-base font-bold text-[#1b1c1c] mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#041534]">
              local_shipping
            </span>
            Opsi Pengiriman
          </h2>

          <div className="space-y-2">
            {[
              { name: 'JNE Reguler', cost: 25000, estimate: '2-3 hari kerja' },
              { name: 'SiCepat Best', cost: 35000, estimate: '1-2 hari kerja (Express)' },
              { name: 'Hemat Cargo', cost: 15000, estimate: '4-5 hari kerja' },
            ].map((opt) => (
              <label
                key={opt.name}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                  shippingOption.name === opt.name
                    ? 'border-[#041534] bg-[#041534]/5 ring-1 ring-[#041534]'
                    : 'border-[#e4e2e1] bg-white hover:border-[#c5c6cf]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingOption.name === opt.name}
                    onChange={() => setShippingOption(opt)}
                    className="text-[#041534] focus:ring-[#041534]"
                  />
                  <div>
                    <p className="font-bold text-xs md:text-sm text-[#1b1c1c]">{opt.name}</p>
                    <p className="text-[11px] text-[#75777f]">Estimasi tiba: {opt.estimate}</p>
                  </div>
                </div>
                <span className="font-manrope font-bold text-xs md:text-sm text-[#041534]">
                  {formatRupiah(opt.cost)}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Metode Pembayaran */}
        <section className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1">
          <h2 className="font-manrope text-sm md:text-base font-bold text-[#1b1c1c] mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#041534]">
              account_balance_wallet
            </span>
            Metode Pembayaran
          </h2>

          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { id: 'bank', label: 'Virtual Account', icon: 'account_balance' },
              { id: 'ewallet', label: 'E-Wallet / QRIS', icon: 'qr_code_scanner' },
              { id: 'cod', label: 'COD (Bayar di Tempat)', icon: 'payments' },
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setPaymentMethod(m.id as any)}
                className={`p-3 rounded-xl border text-center flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                  paymentMethod === m.id
                    ? 'border-[#041534] bg-[#041534] text-white shadow-xs'
                    : 'border-[#e4e2e1] bg-white text-[#45464e] hover:border-[#041534]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{m.icon}</span>
                <span className="text-[10px] md:text-xs font-semibold">{m.label}</span>
              </button>
            ))}
          </div>

          {paymentMethod === 'bank' && (
            <div className="space-y-1.5 pt-2">
              {['BCA Virtual Account', 'Mandiri Virtual Account', 'BRI Virtual Account', 'BNI Virtual Account'].map(
                (bank) => (
                  <label
                    key={bank}
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-[#e4e2e1] bg-[#fcf9f8] cursor-pointer text-xs font-medium"
                  >
                    <input
                      type="radio"
                      name="bank"
                      checked={selectedBank === bank}
                      onChange={() => setSelectedBank(bank)}
                      className="text-[#041534] focus:ring-[#041534]"
                    />
                    <span>{bank}</span>
                  </label>
                )
              )}
            </div>
          )}
        </section>

        {/* Voucher Promo */}
        <section className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1">
          <h2 className="font-manrope text-sm md:text-base font-bold text-[#1b1c1c] mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#FF6B4A]">
              confirmation_number
            </span>
            Voucher & Promo
          </h2>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Masukkan kode promo (cth: NIAGAKU50)"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
              className="flex-1 px-3 py-2 border border-[#c5c6cf] rounded-xl text-xs uppercase font-semibold focus:border-[#041534] outline-none"
            />
            <button
              onClick={() => handleApplyVoucher()}
              className="px-4 py-2 bg-[#041534] text-white rounded-xl text-xs font-bold hover:bg-[#1b2a4a] transition-all cursor-pointer"
            >
              Gunakan
            </button>
          </div>

          {voucherError && <p className="text-[11px] text-red-600 mt-1.5">{voucherError}</p>}

          {appliedDiscount && (
            <div className="mt-2.5 p-2.5 bg-green-50 border border-green-200 rounded-xl flex items-center justify-between text-xs text-green-800">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span>Voucher <strong>{appliedDiscount.code}</strong> berhasil terpasang (-{formatRupiah(appliedDiscount.amount)})</span>
              </div>
              <button
                onClick={() => {
                  setAppliedDiscount(null);
                  setVoucherCode('');
                }}
                className="text-red-600 font-bold hover:underline"
              >
                Batal
              </button>
            </div>
          )}

          {/* Quick voucher buttons */}
          <div className="flex flex-wrap gap-2 mt-3 pt-2 border-t border-[#e4e2e1]/60">
            <span className="text-[11px] text-[#75777f] w-full">Voucher Rekomendasi:</span>
            <button
              onClick={() => handleApplyVoucher('NIAGAKU50')}
              className="text-[11px] font-semibold bg-[#fd6a49]/10 text-[#ae3115] border border-[#fd6a49]/30 px-2.5 py-1 rounded-lg hover:bg-[#fd6a49]/20"
            >
              NIAGAKU50 (Hemat Rp 50.000)
            </button>
            <button
              onClick={() => handleApplyVoucher('GRATISONGKIR')}
              className="text-[11px] font-semibold bg-[#00a493]/10 text-[#00a493] border border-[#00a493]/30 px-2.5 py-1 rounded-lg hover:bg-[#00a493]/20"
            >
              GRATISONGKIR
            </button>
          </div>
        </section>

        {/* Rincian Pembayaran Breakdown */}
        <section className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1 space-y-2 text-xs md:text-sm">
          <h2 className="font-manrope text-sm md:text-base font-bold text-[#1b1c1c] pb-2 border-b border-[#e4e2e1]">
            Rincian Pembayaran
          </h2>

          <div className="flex justify-between text-[#45464e]">
            <span>Subtotal Produk</span>
            <span>{formatRupiah(productSubtotal)}</span>
          </div>

          <div className="flex justify-between text-[#45464e]">
            <span>Subtotal Pengiriman ({shippingOption.name})</span>
            <span>{formatRupiah(shippingOption.cost)}</span>
          </div>

          <div className="flex justify-between text-[#45464e]">
            <span>Biaya Layanan Sistem</span>
            <span>{formatRupiah(serviceFee)}</span>
          </div>

          {appliedDiscount && (
            <div className="flex justify-between text-green-700 font-semibold">
              <span>Diskon Promo ({appliedDiscount.code})</span>
              <span>- {formatRupiah(appliedDiscount.amount)}</span>
            </div>
          )}

          <div className="pt-3 border-t border-[#e4e2e1] flex justify-between items-baseline font-bold">
            <span className="text-[#1b1c1c] text-sm md:text-base">Total Tagihan</span>
            <span className="font-manrope text-lg md:text-xl text-[#041534]">
              {formatRupiah(grandTotal)}
            </span>
          </div>
        </section>
      </main>

      {/* Sticky Bottom Order Button */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-[#e4e2e1] p-3 px-4 md:px-8 shadow-checkout">
        <div className="max-w-[760px] mx-auto flex items-center justify-between">
          <div>
            <span className="text-xs text-[#75777f]">Total Pembayaran</span>
            <p className="font-manrope text-base md:text-xl font-extrabold text-[#041534]">
              {formatRupiah(grandTotal)}
            </p>
          </div>

          <button
            id="btn-place-order"
            onClick={handleCreateOrder}
            className="py-3 px-8 rounded-xl bg-[#041534] text-white font-manrope text-xs md:text-sm font-bold hover:bg-[#1b2a4a] transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span>Buat Pesanan</span>
          </button>
        </div>
      </div>
    </div>
  );
};
