
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 lg:px-6">
        {/* Hero Section */}
        <section className="relative mb-16 flex h-[400px] items-center justify-center rounded-lg bg-cover bg-center text-center text-white" style={{backgroundImage: "url('https://picsum.photos/seed/about-hero/1200/400')"}}>
           <div className="absolute inset-0 bg-primary/70 rounded-lg"></div>
           <div className="relative z-10 p-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
              Hikayemiz
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">
              Kaliteyi ve yeniliği herkes için erişilebilir kılma tutkusuyla yola çıktık.
            </p>
           </div>
        </section>
        
        {/* Our Mission, Vision, and Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
            <Card>
                <CardHeader>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Target className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4">Misyonumuz</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Müşterilerimize hayatlarını zenginleştiren yüksek kaliteli ürünler sunmak ve olağanüstü bir alışveriş deneyimi yaşatmak.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                     <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Eye className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4">Vizyonumuz</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">E-ticarette yenilik ve müşteri memnuniyeti için standartları belirleyen, dünya çapında tanınan bir marka olmak.</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                     <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Users className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4">Değerlerimiz</CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="text-muted-foreground space-y-2">
                        <li>Müşteri Odaklılık</li>
                        <li>Dürüstlük ve Şeffaflık</li>
                        <li>Sürekli İyileştirme</li>
                    </ul>
                </CardContent>
            </Card>
        </section>

        {/* Our Team Section */}
        <section>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ekibimizle Tanışın</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Başarımızın arkasındaki tutkulu insanlar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Ali Yılmaz', role: 'Kurucu & CEO', image: 'https://picsum.photos/seed/team1/400/400' },
              { name: 'Zeynep Kaya', role: 'Pazarlama Direktörü', image: 'https://picsum.photos/seed/team2/400/400' },
              { name: 'Mehmet Öztürk', role: 'Operasyon Lideri', image: 'https://picsum.photos/seed/team3/400/400' },
              { name: 'Ayşe Demir', role: 'Müşteri İlişkileri', image: 'https://picsum.photos/seed/team4/400/400' },
            ].map((member) => (
              <Card key={member.name} className="overflow-hidden text-center">
                 <div className="relative h-60 w-full">
                    <Image src={member.image} alt={member.name} data-ai-hint="team member" fill className="object-cover" />
                 </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
