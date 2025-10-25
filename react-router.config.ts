import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // you can prerender certain routes and leave others as client side 
  // better for SEO and performance!
  // async prerender() {
  //   return ["/", "/about", "dashboard"]
  // }
} satisfies Config;
