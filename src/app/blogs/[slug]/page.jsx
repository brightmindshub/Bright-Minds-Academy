export const dynamic = "force-dynamic";

import BlogCard from "@/components/blogs/BlogCard";
import Image from "next/image";
import Link from "next/link";

async function getPost(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API}/posts?slug=${slug}&_embed`,
    { next: { revalidate: 60 } },
  );
  const data = await res.json();
  return data[0];
}

async function getMorePosts(excludeId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API}/posts?_embed&per_page=3&exclude=${excludeId}`,
    { next: { revalidate: 60 } },
  );
  return await res.json();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post?.title?.rendered,
    description: post?.excerpt?.rendered?.replace(/<[^>]+>/g, ""),
  };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return <div className="p-20 text-center">Post not found</div>;

  const morePosts = await getMorePosts(post.id);

  const image = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 pt-20 text-center">
        <span className="text-[#f0c44c] font-bold tracking-[0.2em] uppercase text-xs">
          Published Article
        </span>
        <h1
          className="text-4xl md:text-5xl font-black text-[#19125e] mt-4 mb-6 leading-[1.1]"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <p className="text-gray-500 text-sm mb-6">{formattedDate}</p>
        <div className="h-1 w-20 bg-[#f0c44c] mx-auto rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 mb-16 mt-12">
        {image && (
          <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt="Featured"
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-24">
        <div
          className="wp-content-wrap"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>

      <section className="bg-gray-50 py-10 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#19125e] text-center md:text-left">
                Keep Reading
              </h2>
              <p className="text-gray-500 mt-2">
                Discover more interesting stories
              </p>
            </div>
            <Link
              href="/blogs"
              className="text-[#19125e] font-bold border-b-2 border-[#f0c44c] hover:text-[#f0c44c] transition-all pb-1"
            >
              View All Posts
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {morePosts.map((otherPost) => (
              <BlogCard key={otherPost.id} blog={otherPost} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
