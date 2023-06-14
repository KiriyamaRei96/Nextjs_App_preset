import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["vi", "en"],
  defaultLocale: "vi",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};