export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'audio', label: 'Audio & Acoustics' },
  { id: 'wearables', label: 'Wearables' },
  { id: 'cyber-apparel', label: 'Cyber Apparel' },
  { id: 'optics', label: 'Optics & Vision' },
  { id: 'accessories', label: 'Artifacts' },
];

export const PRODUCTS = [
  {
    id: 'lunexa-apex',
    name: 'Lunexa Apex Wireless',
    category: 'audio',
    subCategory: 'Over-Ear ANC',
    price: 289.00,
    originalPrice: 349.00,
    discount: '-17%',
    rating: 4.9,
    reviewCount: 1240,
    badge: 'FLAGSHIP',
    inStock: true,
    stockCount: 14,
    shippingInfo: 'Ready to ship in 24h',
    tagline: 'Lunexa Soundlabs Flagship',
    description: 'Studio-grade spatial audio with dual-core adaptive active noise cancellation and lossless acoustic titanium drivers. Handcrafted memory foam acoustic seal with luminescent teal accents.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1F4_XZxvReulMLxg2zagVOTYdbP2hAIlhVBBD4NoCy4quOnuGq2Df1_-ouZiIimC7LwxR2i5w1vpldrLtj3zBB0UbS7R0h4xchqKmKRJ1YvK19qhC705rSsxK1_V4dBXLBvzPmCY4CpiFAyjmX6bGXH_lA-5s7eDo06vHFvQbS4CIDWnVUJL_jt7NrIpr-a8MYqjBwlpmmIZDcw-OtBwBgO4-2Dz-0TzYU7uW43p-zteWg-xhfxP89w',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9z5C6tr0i-3EEqIQJ7WJhazWSKeV4KSoGC16p3_MlH3yNLyE5eZKknyQdew8UQ_Sq-yuzdxywBDRpReQPCUJouRwkvJkcNFmDHz68p3O_m-zSSibNPx5Alds71dR5PF9PVhuuWs3mRO4ikWlFQB-HPF3oYwyeLGJ0vkB2KnKGhM_O3cT8I6UCtmJKaaBpbCO320BKgNyUBzqgAQrIYkc4x50KRxOfL2BVDTEXRIXNpjq46hwtjR9eGQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDz2lHs-M8LkzhEdo9E72uPHj1Cw19otjMVC9KTDGM8QMueWNKn8rhO04YE2B3Gps12P_pYYOY4Xq2vRtT2AcX8AHpOyj0O5BazwZGk6s-kNMJ89HmeEwPDqLhnFzB-MKILID2lmI6VnQ872k_qNrlI9jZdlYho7-U5FFj8maX-2Jb0mKMh9DuBLPm1ys4_RWrD1VzkhhLMXDRjlr0lBF_wcxQhUb3loxmesoytrAtTngd_0JnbWvpkXw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPH5Ub9tDVEBmDO6qSH8yH_LchHnW8R1w6QjbYnU5YrrALb-9vWL9hJlaBH4bgqY1Cdti3ZAZXWLZClVC_8AorWR2yMk3uLlxI_PtAKIp7y3LFr83Bcr4e8u7Ab_LvCFFqbbY6WghmK7WGbHHBXN7lRVANvPeNHsMUXS4io_IpLgAyl_zuaVILTaY_Ej2zbyA1PuTi8EiP8_nanC17bDIB3eEsNL9_DS9hp6mkQz4POkf83a851tS1SQ',
    ],
    colors: [
      { name: 'Matte Obsidian', hex: '#0f131c' },
      { name: 'Cyber Teal', hex: '#03b5d3' },
      { name: 'Titanium Gray', hex: '#31353e' },
    ],
    specs: [
      { label: 'Battery Life', value: '42 Hours Playback' },
      { label: 'ANC Type', value: 'Hybrid Dual-Core 48dB' },
      { label: 'Drivers', value: '45mm Beryllium Diaphragm' },
      { label: 'Latency', value: '28ms Ultra-Low Cyber Mode' },
      { label: 'Weight', value: '248 grams' },
    ],
    capabilities: ['Active Noise Cancel', 'Spatial Dolby 360', 'Multipoint Pairing', 'Lossless LDAC']
  },
  {
    id: 'aura-neo-buds',
    name: 'Aura Neo Buds Pro',
    category: 'audio',
    subCategory: 'True Wireless In-Ear',
    price: 149.00,
    originalPrice: 179.00,
    discount: '-18%',
    rating: 4.8,
    reviewCount: 890,
    badge: 'NEW DROP',
    inStock: true,
    stockCount: 8,
    shippingInfo: 'In Stock - Ships Today',
    tagline: 'Nocturnal Neural Audio',
    description: 'Futuristic matte black and cyan wireless earbuds nestled inside a titanium charging case on an obsidian reflective surface.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyAl0xkwz-5NmiSbL1Pesc-8ByszVXUuJ-no9x2e43MTq877ZooNX1CVXeLoBYTPnQE8AfNWIdYKyE5cR5Z15Us7mhwP2IWbJHflMC1UqpsZwgqCLUNnZYcWZn98-ilJkfY_AlB_9aOScPcj50myJ0_5GnMQE867BwtKqGxNm2fyVwYCUIG95hXWc5Fdy6tx08kC6A-sn5bgn1NotYEADXKouyuMCtxHqM5pR2Mj3SwahtdiAcIWlmOQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0R9rNXB9_EjE1Eq6Tg_UbLq9oDQQou7NeEmemKY5nLGAg7Zbt1sSKSTqgDf1cVccmFKe7bkIdTEgqgKcfmDBAFrrzj-LZnehXGzdMILeh6QhFKbRBVrsqIEdT39mAphrRk5Nf8ha-6w7peo64KBh2x7S9Kq_kBmyciMLXvVxWFfPA-Md60YDKyeV5RUA8wzpCujvJ1fS-X4lB7mjbL7G22Vd1hFB-p0kQKQb7mNor5CsCr6L41Nj3cg',
    ],
    colors: [
      { name: 'Obsidian Neon', hex: '#181c24' },
      { name: 'Emerald Flux', hex: '#4edea3' },
    ],
    specs: [
      { label: 'Battery Life', value: '32 Hours with Case' },
      { label: 'Water Resistance', value: 'IPX7 Sweat & Rain' },
      { label: 'Codecs', value: 'aptX Lossless, AAC' },
    ],
    capabilities: ['Active Noise Cancel', 'Spatial Dolby 360', 'Multipoint Pairing']
  },
  {
    id: 'cipher-spatial-bar',
    name: 'Cipher Spatial Studio Soundbar',
    category: 'audio',
    subCategory: 'Spatial Portable',
    price: 249.00,
    originalPrice: 299.00,
    discount: '-17%',
    rating: 4.7,
    reviewCount: 340,
    badge: 'POPULAR',
    inStock: true,
    stockCount: 19,
    shippingInfo: 'Ships in 48h',
    tagline: 'Atmospheric Vitrine Acoustic Bar',
    description: 'High-fidelity cylindrical sound projector with atmospheric ambient light strip and wireless room-sensing equalization.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA9w8R6yqKzKvdj8z9T4uT4x9LpZ20F-Y8_vM27908b9xL3wY89L257qA-3v4184h6h02w98f4L-k8u7t5r4e3w2q1a_9876543210',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_peEJSULJzhsrA-kK4ugGvNmHPRUKoIKjr2PT78c4N_WHaRTEZ3xL_aSpsbsHXz4U3u5f2hLKUITfNaH0SE63QVhhJ9aciP6xTxAElzYmAPngf9WJ1xmsZ-4koCsl1hirdZu85-82GW3t09TlvbZYariVEKsXzYmC51cRMPBfnmg6xpXxdYLrkJHK5IaNz1L5KIrHrELoyR8AQDA6j618nrSOgdn71rc5AEbRC_e9CV2lxM37uEE9cw',
    ],
    colors: [
      { name: 'Onyx Black', hex: '#0a0e16' },
      { name: 'Brushed Silver', hex: '#86948a' }
    ],
    specs: [
      { label: 'Channels', value: '5.1 Virtual Dolby Atmos' },
      { label: 'Output Power', value: '160W Peak' },
    ],
    capabilities: ['Spatial Dolby 360', 'Multipoint Pairing', 'Lossless LDAC']
  },
  {
    id: 'cyber-chrono-watch',
    name: 'Lunexa L-01 Cyber Chrono',
    category: 'wearables',
    subCategory: 'Bio-Smart Wearable',
    price: 389.00,
    originalPrice: 429.00,
    discount: '-9%',
    rating: 4.9,
    reviewCount: 512,
    badge: 'LIMITED DROP',
    inStock: true,
    stockCount: 5,
    shippingInfo: 'Limited to 250 units',
    tagline: 'Titanium Bio-Telemetry Timepiece',
    description: 'Forged carbon case, holographic micro-OLED sapphire glass display, and real-time biometrics encrypted with decentralized zero-knowledge proofs.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_peEJSULJzhsrA-kK4ugGvNmHPRUKoIKjr2PT78c4N_WHaRTEZ3xL_aSpsbsHXz4U3u5f2hLKUITfNaH0SE63QVhhJ9aciP6xTxAElzYmAPngf9WJ1xmsZ-4koCsl1hirdZu85-82GW3t09TlvbZYariVEKsXzYmC51cRMPBfnmg6xpXxdYLrkJHK5IaNz1L5KIrHrELoyR8AQDA6j618nrSOgdn71rc5AEbRC_e9CV2lxM37uEE9cw',
    ],
    colors: [
      { name: 'Stealth Black', hex: '#0f131c' },
      { name: 'Aurora Cyan', hex: '#4cd7f6' }
    ],
    specs: [
      { label: 'Display', value: '1.43" 466x466 AMOLED' },
      { label: 'Battery', value: '14 Days Typical' },
    ],
    capabilities: ['Biometric Sensors', 'Holographic Haptics']
  },
  {
    id: 'phantom-shell-jacket',
    name: 'Phantom Techwear Shell Jacket',
    category: 'cyber-apparel',
    subCategory: 'Modular Nocturnal Shell',
    price: 219.00,
    originalPrice: 260.00,
    discount: '-15%',
    rating: 4.8,
    reviewCount: 194,
    badge: 'HOT',
    inStock: true,
    stockCount: 12,
    shippingInfo: 'Ships in 24h',
    tagline: 'Hydrophobic Graphene Membrane',
    description: 'Engineered aerospace-grade graphene thermal shell with magnetic quick-release tactical harness and internal device heating circuit.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpx7UTpNKrYyXNlrziQqzb5ePTnINBLZyNJZPNZCFcS536KDG3xWjiLNeuQL3B5je4OZcTxm6AWJrZlVmClFQI85RAYBDpECgQ3hUFRx67r-WFpZ_ENM6G3w2VTkIc5_I6MEpGEWLKpeuU0CuiPItn7OmXmunz1MRw_6Q8i-a_Ro27u5i0h2SQywQdbCBJvpylG3lxLO6mtNSGCNYAtv1Y4edbrvLOfmyzqNt283REk71g387d1tgNhA',
    ],
    colors: [
      { name: 'Nocturnal Black', hex: '#0a0e16' },
      { name: 'Acid Green Accent', hex: '#10b981' }
    ],
    specs: [
      { label: 'Waterproof Rating', value: '25,000mm Graphene' },
      { label: 'Pockets', value: '8 Magnetic Weather-Sealed' }
    ],
    capabilities: ['Thermal Insulation', 'RFID Shielded']
  },
  {
    id: 'vortex-true-pods',
    name: 'Vortex Quantum True Pods',
    category: 'audio',
    subCategory: 'True Wireless In-Ear',
    price: 199.00,
    originalPrice: 220.00,
    discount: '-10%',
    rating: 4.6,
    reviewCount: 420,
    badge: 'NEW',
    inStock: true,
    stockCount: 22,
    shippingInfo: 'Immediate Dispatch',
    tagline: 'Zero-Latency Acoustic Engine',
    description: 'Precision molded ergonomic in-ear monitors with planar magnetic drivers and cyberpunk transparent shell.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyAl0xkwz-5NmiSbL1Pesc-8ByszVXUuJ-no9x2e43MTq877ZooNX1CVXeLoBYTPnQE8AfNWIdYKyE5cR5Z15Us7mhwP2IWbJHflMC1UqpsZwgqCLUNnZYcWZn98-ilJkfY_AlB_9aOScPcj50myJ0_5GnMQE867BwtKqGxNm2fyVwYCUIG95hXWc5Fdy6tx08kC6A-sn5bgn1NotYEADXKouyuMCtxHqM5pR2Mj3SwahtdiAcIWlmOQ',
    ],
    colors: [
      { name: 'Clear Obsidian', hex: '#1c2028' },
      { name: 'Neon Amber', hex: '#ffb95f' }
    ],
    specs: [
      { label: 'Driver', value: '12mm Planar Magnetic' },
      { label: 'Latency', value: '19ms Gamer Ultra-Sync' }
    ],
    capabilities: ['Active Noise Cancel', 'Lossless LDAC']
  }
];

