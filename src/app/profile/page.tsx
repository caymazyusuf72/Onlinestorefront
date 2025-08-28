'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, LogOut, Palette, Sun, Leaf, Sparkles, Snowflake } from 'lucide-react';
import { useTheme } from '@/context/theme-context';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';

export default function ProfilePage() {
  const { user, loading, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    logout();
    toast({ title: 'Logged out successfully.' });
    router.push('/');
  };

  if (loading || !user) {
    return null; // Or a loading spinner
  }

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
      return names[0][0] + names[names.length - 1][0];
    }
    return name[0];
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:px-6">
      <Card className="mx-auto max-w-2xl">
        <CardHeader className="text-center">
          <Avatar className="mx-auto h-24 w-24 mb-4">
            <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'}/>
            <AvatarFallback className="text-3xl">
              {getInitials(user.displayName)}
            </AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl">{user.displayName || 'Welcome!'}</CardTitle>
          <CardDescription>This is your personal profile page.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <User className="h-6 w-6 text-muted-foreground" />
                    <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="font-medium">{user.displayName}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <Mail className="h-6 w-6 text-muted-foreground" />
                    <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{user.email}</p>
                    </div>
                 </div>
            </div>
            <Separator />
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-muted-foreground"/>
                <h3 className="text-lg font-semibold">Tema Seçimi</h3>
              </div>
              <RadioGroup value={theme} onValueChange={setTheme} className="grid grid-cols-2 gap-4">
                 <div>
                    <RadioGroupItem value="spring" id="spring" className="peer sr-only" />
                    <Label htmlFor="spring" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                      <Leaf className="mb-2 h-6 w-6" />
                      İlkbahar
                    </Label>
                  </div>
                   <div>
                    <RadioGroupItem value="summer" id="summer" className="peer sr-only" />
                    <Label htmlFor="summer" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                      <Sun className="mb-2 h-6 w-6" />
                      Yaz
                    </Label>
                  </div>
                   <div>
                    <RadioGroupItem value="autumn" id="autumn" className="peer sr-only" />
                    <Label htmlFor="autumn" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                      <Sparkles className="mb-2 h-6 w-6" />
                      Sonbahar
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="winter" id="winter" className="peer sr-only" />
                    <Label htmlFor="winter" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                      <Snowflake className="mb-2 h-6 w-6" />
                      Kış
                    </Label>
                  </div>
              </RadioGroup>
            </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleLogout} variant="outline" className="w-full">
            <LogOut className="mr-2" /> Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
