
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/blog-data';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }
  
  const otherPosts = getBlogPosts({ limit: 2 }).filter(p => p.slug !== params.slug);

  return (
    <div className="container mx-auto px-4 py-12 lg:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Tüm Yazılara Geri Dön
          </Link>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span>{new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>&bull;</span>
            <span>{post.author}</span>
            <Badge variant="outline">{post.category}</Badge>
          </div>
        </div>

        <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
           <Image
              src={post.image}
              alt={post.title}
              data-ai-hint="blog post"
              fill
              className="object-cover"
              priority
            />
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Diğer Yazılar</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl">
                  <div className="relative h-48 w-full">
                    <Image
                      src={p.image}
                      alt={p.title}
                      data-ai-hint="blog post"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                     <Badge variant="secondary" className="mb-2">{p.category}</Badge>
                     <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                     <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
           </div>
        </div>

      </div>
    </div>
  );
}

// Generate static paths for blog posts
export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map(post => ({
        slug: post.slug,
    }));
}
