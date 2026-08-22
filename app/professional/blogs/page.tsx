import HeroBlogs from "@/components/section/blogs/HeroBlogs";

export default function Blogs() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <HeroBlogs
        title="My blogs"
        description="Discover my blog articles, where I share my thoughts, experiences and tips on web development and technology."
      />
    </main>
  );
}
