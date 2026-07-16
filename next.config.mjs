/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // FPO domain demand funnels into Prove (handoff §1, §5).
    // Legacy FPO shell routes 301 to their Prove equivalents.
    return [
      { source: "/services", destination: "/how-it-works", permanent: true },
      { source: "/playbook", destination: "/how-it-works", permanent: true },
      { source: "/team", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
