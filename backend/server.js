const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");
const cors = require("cors");
const app = express();

// Autorisez les requêtes provenant de l'origine http://localhost:3000

// Configuration CORS
const corsOptions = {
  origin: "https://source-frontend-nine.vercel.app", // Autorise uniquement les requêtes en provenance de https://example.com (vous pouvez utiliser une liste de domaines ici)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Méthodes HTTP autorisées
  credentials: true, // Autorise les cookies et les informations d'authentification à être partagés
  allowedHeaders: "Content-Type,Authorization,X-Requested-With", // Entêtes HTTP autorisées
  exposedHeaders: "Content-Range,X-Content-Range", // Entêtes HTTP exposées
  preflightContinue: false, // Contrôle des requêtes OPTIONS
  optionsSuccessStatus: 204, // Code de réponse pour les requêtes OPTIONS
  maxAge: 3600, // Durée en secondes pendant laquelle les résultats des pré-vérifications (preflight) peuvent être mis en cache
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
