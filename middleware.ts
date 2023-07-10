import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/games",
    "/games/new-games",
    "/games/top-100",
    "/games/:category",
    "/game/:slugId",
    "/reviews",
    "/reviews/:slug",
    "/reviews/category/:slug",
    "/reviews/search/:slug",
    "/reviews/tag/:slug",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
