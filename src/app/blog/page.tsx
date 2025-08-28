
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts } from '@/lib/blog-data';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-12 lg:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Blog</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Sektörden haberler, ürün ipuçları ve daha fazlası.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1 flex flex-col">
              <CardHeader className="p-0">
                <div className="relative h-60 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    data-ai-hint="blog post"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-1">
                <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                <h2 className="text-xl font-semibold leading-tight">{post.title}</h2>
                <p className="mt-3 text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0 text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span className="mx-2">&bull;</span>
                <span>{new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
