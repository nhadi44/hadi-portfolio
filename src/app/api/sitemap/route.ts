export async function GET() {
  const baseUrl = "https://www.hadinurhidayat.cloud";
  const pages = [
    { path: "/", lastmod: "2024-09-22", changefreq: "daily", priority: "1.0" },
    // {
    //   path: "/about",
    //   lastmod: "2024-09-22",
    //   changefreq: "monthly",
    //   priority: "0.8",
    // },
    // Add more pages as needed
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
        ${pages
          .map(({ path, lastmod, changefreq, priority }) => {
            return `
                <url>
                    <loc>${baseUrl}${path}</loc>
                    <lastmod>${lastmod}</lastmod>
                    <changefreq>${changefreq}</changefreq>
                    <priority>${priority}</priority>
                </url>`;
          })
          .join("")}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
