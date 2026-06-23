export function protectRoute(req, res, next) {
  // With Clerk, `clerkMiddleware()` typically populates `req.auth`
  // (and sometimes a user-like object under `req.auth.user`).
  const user =
    req.user ||
    req.auth?.user ||
    req.auth?.payload ||
    req.auth ||
    null;

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.user = user;
  return next();
}
