import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { CartProvider } from '@/context/cart-context';
import { AuthProvider } from '@/context/auth-context';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Online Storefront',
  description: 'A modern e-commerce experience built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <div className="relative flex min-h-dvh flex-col bg-background">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
              </div>
              <Toaster />
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
