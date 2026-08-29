import React, { useState } from 'react';
import { Address, ScreenType } from '../types';

interface AddressScreenProps {
  addresses: Address[];
  onSetPrimaryAddress: (id: string) => void;
  onAddAddress: (address: Omit<Address, 'id'>) => void;
  onDeleteAddress: (id: string) => void;
  onNavigate: (screen: ScreenType) => void;
}

export const AddressScreen: React.FC<AddressScreenProps> = ({
  addresses,
  onSetPrimaryAddress,
  onAddAddress,
  onDeleteAddress,
  onNavigate,
}) => {
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [formData, setFormData] = useState({
    label: 'Rumah',
    recipientName: '',
    phone: '',
    fullAddress: '',
    landmark: '',
    isPrimary: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.recipientName || !formData.phone || !formData.fullAddress) return;

    onAddAddress(formData);
    setFormData({
      label: 'Rumah',
      recipientName: '',
      phone: '',
      fullAddress: '',
      landmark: '',
      isPrimary: false,
    });
    setIsAddingNew(false);
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
          <h1 className="font-manrope text-lg md:text-xl font-bold text-[#1b1c1c]">Daftar Alamat</h1>
        </div>
        <button
          onClick={() => setIsAddingNew(true)}
          className="text-xs font-bold text-[#041534] bg-[#041534]/10 px-3 py-1.5 rounded-lg hover:bg-[#041534]/20 transition-colors cursor-pointer flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Tambah Alamat
        </button>
      </div>

      <main className="max-w-[720px] mx-auto px-4 pt-4 md:pt-6 space-y-4">
        {/* Address Add Modal/Form */}
        {isAddingNew && (
          <div className="bg-white rounded-2xl p-5 border-2 border-[#041534] shadow-level-2 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-[#e4e2e1]">
              <h2 className="font-manrope text-base font-bold text-[#041534]">Tambah Alamat Baru</h2>
              <button
                onClick={() => setIsAddingNew(false)}
                className="text-[#75777f] hover:text-[#1b1c1c]"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#45464e] mb-1">Label Alamat</label>
                <div className="flex gap-2">
                  {['Rumah', 'Kantor', 'Apartemen', 'Lainnya'].map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => setFormData({ ...formData, label: l })}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
                        formData.label === l
                          ? 'bg-[#041534] text-white border-[#041534]'
                          : 'bg-white text-[#45464e] border-[#e4e2e1]'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#45464e] mb-1">Nama Penerima</label>
                  <input
                    type="text"
                    required
                    value={formData.recipientName}
                    onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-3 py-2 border border-[#c5c6cf] rounded-xl text-xs focus:border-[#041534] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#45464e] mb-1">Nomor Telepon</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0812xxxxxxxx"
                    className="w-full px-3 py-2 border border-[#c5c6cf] rounded-xl text-xs focus:border-[#041534] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#45464e] mb-1">Alamat Lengkap</label>
                <textarea
                  required
                  rows={3}
                  value={formData.fullAddress}
                  onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
                  placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan, kota, kode pos"
                  className="w-full px-3 py-2 border border-[#c5c6cf] rounded-xl text-xs focus:border-[#041534] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#45464e] mb-1">
                  Patokan (Opsional)
                </label>
                <input
                  type="text"
                  value={formData.landmark}
                  onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                  placeholder="Cth: Depan warung ijo, pagar hitam"
                  className="w-full px-3 py-2 border border-[#c5c6cf] rounded-xl text-xs focus:border-[#041534] outline-none"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={formData.isPrimary}
                  onChange={(e) => setFormData({ ...formData, isPrimary: e.target.checked })}
                  className="rounded text-[#041534] focus:ring-[#041534]"
                />
                <span className="text-xs font-medium text-[#1b1c1c]">Jadikan Alamat Utama</span>
              </label>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddingNew(false)}
                  className="flex-1 py-2.5 rounded-xl border border-[#e4e2e1] text-xs font-semibold hover:bg-[#f6f3f2]"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#041534] text-white text-xs font-bold hover:bg-[#1b2a4a]"
                >
                  Simpan Alamat
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Addresses List */}
        <div className="space-y-3">
          {addresses.map((address) => (
            <div
              key={address.id}
              className={`bg-white rounded-2xl p-4 md:p-5 border transition-all ${
                address.isPrimary
                  ? 'border-[#041534] shadow-level-1 ring-1 ring-[#041534]/15'
                  : 'border-[#e4e2e1] shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-manrope font-bold text-sm text-[#1b1c1c]">
                    {address.label}
                  </span>
                  {address.isPrimary && (
                    <span className="bg-[#041534] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Utama
                    </span>
                  )}
                </div>

                {!address.isPrimary && (
                  <button
                    onClick={() => onSetPrimaryAddress(address.id)}
                    className="text-xs font-semibold text-[#041534] hover:underline cursor-pointer"
                  >
                    Atur Jadi Utama
                  </button>
                )}
              </div>

              <p className="font-bold text-xs md:text-sm text-[#041534]">
                {address.recipientName}{' '}
                <span className="font-normal text-[#75777f]">({address.phone})</span>
              </p>
              <p className="text-xs text-[#45464e] mt-1 leading-relaxed">{address.fullAddress}</p>
              {address.landmark && (
                <p className="text-[11px] text-[#75777f] mt-1 italic">
                  Patokan: {address.landmark}
                </p>
              )}

              <div className="pt-3 mt-3 border-t border-[#e4e2e1] flex justify-end gap-3">
                {addresses.length > 1 && !address.isPrimary && (
                  <button
                    onClick={() => onDeleteAddress(address.id)}
                    className="text-xs text-red-600 font-semibold hover:underline cursor-pointer"
                  >
                    Hapus
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
