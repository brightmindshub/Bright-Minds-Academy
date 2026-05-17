export default function robots() {
  const isDev = process.env.SITE_TYPE === "dev";

  if (isDev) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/", // not allowed in dev branch
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
      ],
    },
    sitemap: "https://brightmindshub.in/sitemap.xml",
  };
}