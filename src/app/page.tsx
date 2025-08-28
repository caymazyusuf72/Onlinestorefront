
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { getProducts } from '@/lib/mock-data';
import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const featuredProducts = getProducts({ featured: true, limit: 4 });
  const newArrivals = getProducts({ limit: 8 }).slice(4);

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative w-full bg-primary/10">
        <div className="container mx-auto grid lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center space-y-6 px-4 py-12 text-center lg:py-24 lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Bir Sonraki Favori Eşyanızı Keşfedin
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              Yüksek kaliteli ürünlerden oluşan özenle seçilmiş koleksiyonumuzu keşfedin. En son trendlerden zamansız klasiklere, herkes için bir şeyimiz var.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/products">
                  Tüm Ürünleri Gör <ShoppingBag className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#featured">
                  Öne Çıkanlar <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 w-full lg:h-auto">
            <Image
              src="https://picsum.photos/seed/hero-autumn/1200/800"
              alt="Ürün çeşitleri"
              data-ai-hint="products assortment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Öne Çıkan Ürünler</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Müşterilerimizin sevdiği özenle seçilmiş ürünler.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Promotion Section */}
      <section className="bg-muted/50">
        <div className="container mx-auto px-4 py-16 lg:px-6">
           <Card className="overflow-hidden bg-accent/20 border-accent/50 shadow-lg">
             <div className="grid md:grid-cols-2 items-center">
               <div className="p-8 md:p-12">
                 <h2 className="text-3xl font-bold tracking-tight text-accent-foreground sm:text-4xl">
                   Sınırlı Süreli Teklif!
                 </h2>
                 <p className="mt-4 text-lg text-accent-foreground/80">
                   Yeni gelenlerde <span className="font-bold text-primary">25% İNDİRİM</span> kazanın. Sezonun en iyi fırsatlarını kaçırmayın.
                 </p>
                 <Button asChild size="lg" className="mt-6">
                   <Link href="/products">
                     İndirimi Al
                   </Link>
                 </Button>
               </div>
               <div className="relative h-64 md:h-full">
                  <Image
                    src="https://picsum.photos/seed/promo-autumn/800/600"
                    alt="Promosyon ürünü"
                    data-ai-hint="promotional product"
                    fill
                    className="object-cover"
                  />
               </div>
             </div>
           </Card>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Yeni Gelenler</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Koleksiyonumuza en son eklenenlere göz atın.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/products">
                Tüm Ürünleri Görüntüle
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
