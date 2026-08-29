import React, { useState } from 'react';
import {
  ScreenType,
  Product,
  CartItem,
  Address,
  Order,
  TrackingInfo,
  NotificationItem,
  Conversation,
} from './types';
import {
  INITIAL_PRODUCTS,
  INITIAL_ADDRESSES,
  INITIAL_ORDERS,
  INITIAL_TRACKING,
  INITIAL_NOTIFICATIONS,
  INITIAL_CONVERSATIONS,
  INITIAL_SELLER_PRODUCTS,
} from './data/mockData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { CategoryScreen } from './components/CategoryScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { CartScreen } from './components/CartScreen';
import { CheckoutScreen } from './components/CheckoutScreen';
import { OrdersListScreen } from './components/OrdersListScreen';
import { OrderTrackingScreen } from './components/OrderTrackingScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { AddressScreen } from './components/AddressScreen';
import { WishlistScreen } from './components/WishlistScreen';
import { NotificationsScreen } from './components/NotificationsScreen';
import { ChatScreen } from './components/ChatScreen';
import { SellerDashboardScreen } from './components/SellerDashboardScreen';
import { AddProductScreen } from './components/AddProductScreen';
import { SellerStoreScreen } from './components/SellerStoreScreen';

export function App() {
  // Navigation State
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('Fashion');

  // Products Data
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState<Product>(INITIAL_PRODUCTS[0]);

  // Cart State (Pre-populated with 2 items matching Image 5)
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 'cart-1',
      productId: 'prod-mug-keramik',
      name: 'Mug Keramik Minimalis Warm Cream',
      price: 125000,
      variant: 'Krem Hangat',
      quantity: 2,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAJbajhby6aW5bU3-zHtIMMarzQMmYz5bqplOcM5WinextXe_Xsl-k0vciQO413gdu3iy0KImXBBKhOiW73d6qhm5y2DcWSlaYO842vp6i-5VL22mX-XA6RNHbkkCX06958SjIQTYbJhFduglyckK9EYyN8MiO6nU5jUjKERHmHzCEqTu8JKSflmr0Je6dFdIOD-TNa9pgG1xBzvSSQChyvcbqHDWH5EXXBy-PWhqHSfMTorW6XR8BG',
      storeName: 'Boutique Artisan',
      selected: true,
    },
    {
      id: 'cart-2',
      productId: 'prod-wireless-headphones',
      name: 'Wireless Headphones X-Series Noise Canceling',
      price: 899000,
      variant: 'Matte Black',
      quantity: 1,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC1elQQyUYdwFCudM1rglwk5HG3MfgnD1Z3229fJhGCTAOi32Wgd8Q1_4DSOOEUfjGHftWn1ILkYK20ioX13dGnsvLXnV5yhQh9bYNkMpuYGXehxD6L3VOHotS-Vh3b63A3ugZ3TtSxS0fxnviw8LgO39_wlGVvwiYzr5xI6WzPQxXmriHslbImsKAl9OZyQ-s6ylWNrYKA4Fsx_5qxrC9k3tGz5OvT5G38xwaVUX29wkowPaPRkepP',
      storeName: 'Tech & Lifestyle Co.',
      selected: true,
    },
  ]);

  // Wishlist State
  const [wishlist, setWishlist] = useState<Product[]>([
    INITIAL_PRODUCTS[0],
    INITIAL_PRODUCTS[2],
    INITIAL_PRODUCTS[3],
  ]);

  // Addresses State
  const [addresses, setAddresses] = useState<Address[]>(INITIAL_ADDRESSES);

  // Orders State
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo>(INITIAL_TRACKING);

  // Notifications State
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);

  // Chat State
  const [conversations, setConversations] = useState<Conversation[]>(INITIAL_CONVERSATIONS);
  const [activeConvId, setActiveConvId] = useState<string>(INITIAL_CONVERSATIONS[0].id);
  const [attachedProductForChat, setAttachedProductForChat] = useState<Product | null>(null);

  // Seller Products State
  const [sellerProducts, setSellerProducts] = useState(INITIAL_SELLER_PRODUCTS);

  // Search State
  const [searchQuery, setSearchQuery] = useState('');

  // Global Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  // Handlers
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentScreen('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, variant: string, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.productId === product.id && item.variant === variant
      );
      if (existing) {
        return prev.map((item) =>
          item.id === existing.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      const newItem: CartItem = {
        id: `cart-${Date.now()}-${Math.random()}`,
        productId: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        variant: variant || 'Standar',
        quantity: quantity,
        image: product.images[0],
        storeName: product.storeName,
        selected: true,
      };
      return [newItem, ...prev];
    });
    showToast(`"${product.name.slice(0, 24)}..." ditambahkan ke keranjang!`);
  };

  const handleBuyNow = (product: Product, variant: string, quantity: number) => {
    handleAddToCart(product, variant, quantity);
    setCurrentScreen('checkout');
  };

  const handleToggleWishlist = (product: Product) => {
    const exists = wishlist.some((p) => p.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter((p) => p.id !== product.id));
      showToast('Dihapus dari Wishlist');
    } else {
      setWishlist([product, ...wishlist]);
      showToast('Ditambahkan ke Wishlist');
    }
  };

  const handleUpdateCartQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveCartItem(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast('Barang dihapus dari keranjang');
  };

  const handleToggleCartSelect = (id: string) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item))
    );
  };

  const handleToggleCartSelectAll = () => {
    const allSelected = cart.every((item) => item.selected);
    setCart((prev) => prev.map((item) => ({ ...item, selected: !allSelected })));
  };

  const handlePlaceOrder = (newOrder: Order) => {
    setOrders([newOrder, ...orders]);
    // Clear purchased items from cart
    setCart((prev) => prev.filter((item) => !item.selected));

    // Update tracking info with new order
    setTrackingInfo({
      trackingNumber: newOrder.trackingNumber || 'JNE99887766',
      courier: newOrder.shippingMethod,
      productName: newOrder.items[0]?.name || 'Pesanan Niagaku',
      productImage: newOrder.items[0]?.image || '',
      itemCount: newOrder.items.reduce((a, c) => a + c.quantity, 0),
      estimatedArrival: '3 hari lagi',
      steps: [
        {
          title: 'Pesanan berhasil dibuat & diverifikasi',
          description: 'Pembayaran telah diterima oleh sistem Niagaku secara aman.',
          time: 'Baru saja',
          completed: true,
          active: true,
          icon: 'receipt',
        },
        {
          title: 'Menunggu konfirmasi & pengemasan penjual',
          description: 'Penjual sedang menyiapkan barang pesanan Anda.',
          time: 'Diproses',
          completed: false,
          icon: 'inventory_2',
        },
      ],
    });

    // Add notification
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: 'Pesanan Baru Berhasil Dibuat!',
      message: `Pesanan #${newOrder.orderNumber} senilai Rp ${newOrder.totalPrice.toLocaleString('id-ID')} sedang disiapkan oleh penjual.`,
      time: 'Baru saja',
      type: 'order',
      isRead: false,
      actionText: 'Lacak Pesanan',
      actionScreen: 'tracking',
      dateGroup: 'Hari Ini',
    };
    setNotifications([newNotif, ...notifications]);

    showToast('Pesanan berhasil dibuat!');
    setCurrentScreen('tracking');
  };

  const handleSelectOrderToTrack = (order: Order) => {
    setTrackingInfo({
      trackingNumber: order.trackingNumber || 'JNE12345678',
      courier: order.shippingMethod,
      productName: order.items[0]?.name || 'Pesanan',
      productImage: order.items[0]?.image || '',
      itemCount: order.items.reduce((a, c) => a + c.quantity, 0),
      estimatedArrival: '25 Mei',
      steps: INITIAL_TRACKING.steps,
    });
    setCurrentScreen('tracking');
  };

  const handleSetPrimaryAddress = (id: string) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isPrimary: addr.id === id,
      }))
    );
    showToast('Alamat utama berhasil diubah');
  };

  const handleAddAddress = (newAddr: Omit<Address, 'id'>) => {
    const created: Address = {
      ...newAddr,
      id: `addr-${Date.now()}`,
    };
    if (created.isPrimary) {
      setAddresses((prev) => [
        created,
        ...prev.map((a) => ({ ...a, isPrimary: false })),
      ]);
    } else {
      setAddresses((prev) => [created, ...prev]);
    }
    showToast('Alamat baru berhasil disimpan');
  };

  const handleDeleteAddress = (id: string) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
    showToast('Alamat dihapus');
  };

  const handleMarkAllNotifsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
    showToast('Semua notifikasi ditandai dibaca');
  };

  const handleOpenChatWithProduct = (product: Product) => {
    setAttachedProductForChat(product);
    setCurrentScreen('chat');
  };

  const handleSendMessage = (convId: string, text: string) => {
    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: 'user' as const,
      text: text,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setConversations((prev) =>
      prev.map((conv) => {
        if (conv.id === convId) {
          return {
            ...conv,
            lastMessage: text,
            lastTime: 'Baru saja',
            messages: [...conv.messages, userMsg],
          };
        }
        return conv;
      })
    );

    // Simulate instant store auto-response
    setTimeout(() => {
      const storeReply = {
        id: `msg-reply-${Date.now()}`,
        sender: 'store' as const,
        text: 'Terima kasih atas pesannya! Admin kami siap membantu proses pesanan Anda secepatnya. Jika ada pertanyaan seputar produk, jangan ragu untuk bertanya ya.',
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };

      setConversations((prev) =>
        prev.map((conv) => {
          if (conv.id === convId) {
            return {
              ...conv,
              lastMessage: storeReply.text,
              lastTime: 'Baru saja',
              messages: [...conv.messages, storeReply],
            };
          }
          return conv;
        })
      );
    }, 1200);
  };

  const handleAddProduct = (newProduct: Product) => {
    setProducts([newProduct, ...products]);
    setSellerProducts([
      {
        id: `seller-prod-${Date.now()}`,
        name: newProduct.name,
        category: newProduct.category,
        stock: newProduct.stock,
        salesCount: 0,
        status: 'Aktif',
        image: newProduct.images[0],
        price: newProduct.price,
      },
      ...sellerProducts,
    ]);
    showToast('Produk baru berhasil diterbitkan!');
  };

  const handleDeleteSellerProduct = (id: string) => {
    setSellerProducts(sellerProducts.filter((p) => p.id !== id));
    showToast('Produk dihapus dari toko');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setCurrentScreen('category');
  };

  const unreadNotifsCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="min-h-screen bg-[#fcf9f8] font-worksans text-[#1b1c1c] flex flex-col antialiased selection:bg-[#fd6a49]/20 selection:text-[#041534]">
      {/* Global Dynamic Toast */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#041534] text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200 border border-white/10">
          <span className="material-symbols-outlined text-[#fd6a49] text-base">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Top Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={(s) => {
          setCurrentScreen(s);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={cart.reduce((a, c) => a + c.quantity, 0)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* Screen Routing */}
      <div className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            products={products}
            onSelectProduct={handleSelectProduct}
            onNavigate={(s) => {
              setCurrentScreen(s);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCategory={handleSelectCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        )}

        {currentScreen === 'category' && (
          <CategoryScreen
            products={products}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectProduct={handleSelectProduct}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'product-detail' && (
          <ProductDetailScreen
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onNavigate={setCurrentScreen}
            onOpenChatWithProduct={handleOpenChatWithProduct}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={wishlist.some((p) => p.id === selectedProduct.id)}
          />
        )}

        {currentScreen === 'cart' && (
          <CartScreen
            cartItems={cart}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveCartItem}
            onToggleSelect={handleToggleCartSelect}
            onToggleSelectAll={handleToggleCartSelectAll}
            onProceedToCheckout={() => setCurrentScreen('checkout')}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'checkout' && (
          <CheckoutScreen
            items={cart.filter((i) => i.selected)}
            addresses={addresses}
            onPlaceOrder={handlePlaceOrder}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'orders' && (
          <OrdersListScreen
            orders={orders}
            onSelectOrderToTrack={handleSelectOrderToTrack}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'tracking' && (
          <OrderTrackingScreen
            trackingInfo={trackingInfo}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'profile' && (
          <ProfileScreen onNavigate={setCurrentScreen} />
        )}

        {currentScreen === 'address' && (
          <AddressScreen
            addresses={addresses}
            onSetPrimaryAddress={handleSetPrimaryAddress}
            onAddAddress={handleAddAddress}
            onDeleteAddress={handleDeleteAddress}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'wishlist' && (
          <WishlistScreen
            wishlist={wishlist}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onSelectProduct={handleSelectProduct}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'notifications' && (
          <NotificationsScreen
            notifications={notifications}
            onMarkAllAsRead={handleMarkAllNotifsRead}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'chat' && (
          <ChatScreen
            conversations={conversations}
            activeConvId={activeConvId}
            onSelectConversation={setActiveConvId}
            onSendMessage={handleSendMessage}
            onNavigate={setCurrentScreen}
            attachedProduct={attachedProductForChat}
          />
        )}

        {currentScreen === 'seller-dashboard' && (
          <SellerDashboardScreen
            sellerProducts={sellerProducts}
            onNavigate={setCurrentScreen}
            onDeleteSellerProduct={handleDeleteSellerProduct}
          />
        )}

        {currentScreen === 'add-product' && (
          <AddProductScreen
            onAddProduct={handleAddProduct}
            onNavigate={setCurrentScreen}
          />
        )}

        {currentScreen === 'seller-store' && (
          <SellerStoreScreen
            products={products}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onNavigate={setCurrentScreen}
          />
        )}
      </div>

      {/* Bottom Navigation for Mobile */}
      <BottomNav
        currentScreen={currentScreen}
        onNavigate={(s) => {
          setCurrentScreen(s);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        unreadNotifsCount={unreadNotifsCount}
        unreadChatCount={2}
      />
    </div>
  );
}

export default App;
