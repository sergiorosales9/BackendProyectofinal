const router = require("express").Router();

router.route("/").get((req, res, next) => {
  console.log(req.user);

  res.json({
    user: req.user,
    message: "el recurso esta disponible",
  });
});

module.exports = router;
