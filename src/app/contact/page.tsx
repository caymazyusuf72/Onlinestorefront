
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalıdır.'),
  email: z.string().email('Geçersiz e-posta adresi.'),
  subject: z.string().min(5, 'Konu en az 5 karakter olmalıdır.'),
  message: z.string().min(10, 'Mesaj en az 10 karakter olmalıdır.'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: 'Mesajınız Gönderildi!',
      description: 'En kısa sürede size geri dönüş yapacağız.',
    });
    form.reset();
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Bize Ulaşın</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Sorularınız, önerileriniz veya işbirliği talepleriniz için buradayız.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
            <Card>
                 <CardHeader>
                    <CardTitle>İletişim Bilgileri</CardTitle>
                    <CardDescription>Bize aşağıdaki kanallardan ulaşabilirsiniz.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                        <MapPin className="h-6 w-6 text-primary" />
                        <p className="text-muted-foreground">123 Ana Cadde, Örnek Şehir, Türkiye</p>
                    </div>
                     <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <p className="text-muted-foreground">+90 (555) 123 45 67</p>
                    </div>
                     <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <p className="text-muted-foreground">iletisim@onlinemagaza.com</p>
                    </div>
                </CardContent>
            </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Mesaj Gönderin</CardTitle>
              <CardDescription>Formu doldurun, ekibimiz size ulaşsın.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Adınız</FormLabel><FormControl><Input placeholder="Adınız Soyadınız" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>E-posta Adresiniz</FormLabel><FormControl><Input placeholder="ornek@mail.com" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="subject" render={({ field }) => (
                    <FormItem><FormLabel>Konu</FormLabel><FormControl><Input placeholder="Mesajınızın konusu" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem><FormLabel>Mesajınız</FormLabel><FormControl><Textarea placeholder="Bize bir mesaj bırakın..." className="min-h-[120px]" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <Button type="submit">Gönder</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
