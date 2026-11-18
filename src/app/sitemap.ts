import type { MetadataRoute } from "next";
import { ministries } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/nosotros",
    "/ministerios",
    "/galeria",
    "/ofrendas",
    "/contacto",
    ...ministries.map((ministry) => `/ministerios/${ministry.slug}`),
  ];

  return pages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
