const { firebase } = require("../firebase");

const db = firebase.firestore();

function informacionPersonal(req, res, next) {
  console.log(db.collection("persona"));
  db.collection("persona")
    .get()
    .then((data) => {
      data.forEach((item) => {
        console.log(item.data());
        return res.render("modulos/informacion", { data: item.data() });
      });
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

function actualizarInformacionPersonal(req, res, next) {
  db.collection("persona")
    .get()
    .then((data) => {
      data.forEach((item) => {
        console.log(item.data());
        return res.render("modulos/admin", { data: item.data() });
      });
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

function actualizarInformacionPersonalFirebase(req, res, next) {
  console.log(parseInt(req.body.id));

  db.collection("persona")
    .doc("KCHmAfkyKCcbcq6ZhD5e")
    .update({
      nombre: `${req.body.nombre}`,
      apellido: `${req.body.apellido}`,
      email: `${req.body.email}`,
      telefono: `${req.body.telefono}`,
      edad: `${req.body.edad}`,
      profesion: `${req.body.profesion}`,
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

module.exports = {
  informacionPersonal,
  actualizarInformacionPersonal,
  actualizarInformacionPersonalFirebase,
};
