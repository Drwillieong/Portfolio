import HeroBlogs from "@/components/section/blogs/HeroBlogs";

export default function Blogs() {
  return (
    <main className="max-w-220 mx-auto py-12 sm:py-24 px-6 space-y-10">
      <HeroBlogs
        title="Mes blogs"
        description="Découvrez mes articles de blog, où je partage mes réflexions, expériences et conseils sur le développement web et la technologie."
      />
    </main>
  );
}
