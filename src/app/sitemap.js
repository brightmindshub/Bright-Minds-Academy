import { courseCategories } from "@/data/courses";

export default async function sitemap() {
  const baseUrl = "https://brightmindshub.in";

  const staticRoutes = ["", "/about", "/contact", "/campus", "/reviews", "/blogs", "/faq-section"];
  
  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const courseRoutes = [];

  courseCategories.forEach((category) => {
    category.courses.forEach((course) => {
      if (category.page === "language-tests") {
        courseRoutes.push({
          url: `${baseUrl}/${course.slug}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "weekly",
          priority: 0.9,
        });
      } else {
        courseRoutes.push({
          url: `${baseUrl}/${category.page}?course=${course.slug}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    });
  });

  return [...staticPages, ...courseRoutes];
}