/** @type {import('next').NextConfig} */

/**
 * FPO → Prove 301 migration + internal route renames.
 * Source of truth: prototype/Sitemap-Redirects.dc.html. Retired
 * Fractional-People-Officer paths funnel their SEO equity into Prove; FPO
 * keyword slugs we haven't migrated as individual spokes yet land on /guides.
 */
const redirects = [
  // Internal renames (canonical URL structure)
  { source: "/eos", destination: "/for-eos", permanent: true },
  { source: "/eos/:path*", destination: "/for-eos/:path*", permanent: true },
  {
    source: "/free-tools/hidden-gem",
    destination: "/free-tools/hidden-gem-identifier",
    permanent: true,
  },

  // FPO shell → Prove equivalents
  { source: "/services", destination: "/work-with-us", permanent: true },
  { source: "/get-to-green", destination: "/free-tools/get-to-green", permanent: true },
  { source: "/get-to-green-app", destination: "/free-tools/get-to-green", permanent: true },
  { source: "/playbook", destination: "/free-tools", permanent: true },
  { source: "/team", destination: "/about", permanent: true },
  { source: "/lifecycle", destination: "/guides", permanent: true },
  { source: "/resources", destination: "/guides", permanent: true },

  // FPO keyword pages — migrate into the /guides layer (hub until each spoke lands)
  { source: "/what-is-a-fractional-chro", destination: "/guides", permanent: true },
  { source: "/what-does-a-cpo-do", destination: "/guides", permanent: true },
  { source: "/cost", destination: "/guides", permanent: true },
  { source: "/vs-consultant", destination: "/guides", permanent: true },
  { source: "/vs-peo", destination: "/guides", permanent: true },
  { source: "/7-signs", destination: "/guides", permanent: true },
  { source: "/turnover", destination: "/guides", permanent: true },
  { source: "/culture", destination: "/guides", permanent: true },
  { source: "/due-diligence", destination: "/guides", permanent: true },
  { source: "/onboarding", destination: "/guides", permanent: true },
  { source: "/for-pe", destination: "/guides", permanent: true },
  { source: "/hr-systems", destination: "/guides", permanent: true },
];

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
