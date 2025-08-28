
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrderConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-6 flex items-center justify-center min-h-[calc(100vh-20rem)]">
        <Card className="w-full max-w-lg text-center p-8 shadow-xl">
            <CardHeader className="items-center">
                <CheckCircle2 className="h-20 w-20 text-green-500 mb-4" />
                <CardTitle className="text-3xl font-bold">Siparişiniz İçin Teşekkür Ederiz!</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mt-2 mb-6">
                    Siparişiniz başarıyla alındı. Tarafınıza bir onay e-postası gönderildi.
                </p>
                <Button asChild size="lg">
                    <Link href="/products">
                        Alışverişe Devam Et
                    </Link>
                </Button>
            </CardContent>
        </Card>
    </div>
  );
}
