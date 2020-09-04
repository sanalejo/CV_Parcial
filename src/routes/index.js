const {
  actualizarInformacionPersonal,
  informacionPersonal,
  actualizarInformacionPersonalFirebase,
} = require("./../services");
const router = require("express").Router();

router.get("/", informacionPersonal);

router.get("/admin", actualizarInformacionPersonal);

router.post("/admin", actualizarInformacionPersonalFirebase);

module.exports = router;