export const INITIAL_CART = [
  {
    id: 'lunexa-apex',
    name: 'Lunexa Apex Headphones',
    color: 'Matte Obsidian',
    price: 289.00,
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpx7UTpNKrYyXNlrziQqzb5ePTnINBLZyNJZPNZCFcS536KDG3xWjiLNeuQL3B5je4OZcTxm6AWJrZlVmClFQI85RAYBDpECgQ3hUFRx67r-WFpZ_ENM6G3w2VTkIc5_I6MEpGEWLKpeuU0CuiPItn7OmXmunz1MRw_6Q8i-a_Ro27u5i0h2SQywQdbCBJvpylG3lxLO6mtNSGCNYAtv1Y4edbrvLOfmyzqNt283REk71g387d1tgNhA',
    badge: 'New'
  },
  {
    id: 'aura-neo-buds',
    name: 'Aura Neo Buds Pro',
    color: 'Matte Black',
    price: 149.00,
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyAl0xkwz-5NmiSbL1Pesc-8ByszVXUuJ-no9x2e43MTq877ZooNX1CVXeLoBYTPnQE8AfNWIdYKyE5cR5Z15Us7mhwP2IWbJHflMC1UqpsZwgqCLUNnZYcWZn98-ilJkfY_AlB_9aOScPcj50myJ0_5GnMQE867BwtKqGxNm2fyVwYCUIG95hXWc5Fdy6tx08kC6A-sn5bgn1NotYEADXKouyuMCtxHqM5pR2Mj3SwahtdiAcIWlmOQ',
    badge: '-18%'
  }
];
