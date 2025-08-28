
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from './ui/sheet';
import { ScrollArea } from './ui/scroll-area';
import { Trash2, ShoppingBag } from 'lucide-react';

interface CartSheetProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

export default function CartSheet({ isOpen, onOpenChange }: CartSheetProps) {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-6">
          <SheetTitle>Alışveriş Sepeti ({cartCount})</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto">
          {cartItems.length > 0 ? (
            <ScrollArea className="h-full">
              <div className="flex flex-col gap-6 p-6 pr-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        data-ai-hint="product image"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                           >
                            -
                           </Button>
                           <Input
                             type="number"
                             value={item.quantity}
                             onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                             className="h-8 w-14 text-center"
                           />
                           <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                           >
                            +
                           </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <ShoppingBag className="h-16 w-16 text-muted-foreground" />
              <h3 className="text-xl font-semibold">Sepetiniz boş</h3>
              <p className="text-muted-foreground">Görünüşe göre henüz bir şey eklemediniz.</p>
              <Button asChild onClick={() => onOpenChange(false)}>
                  <Link href="/products">Alışverişe Başla</Link>
              </Button>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <SheetFooter className="bg-background p-6 border-t">
            <div className="w-full space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Ara Toplam</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Button asChild size="lg" className="w-full" onClick={() => onOpenChange(false)}>
                <Link href="/checkout">
                  Ödemeye Geç
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full" onClick={() => onOpenChange(false)}>
                <Link href="/products">Alışverişe Devam Et</Link>
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
