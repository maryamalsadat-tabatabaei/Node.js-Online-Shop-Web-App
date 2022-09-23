exports.getError = (req, res, next) => {
  res.status(404).render("error", {
    pageTitle: "Page Not Found",
    path: "/error",
    isAuthenticated: req.session.isLoggedIn,
  });
};
