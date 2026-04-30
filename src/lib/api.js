export async function getPosts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API}/posts?_embed`,
    {
      next: { revalidate: 60 },
    }
  );

  return res.json();
}