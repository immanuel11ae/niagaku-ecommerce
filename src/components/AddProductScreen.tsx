import React, { useState } from 'react';
import { Product, ScreenType } from '../types';

interface AddProductScreenProps {
  onAddProduct: (product: Product) => void;
  onNavigate: (screen: ScreenType) => void;
}

export const AddProductScreen: React.FC<AddProductScreenProps> = ({
  onAddProduct,
  onNavigate,
}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Fashion');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('50');
  const [description, setDescription] = useState('');
  const [weight, setWeight] = useState('500');
  const [imageUrl, setImageUrl] = useState(
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCQkWHr6yIXXo5wFZpMbKRjqnYdzwMXfSa2HaJyKaW1PigU-_TkilgSGFmQWRbXEhV-vBQ4wR09ouKprBDqfYYq1HXUfsXvErNuxYgi2BI2aT3d4W1M0TJtLU0PEMYoBz_EIBNvocnYPS3HRepVmA1qeVItSw_ZpCu8JIwihK6fusEjZ-2EhYDxaD8O-bKKrkzlTlRL1ydixPCldP_OmjRuS9LgBYqQzhxvjNX7Q-QhCwqDoYJCpAhg'
  );
  const [variantsList, setVariantsList] = useState<string[]>(['Hitam', 'Putih', 'Navy']);
  const [newVariantInput, setNewVariantInput] = useState('');

  const handleAddVariant = () => {
    if (!newVariantInput.trim()) return;
    setVariantsList([...variantsList, newVariantInput.trim()]);
    setNewVariantInput('');
  };

  const handleRemoveVariant = (idx: number) => {
    setVariantsList(variantsList.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) return;

    const newProduct: Product = {
      id: `prod-custom-${Date.now()}`,
      name: name,
      price: Number(price),
      category: category,
      rating: 5.0,
      reviewCount: 0,
      salesCount: 0,
      location: 'Jakarta Selatan',
      images: [
        imageUrl ||
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCQkWHr6yIXXo5wFZpMbKRjqnYdzwMXfSa2HaJyKaW1PigU-_TkilgSGFmQWRbXEhV-vBQ4wR09ouKprBDqfYYq1HXUfsXvErNuxYgi2BI2aT3d4W1M0TJtLU0PEMYoBz_EIBNvocnYPS3HRepVmA1qeVItSw_ZpCu8JIwihK6fusEjZ-2EhYDxaD8O-bKKrkzlTlRL1ydixPCldP_OmjRuS9LgBYqQzhxvjNX7Q-QhCwqDoYJCpAhg',
      ],
      stock: Number(stock) || 10,
      description: description || 'Produk berkualitas tinggi dari toko kami.',
      specs: {
        'Kategori': category,
        'Berat Pengiriman': `${weight} gram`,
        'Kondisi': 'Baru 100% Original',
      },
      variants: variantsList.length > 0 ? variantsList : ['Standar'],
      storeName: 'Gaya Hidup Premium Official',
      storeAvatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBWCEA50K6quLMdF1urUJIaxYxSkVxYl4tCeZFHvlOybRmI2lktE_P7NNpajc1gGz8pzajjQWwHmt67L52GTKHdkZRcRu3IPazHWam6Sx5R3Po6K7cz7xGyEcrFlAPyB0TBaOfzaXYmCuQsmwIEtxj1m0tG9rq7gEeNhaUJ-ourofmSJgwk_jg0rWLTr0mAyxxomQP48K_dNuLHkOZ-72T_zWMOcmpHO5xcheRCHHduf4pdkgwAawrh',
      storeRating: 4.9,
    };

    onAddProduct(newProduct);
    onNavigate('seller-dashboard');
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1b1c1c] pb-32 pt-16">
      {/* Top Header */}
      <div className="sticky top-16 z-30 bg-[#fcf9f8]/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-[#e4e2e1]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('seller-dashboard')}
            className="p-1.5 rounded-full hover:bg-[#eae7e7] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </button>
          <h1 className="font-manrope text-lg md:text-xl font-bold text-[#1b1c1c]">
            Tambah Produk Baru
          </h1>
        </div>
      </div>

      <main className="max-w-[760px] mx-auto px-4 pt-4 md:pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Media Upload Slots */}
          <div className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1 space-y-3">
            <h2 className="font-manrope text-sm font-bold text-[#1b1c1c]">Foto & Video Produk</h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {/* Main Photo Box */}
              <div className="aspect-square rounded-xl border-2 border-dashed border-[#041534] bg-[#041534]/5 flex flex-col items-center justify-center p-2 text-center relative overflow-hidden group">
                {imageUrl ? (
                  <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[#041534] text-2xl">
                      add_a_photo
                    </span>
                    <span className="text-[10px] font-bold text-[#041534] mt-1">Foto Utama</span>
                  </>
                )}
              </div>

              {/* Slot 2 */}
              <div className="aspect-square rounded-xl border border-dashed border-[#c5c6cf] bg-[#fcf9f8] flex flex-col items-center justify-center p-2 text-center text-[#75777f]">
                <span className="material-symbols-outlined text-xl">add_photo_alternate</span>
                <span className="text-[10px] mt-1">Tambah Foto</span>
              </div>

              {/* Slot 3 */}
              <div className="aspect-square rounded-xl border border-dashed border-[#c5c6cf] bg-[#fcf9f8] flex flex-col items-center justify-center p-2 text-center text-[#75777f]">
                <span className="material-symbols-outlined text-xl">videocam</span>
                <span className="text-[10px] mt-1">Tambah Video</span>
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-xs font-semibold text-[#75777f] mb-1">
                URL Foto Produk (Hotlink Image)
              </label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-1.5 border border-[#c5c6cf] rounded-xl text-xs outline-none focus:border-[#041534]"
              />
            </div>
          </div>

          {/* Informasi Dasar */}
          <div className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1 space-y-3">
            <h2 className="font-manrope text-sm font-bold text-[#1b1c1c]">Informasi Dasar</h2>

            <div>
              <label className="block text-xs font-bold text-[#45464e] mb-1">
                Nama Produk <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Kemeja Formal Pria Katun Oxford"
                className="w-full px-3 py-2 border border-[#c5c6cf] rounded-xl text-xs md:text-sm outline-none focus:border-[#041534]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#45464e] mb-1">Kategori</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-[#c5c6cf] rounded-xl text-xs md:text-sm outline-none focus:border-[#041534] bg-white cursor-pointer"
                >
                  <option value="Fashion">Fashion & Pakaian</option>
                  <option value="Elektronik">Elektronik & Gadget</option>
                  <option value="Rumah">Rumah & Dekorasi</option>
                  <option value="Kuliner">Kuliner & Kopi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#45464e] mb-1">
                  Harga Satuan (Rp) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Contoh: 250000"
                  className="w-full px-3 py-2 border border-[#c5c6cf] rounded-xl text-xs md:text-sm outline-none focus:border-[#041534]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#45464e] mb-1">Jumlah Stok</label>
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                placeholder="50"
                className="w-full px-3 py-2 border border-[#c5c6cf] rounded-xl text-xs md:text-sm outline-none focus:border-[#041534]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#45464e] mb-1">
                Deskripsi Lengkap
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Jelaskan keunggulan produk, bahan, ukuran, dan cara perawatan..."
                className="w-full px-3 py-2 border border-[#c5c6cf] rounded-xl text-xs md:text-sm outline-none focus:border-[#041534]"
              />
            </div>
          </div>

          {/* Varian Produk */}
          <div className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1 space-y-3">
            <h2 className="font-manrope text-sm font-bold text-[#1b1c1c]">Varian Produk</h2>

            <div className="flex flex-wrap gap-2 mb-2">
              {variantsList.map((v, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 bg-[#f6f3f2] text-[#041534] font-semibold text-xs px-3 py-1.5 rounded-lg border border-[#e4e2e1]"
                >
                  {v}
                  <button
                    type="button"
                    onClick={() => handleRemoveVariant(idx)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newVariantInput}
                onChange={(e) => setNewVariantInput(e.target.value)}
                placeholder="Tambah nama varian (cth: Ukuran XL, Merah Maroon)"
                className="flex-1 px-3 py-1.5 border border-[#c5c6cf] rounded-xl text-xs outline-none focus:border-[#041534]"
              />
              <button
                type="button"
                onClick={handleAddVariant}
                className="px-4 py-1.5 bg-[#041534] text-white rounded-xl text-xs font-bold hover:bg-[#1b2a4a] cursor-pointer"
              >
                Tambah
              </button>
            </div>
          </div>

          {/* Pengiriman & Dimensi */}
          <div className="bg-white rounded-2xl p-4 md:p-5 border border-[#e4e2e1] shadow-level-1 space-y-3">
            <h2 className="font-manrope text-sm font-bold text-[#1b1c1c]">Pengiriman & Berat</h2>
            <div>
              <label className="block text-xs font-bold text-[#45464e] mb-1">
                Berat Paket (gram)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="500"
                className="w-full px-3 py-2 border border-[#c5c6cf] rounded-xl text-xs md:text-sm outline-none focus:border-[#041534]"
              />
            </div>
          </div>

          {/* Sticky Bottom Actions */}
          <div className="fixed bottom-0 left-0 w-full z-40 bg-white border-t border-[#e4e2e1] p-3 px-4 md:px-8 shadow-checkout">
            <div className="max-w-[760px] mx-auto flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => onNavigate('seller-dashboard')}
                className="px-6 py-2.5 rounded-xl border border-[#e4e2e1] text-xs font-bold hover:bg-[#f6f3f2]"
              >
                Batal
              </button>
              <button
                type="submit"
                className="flex-1 py-3 rounded-xl bg-[#041534] text-white font-manrope text-xs md:text-sm font-bold hover:bg-[#1b2a4a] transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Simpan & Terbitkan Produk
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};
