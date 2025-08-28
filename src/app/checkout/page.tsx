
"use client";

import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import Link from "next/link";

const checkoutSchema = z.object({
    email: z.string().email({ message: "Geçersiz e-posta adresi." }),
    firstName: z.string().min(1, { message: "İsim gereklidir." }),
    lastName: z.string().min(1, { message: "Soyisim gereklidir." }),
    address: z.string().min(1, { message: "Adres gereklidir." }),
    city: z.string().min(1, { message: "Şehir gereklidir." }),
    postalCode: z.string().min(5, { message: "Posta kodu gereklidir." }),
    country: z.string().min(1, { message: "Ülke gereklidir." }),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
    },
  });

  if (cartItems.length === 0) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-semibold">Sepetiniz boş.</h1>
            <p className="mt-2 text-muted-foreground">Ödeme yapmak için lütfen önce ürün ekleyin.</p>
            <Button asChild className="mt-6">
                <Link href="/products">Alışverişe Devam Et</Link>
            </Button>
        </div>
    );
  }

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Sipariş verildi:", data);
    clearCart();
    router.push("/order-confirmation");
  };

  return (
    <div className="container mx-auto px-4 py-12 lg:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-center mb-10">Ödeme</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Kargo Bilgileri</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>E-posta</FormLabel><FormControl><Input placeholder="siz@ornek.com" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField control={form.control} name="firstName" render={({ field }) => (
                        <FormItem><FormLabel>İsim</FormLabel><FormControl><Input placeholder="Ali" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="lastName" render={({ field }) => (
                        <FormItem><FormLabel>Soyisim</FormLabel><FormControl><Input placeholder="Yılmaz" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="address" render={({ field }) => (
                    <FormItem><FormLabel>Adres</FormLabel><FormControl><Input placeholder="123 Ana Cadde" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FormField control={form.control} name="city" render={({ field }) => (
                        <FormItem><FormLabel>Şehir</FormLabel><FormControl><Input placeholder="Herhangi bir şehir" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="postalCode" render={({ field }) => (
                        <FormItem><FormLabel>Posta Kodu</FormLabel><FormControl><Input placeholder="12345" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="country" render={({ field }) => (
                        <FormItem><FormLabel>Ülke</FormLabel><FormControl><Input placeholder="Türkiye" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                  <Button type="submit" size="lg" className="w-full mt-6">Siparişi Tamamla</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:sticky lg:top-24 h-fit">
          <Card>
            <CardHeader>
              <CardTitle>Sipariş Özeti</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                             <Image src={item.images[0]} alt={item.name} data-ai-hint="product image" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Adet: {item.quantity}</p>
                        </div>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Ara Toplam</p>
                  <p>${cartTotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-muted-foreground">Kargo</p>
                  <p>Ücretsiz</p>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <p>Toplam</p>
                  <p>${cartTotal.toFixed(2)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
