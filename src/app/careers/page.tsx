
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CareersPage() {
  const jobOpenings = [
    {
      title: 'Kıdemli Frontend Geliştirici',
      location: 'Uzaktan',
      department: 'Mühendislik',
    },
    {
      title: 'Ürün Pazarlama Müdürü',
      location: 'İstanbul, Türkiye',
      department: 'Pazarlama',
    },
    {
      title: 'Müşteri Destek Temsilcisi',
      location: 'Uzaktan',
      department: 'Operasyon',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 lg:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Kariyer</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Tutkulu ekibimize katılın ve e-ticaretin geleceğini şekillendirmeye yardımcı olun.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Açık Pozisyonlar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="p-4 border rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {job.department} &bull; {job.location}
                  </p>
                </div>
                <Button asChild>
                  <a href="mailto:careers@example.com?subject=Application%20for%20{job.title}">Başvur</a>
                </Button>
              </div>
            ))}
             {jobOpenings.length === 0 && (
                <div className="text-center py-8">
                    <p className="text-muted-foreground">Şu anda açık pozisyonumuz bulunmamaktadır. Lütfen daha sonra tekrar kontrol edin!</p>
                </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
