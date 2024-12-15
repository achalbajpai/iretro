import { Product } from '../types';

export const products: Product[] = [
  // Macs
  {
    id: 'mac-studio',
    name: 'Mac Studio',
    category: 'Mac',
    price: 1999.00,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1687984872133',
    description: 'Stunningly compact. Extensively capable. A powerhouse for creators.',
    specs: {
      processor: 'Apple M2 Ultra',
      memory: 'Up to 192GB unified memory',
      storage: 'Up to 8TB SSD',
      ports: 'Thunderbolt 4, USB-A, HDMI, 10Gb Ethernet'
    }
  },
  {
    id: 'mac-mini',
    name: 'Mac mini',
    category: 'Mac',
    price: 599.00,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1670038314708',
    description: 'More muscle. More hustle. The most capable compact desktop.',
    specs: {
      processor: 'Apple M2',
      memory: 'Up to 24GB unified memory',
      storage: 'Up to 2TB SSD',
      ports: 'Thunderbolt 4, USB-A, HDMI, Gigabit Ethernet'
    }
  },
  
  // MacBooks
  {
    id: 'macbook-pro-16',
    name: 'MacBook Pro 16"',
    category: 'MacBook',
    price: 2499.00,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202301?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671304673202',
    description: 'The most powerful MacBook Pro ever is here.',
    specs: {
      processor: 'Apple M3 Pro or M3 Max',
      display: '16-inch Liquid Retina XDR display',
      memory: 'Up to 128GB unified memory',
      storage: 'Up to 8TB SSD'
    }
  },
  {
    id: 'macbook-air-15',
    name: 'MacBook Air 15"',
    category: 'MacBook',
    price: 1299.00,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433',
    description: 'Impressively big. Impossibly thin.',
    specs: {
      processor: 'Apple M2',
      display: '15.3-inch Liquid Retina display',
      memory: 'Up to 24GB unified memory',
      storage: 'Up to 2TB SSD'
    }
  },

  // iPhones
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    category: 'iPhone',
    price: 999.00,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009279082',
    description: 'Titanium. So strong. So light. So Pro.',
    specs: {
      chip: 'A17 Pro chip',
      camera: 'Pro camera system',
      display: '6.1-inch Super Retina XDR display',
      battery: 'All-day battery life'
    }
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    category: 'iPhone',
    price: 799.00,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch_GEO_US?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972',
    description: 'New camera. New design. Newphoria.',
    specs: {
      chip: 'A16 Bionic chip',
      camera: 'Advanced dual-camera system',
      display: '6.1-inch Super Retina XDR display',
      battery: 'All-day battery life'
    }
  },

  // iPads
  {
    id: 'ipad-pro',
    name: 'iPad Pro',
    category: 'iPad',
    price: 799.00,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-select-wifi-spacegray-202210?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1664411207213',
    description: 'Supercharged by M2.',
    specs: {
      chip: 'M2 chip',
      display: '11-inch or 12.9-inch Liquid Retina XDR display',
      camera: 'Pro cameras with LiDAR Scanner',
      connectivity: '5G capable'
    }
  },
  {
    id: 'ipad-air',
    name: 'iPad Air',
    category: 'iPad',
    price: 599.00,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1645065732688',
    description: 'Light. Bright. Full of might.',
    specs: {
      chip: 'M1 chip',
      display: '10.9-inch Liquid Retina display',
      camera: '12MP Ultra Wide front camera',
      connectivity: '5G capable'
    }
  },

  // Apple Watch
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    category: 'Watch',
    price: 799.00,
    image: 'https://www.apple.com/v/apple-watch-ultra-2/b/images/overview/design/design_ultra_2__ivhfxx06tqe2_large.jpg',
    description: 'Next-level adventure.',
    specs: {
      display: 'Always-On Retina display',
      battery: 'Up to 36 hours of battery life',
      durability: 'Titanium case',
      features: 'Precision dual-frequency GPS'
    }
  },
  {
    id: 'apple-watch-series-9',
    name: 'Apple Watch Series 9',
    category: 'Watch',
    price: 399.00,
    image: 'https://www.apple.com/v/apple-watch-series-9/a/images/overview/design/design_s9__d0gl3yowj5g2_large.jpg',
    description: 'Smarter. Brighter. Mightier.',
    specs: {
      chip: 'S9 SiP',
      display: 'Always-On Retina display',
      features: 'Double tap gesture',
      health: 'Advanced health sensors'
    }
  },

  // Vision
  {
    id: 'vision-pro',
    name: 'Apple Vision Pro',
    category: 'Vision',
    price: 3499.00,
    image: 'https://www.apple.com/v/apple-vision-pro/a/images/overview/design/hardware_base__ecvqtqxq9hxy_large.jpg',
    description: 'Welcome to the era of spatial computing.',
    specs: {
      chip: 'M2 and R1 chips',
      display: 'Micro‑OLED technology',
      audio: 'Personalized Spatial Audio',
      tracking: 'Advanced eye tracking and hand gestures'
    }
  }
];