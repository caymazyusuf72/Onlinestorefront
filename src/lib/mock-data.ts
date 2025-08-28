
import type { Product, Category, Brand, SortOption } from '@/lib/types';

const categories: Category[] = [
  { id: 'electronics', name: 'Elektronik' },
  { id: 'clothing', name: 'Giyim' },
  { id: 'home-goods', name: 'Ev Eşyaları' },
  { id: 'books', name: 'Kitap' },
];

const brands: Brand[] = [
  { id: 'techcorp', name: 'TechCorp' },
  { id: 'fashionista', name: 'Fashionista' },
  { id: 'homely', name: 'Homely' },
  { id: 'readmore', name: 'ReadMore' },
  { id: 'gadgetry', name: 'Gadgetry' },
];

const products: Product[] = [
  {
    id: 1,
    name: 'Quantum Laptop Pro',
    description:
      'Yeni nesil bilgi işlem deneyimini Quantum Laptop Pro ile yaşayın. Göz alıcı 16 inç ekran, ışık hızında M3 işlemci ve tüm gün süren pil ömrü.',
    price: 1499.99,
    stock: 15,
    images: ['https://picsum.photos/seed/product1/800/600', 'https://picsum.photos/seed/product1-2/800/600', 'https://picsum.photos/seed/product1-3/800/600'],
    category: 'electronics',
    brand: 'techcorp',
    featured: true,
    reviews: [
      { id: 1, author: 'Alex D.', rating: 5, comment: 'Kesinlikle olağanüstü bir makine!', date: '2023-10-15' },
      { id: 2, author: 'Sarah K.', rating: 4, comment: 'Harika performans, ama biraz pahalı.', date: '2023-10-12' },
    ],
  },
  {
    id: 2,
    name: 'Urban Explorer Ceket',
    description:
      'Modern maceraperest için şık ve çok yönlü bir ceket. Su geçirmez, rüzgara dayanıklı ve nefes alabilir, şehir sokakları ve dağ patikaları için mükemmel.',
    price: 199.99,
    stock: 45,
    images: ['https://picsum.photos/seed/product2/800/600', 'https://picsum.photos/seed/product2-2/800/600'],
    category: 'clothing',
    brand: 'fashionista',
    featured: true,
    reviews: [
      { id: 3, author: 'Mike R.', rating: 5, comment: 'Şimdiye kadar sahip olduğum en iyi ceket.', date: '2023-09-20' },
    ],
  },
  {
    id: 3,
    name: 'Akıllı Kahve Makinesi',
    description:
      'Telefonunuzdan mükemmel bir fincan kahve demleyin. Akıllı Kahve Makinesi, demleme sertliğinizi, sıcaklığınızı ve zamanlamanızı özelleştirmenizi sağlar.',
    price: 89.99,
    stock: 30,
    images: ['https://picsum.photos/seed/product3/800/600', 'https://picsum.photos/seed/product3-2/800/600'],
    category: 'home-goods',
    brand: 'homely',
    reviews: [
        { id: 4, author: 'Jenna H.', rating: 4, comment: 'Süper kullanışlı!', date: '2023-11-01' },
    ],
  },
  {
    id: 4,
    name: 'Son Bulutsu',
    description:
      'Sizi galaksinin kenarına götürüp geri getirecek heyecan verici bir bilim kurgu destanı. Uzay operası hayranları için mutlaka okunması gereken bir kitap.',
    price: 15.99,
    stock: 100,
    images: ['https://picsum.photos/seed/product4/800/600'],
    category: 'books',
    brand: 'readmore',
    featured: true,
    reviews: [],
  },
  {
    id: 5,
    name: 'SonicWave Kulaklık',
    description:
      'SonicWave Kulaklıklar ile kendinizi kristal netliğinde sese bırakın. Gürültü engelleme teknolojisi ve 30 saatlik pil ömrü sunar.',
    price: 249.99,
    stock: 25,
    images: ['https://picsum.photos/seed/product5/800/600', 'https://picsum.photos/seed/product5-2/800/600'],
    category: 'electronics',
    brand: 'gadgetry',
    featured: true,
    reviews: [
        { id: 5, author: 'Chris P.', rating: 5, comment: 'İnanılmaz ses kalitesi.', date: '2023-10-28' },
    ],
  },
  {
    id: 6,
    name: 'Klasik Kot Pantolon',
    description: 'Zamansız stil modern konforla buluşuyor. Bu klasik kot pantolonlar, mükemmel bir uyum için premium streç denimden yapılmıştır.',
    price: 79.99,
    stock: 60,
    images: ['https://picsum.photos/seed/product6/800/600'],
    category: 'clothing',
    brand: 'fashionista',
    reviews: [
        { id: 6, author: 'Maria G.', rating: 5, comment: 'Yeni favori kot pantolonum.', date: '2023-09-05' },
    ],
  },
  {
    id: 7,
    name: 'ErgoComfort Ofis Koltuğu',
    description: 'ErgoComfort Ofis Koltuğu ile rahat ve üretken kalın. İyi duruşu desteklemek için bel desteği ile tamamen ayarlanabilir.',
    price: 349.99,
    stock: 10,
    images: ['https://picsum.photos/seed/product7/800/600', 'https://picsum.photos/seed/product7-2/800/600'],
    category: 'home-goods',
    brand: 'homely',
    reviews: [],
  },
  {
    id: 8,
    name: 'Eskilerin Günlükleri',
    description: 'Fantastik ve sihirli bir dünyaya dalın. Sizi nefessiz bırakacak epik yeni bir serinin ilk kitabı.',
    price: 18.99,
    stock: 80,
    images: ['https://picsum.photos/seed/product8/800/600'],
    category: 'books',
    brand: 'readmore',
    reviews: [
        { id: 7, author: 'David L.', rating: 5, comment: 'Fantastik yazının bir başyapıtı.', date: '2023-10-18' },
    ],
  },
  {
    id: 9,
    name: 'Aura Akıllı Saat',
    description: 'Şık ve güçlü Aura Akıllı Saat ile zindeliğinizi takip edin, bağlantıda kalın ve gününüzü yönetin.',
    price: 399.99,
    stock: 22,
    images: ['https://picsum.photos/seed/product9/800/600', 'https://picsum.photos/seed/product9-2/800/600'],
    category: 'electronics',
    brand: 'techcorp',
    reviews: [],
  },
  {
    id: 10,
    name: 'Uçuşan Yazlık Elbise',
    description: 'Hafif, havadar ve zahmetsizce şık. Bu yazlık elbise, sıcak günler ve ılık geceler için mükemmeldir.',
    price: 64.99,
    stock: 35,
    images: ['https://picsum.photos/seed/product10/800/600'],
    category: 'clothing',
    brand: 'fashionista',
    reviews: [
        { id: 8, author: 'Emily R.', rating: 5, comment: 'Çok rahat ve sevimli!', date: '2023-07-11' },
    ],
  },
  {
    id: 11,
    name: 'RoboVac X1',
    description: 'RoboVac X1 ile zeminlerinizi lekesiz tutun. Akıllı navigasyon ve güçlü emiş gücü temizliği çocuk oyuncağı haline getirir.',
    price: 499.99,
    stock: 18,
    images: ['https://picsum.photos/seed/product11/800/600'],
    category: 'home-goods',
    brand: 'gadgetry',
    reviews: [],
  },
  {
    id: 12,
    name: 'Şefin Sırrı',
    description: 'Dünyaca ünlü şeflerden 100\'den fazla tarifle dolu bir yemek kitabı. Mutfak potansiyelinizi ortaya çıkarın.',
    price: 29.99,
    stock: 150,
    images: ['https://picsum.photos/seed/product12/800/600'],
    category: 'books',
    brand: 'readmore',
    reviews: [
        { id: 9, author: 'Frank T.', rating: 5, comment: 'Tarifler inanılmaz ve takip etmesi kolay.', date: '2023-10-02' },
    ],
  },
];

interface GetProductsOptions {
  limit?: number;
  featured?: boolean;
  categories?: string[];
  brands?: string[];
  searchTerm?: string;
  sortBy?: SortOption;
}

export function getProducts(options: GetProductsOptions = {}): Product[] {
  let filteredProducts = [...products];

  if (options.featured) {
    filteredProducts = filteredProducts.filter((p) => p.featured);
  }

  if (options.categories && options.categories.length > 0) {
    filteredProducts = filteredProducts.filter((p) => options.categories?.includes(p.category));
  }
  
  if (options.brands && options.brands.length > 0) {
    filteredProducts = filteredProducts.filter((p) => options.brands?.includes(p.brand));
  }

  if (options.searchTerm) {
    const searchTerm = options.searchTerm.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm)
    );
  }

  if (options.sortBy) {
    switch (options.sortBy) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'popularity':
        filteredProducts.sort((a, b) => b.reviews.length - a.reviews.length);
        break;
      case 'newest':
      default:
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
    }
  }

  if (options.limit) {
    return filteredProducts.slice(0, options.limit);
  }

  return filteredProducts;
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategories(): Category[] {
  return categories;
}

export function getBrands(): Brand[] {
  return brands;
}
