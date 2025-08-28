
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FaqPage() {
  const faqItems = [
    {
      question: 'Siparişimi nasıl takip edebilirim?',
      answer:
        'Siparişiniz kargoya verildikten sonra size bir takip numarası içeren bir e-posta göndereceğiz. Bu numara ile kargo şirketinin web sitesinden siparişinizin durumunu takip edebilirsiniz.',
    },
    {
      question: 'İade politikası nedir?',
      answer:
        'Ürünü teslim aldıktan sonraki 14 gün içinde koşulsuz iade hakkınız bulunmaktadır. Ürünün kullanılmamış ve orijinal ambalajında olması gerekmektedir. Detaylı bilgi için "Kargo & İade" sayfamızı ziyaret edebilirsiniz.',
    },
    {
      question: 'Uluslararası gönderim yapıyor musunuz?',
      answer:
        'Şu anda sadece Türkiye sınırları içerisinde gönderim yapmaktayız. Gelecekte uluslararası gönderim seçenekleri üzerinde çalışıyoruz.',
    },
    {
      question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
      answer:
        'Kredi kartı, banka kartı ve havale/EFT gibi çeşitli ödeme yöntemlerini kabul ediyoruz. Tüm ödemeler güvenli bir altyapı üzerinden işlenmektedir.',
    },
    {
      question: 'Şifremi unuttum, ne yapmalıyım?',
      answer:
        'Giriş sayfasındaki "Şifremi Unuttum" bağlantısına tıklayarak şifrenizi sıfırlayabilirsiniz. E-posta adresinize bir sıfırlama bağlantısı gönderilecektir.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 lg:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Sıkça Sorulan Sorular</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
