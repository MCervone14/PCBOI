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
    "/review/:slug",
    "/review/category/:slug",
    "/review/search/:slug",
    "/review/tag/:slug",
    "/test",
    "/test/ReviewHomePageCard",
    "/test/GameInfoPage",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
