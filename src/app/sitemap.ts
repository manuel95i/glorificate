import type { MetadataRoute } from "next";
import { ministries } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/nosotros",
    "/ministerios",
    "/labor-social",
    "/galeria",
    "/ofrendas",
    "/contacto",
    ...ministries.map((ministry) => `/ministerios/${ministry.slug}`),
  ];

  return pages.map((path) => ({
    url: `https://glorificate.pa${path}`,
    lastModified: new Date(),
  }));
}
