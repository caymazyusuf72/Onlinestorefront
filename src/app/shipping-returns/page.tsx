
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Undo2 } from 'lucide-react';

export default function ShippingReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-6">
       <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Kargo & İade Politikası</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Sipariş süreci, teslimat ve iadeler hakkında bilmeniz gereken her şey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Truck className="h-7 w-7 text-primary" />
              Kargo ve Teslimat
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Hafta içi saat 15:00'a kadar verilen siparişler aynı gün kargoya verilir. 15:00'dan sonra verilen siparişler bir sonraki iş günü işleme alınır.
            </p>
            <p>
              Standart kargo süremiz, siparişinizin kargoya verilmesinden itibaren 2-4 iş günüdür. Bu süre, teslimat adresine ve kargo şirketinin yoğunluğuna göre değişiklik gösterebilir.
            </p>
            <p>
              Tüm siparişlerinizde kargo ücretsizdir.
            </p>
             <p>
              Siparişiniz kargoya verildiğinde, size gönderilecek e-postadaki takip numarası ile kargonuzun durumunu anlık olarak takip edebilirsiniz.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Undo2 className="h-7 w-7 text-primary" />
              İade ve Değişim
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Satın aldığınız ürünlerden memnun kalmazsanız, ürünü teslim aldıktan sonraki 14 gün içinde kolayca iade edebilirsiniz.
            </p>
            <p>
              İade edilecek ürünlerin kullanılmamış, etiketlerinin çıkarılmamış ve orijinal ambalajında olması gerekmektedir. Hijyen nedeniyle iç giyim ve kişisel bakım ürünlerinde iade kabul edilmemektedir.
            </p>
             <p>
              İade işlemini başlatmak için hesabınızdaki "Siparişlerim" bölümünü kullanabilir veya müşteri hizmetlerimizle iletişime geçebilirsiniz.
            </p>
            <p>
              İadeniz onaylandıktan sonra, ücret iadesi 5-7 iş günü içinde ödeme yaptığınız yönteme göre gerçekleştirilir.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
