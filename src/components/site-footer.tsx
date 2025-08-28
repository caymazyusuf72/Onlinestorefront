
import Link from 'next/link';
import { ShoppingBag, Twitter, Facebook, Instagram } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto px-4 py-12 lg:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <ShoppingBag className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Online Mağaza</span>
            </Link>
            <p className="text-muted-foreground text-sm">İhtiyacınız olan her şey için tek adresiniz.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Mağaza</h3>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-sm text-muted-foreground hover:text-primary">Tüm Ürünler</Link></li>
                <li><Link href="/products?categories=electronics" className="text-sm text-muted-foreground hover:text-primary">Elektronik</Link></li>
                <li><Link href="/products?categories=clothing" className="text-sm text-muted-foreground hover:text-primary">Giyim</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hakkımızda</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">Hikayemiz</Link></li>
                <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">Kariyer</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Destek</h3>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">İletişim</Link></li>
                <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-primary">SSS</Link></li>
                <li><Link href="/shipping-returns" className="text-sm text-muted-foreground hover:text-primary">Kargo & İade</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Online Mağaza. Tüm hakları saklıdır.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
