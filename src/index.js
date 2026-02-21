const path = require("path");
const express = require("express");

const app = express();
const staticDir = __dirname;

app.disable("x-powered-by");
app.use(express.static(staticDir));

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    service: "alpha6-site",
    time: new Date().toISOString(),
  });
});

app.use((_req, res) => {
  res.status(404).sendFile(path.join(staticDir, "index.html"));
});

const PORT = Number(process.env.PORT) || 3000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Alpha6 online na porta ${PORT}`);
  });
}

module.exports = app;
