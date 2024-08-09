import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
  const post = await res.json();

  if (!post) {
    return notFound();
  }

  return {
    title: post.title,
    description: post.body.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.body.slice(0, 160),
      url: `http://localhost:3000/${params.slug}`,
    //   images: [
    //     {
    //       url: post.imageUrl,
    //     },
    //   ],
    },
    alternates: {
      canonical: `http://localhost:3000/${params.slug}`,
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
  const post = await res.json();

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
