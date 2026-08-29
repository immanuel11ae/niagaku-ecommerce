export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  category: string;
  rating: number;
  reviewCount: number;
  salesCount: number;
  location: string;
  images: string[];
  stock: number;
  description: string;
  specs: Record<string, string>;
  variants?: string[];
  storeName: string;
  storeAvatar: string;
  storeRating: number;
  isFlashSale?: boolean;
  stockLeft?: number;
  tag?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  originalPrice?: number;
  variant: string;
  quantity: number;
  image: string;
  storeName: string;
  selected: boolean;
}

export interface Address {
  id: string;
  label: string;
  isPrimary: boolean;
  recipientName: string;
  phone: string;
  fullAddress: string;
  landmark?: string;
}

export interface OrderItem {
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  storeName: string;
  status: 'Belum Bayar' | 'Diproses' | 'Dikirim' | 'Selesai' | 'Dibatalkan';
  items: OrderItem[];
  totalPrice: number;
  shippingMethod: string;
  shippingCost: number;
  date: string;
  trackingNumber?: string;
}

export interface TrackingStep {
  title: string;
  description: string;
  time: string;
  completed: boolean;
  active?: boolean;
  icon: string;
}

export interface TrackingInfo {
  trackingNumber: string;
  courier: string;
  productName: string;
  productImage: string;
  itemCount: number;
  estimatedArrival: string;
  steps: TrackingStep[];
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  type: 'promo' | 'order' | 'chat' | 'cart' | 'system';
  isRead: boolean;
  promoCode?: string;
  actionText?: string;
  actionScreen?: string;
  image?: string;
  dateGroup: 'Hari Ini' | 'Kemarin' | '2 Hari Lalu';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'store';
  text: string;
  time: string;
  productAttachment?: {
    name: string;
    price: number;
    image: string;
  };
}

export interface Conversation {
  id: string;
  storeName: string;
  storeAvatar: string;
  isOnline: boolean;
  lastMessage: string;
  lastTime: string;
  unreadCount?: number;
  messages: ChatMessage[];
}

export type ScreenType =
  | 'home'
  | 'category'
  | 'product-detail'
  | 'cart'
  | 'checkout'
  | 'orders'
  | 'tracking'
  | 'profile'
  | 'address'
  | 'wishlist'
  | 'notifications'
  | 'chat'
  | 'seller-dashboard'
  | 'add-product'
  | 'seller-store';
