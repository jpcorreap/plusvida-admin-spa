const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
const csv = require("@fast-csv/parse");
const fs = require("fs");
const path = require("path");
const { Console } = require("console");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

function FirestoreUtils() {
  const db = admin.firestore();
  let usersCol = db.collection("users").doc("RKN0RJjboPn3LiBVFxrU");
  let utilsCol = db.collection("utils");

  let fu = {};

  // -----------------
  // USERS OPERATIONS
  // -----------------
  fu.users = {};

  fu.users.create = () =>
    usersCol.set({
      eps: "Sánitas",
      numdoc: 9999999,
      born: 1815,
    });

  //------------------
  // UTILS OPERATIONS
  //------------------
  fu.utils = {};

  function formatAndUploadSimpleFormat(where, docName) {
    let objects = [];

    fs.createReadStream(path.resolve(__dirname, "assets", docName + ".csv"))
      .pipe(csv.parse({ headers: true, delimiter: ";" }))
      .on("error", (error) => console.error(error))
      .on("data", (row) => objects.push(row))
      .on("end", (_) => {
        // TODO Hay que persistir objects
        switch (docName) {
          case "documentos":
            where.set({ documentos: objects }, { merge: true });
            break;
          case "nacionalidades":
            where.set({ nacionalidades: objects }, { merge: true });
            break;
          case "discapacidades":
            where.set({ discapacidades: objects }, { merge: true });
            break;
          case "etnias":
            where.set({ etnias: objects }, { merge: true });
            break;
          case "departamentos":
            where.set({ departamentos: objects }, { merge: true });
            break;
          case "eps_otras":
            where.set({ otras: objects }, { merge: true });
            break;
          case "eps_gubernamentales":
            where.set({ gubernamentales: objects }, { merge: true });
            break;
          default:
            break;
        }
      });
  }

  function formatAndUploadComplexFormat(docName) {
    let objects = {};

    fs.createReadStream(path.resolve(__dirname, "assets", docName + ".csv"))
      .pipe(csv.parse({ headers: true, delimiter: ";" }))
      .on("error", (error) => console.error(error))
      .on("data", (row) => {
        if (objects[row["departamento"]] == null) {
          objects[row["departamento"]] = [];
        }
        objects[row["departamento"]].push({ id: row.id, value: row.value });
      })
      .on("end", (_) => {
        // TODO Hay que persistir objects
        switch (docName) {
          case "municipios":
            utilsCol
              .doc("registro")
              .set({ municipios: objects }, { merge: true });
            //console.log(objects);
            break;
          case "eps_gubernamentales":
            utilsCol
              .doc("eps")
              .set({ gubernamentales: objects }, { merge: true });
            //console.log(objects);
            break;
          default:
            break;
        }
      });
  }

  fu.utils.setupRegistro = () => {
    let docNames = [
      "departamentos",
      "documentos",
      "nacionalidades",
      "discapacidades",
      "etnias",
    ];

    docNames.forEach((docName) =>
      formatAndUploadSimpleFormat(utilsCol.doc("registro"), docName)
    );
  };

  fu.utils.setupEPSandMunicipios = () => {
    let docNames = ["municipios", "eps_gubernamentales"];

    docNames.forEach((docName) => formatAndUploadComplexFormat(docName));

    formatAndUploadSimpleFormat(utilsCol.doc("eps"), "eps_otras");
  };

  return fu;
}

module.exports = FirestoreUtils();
