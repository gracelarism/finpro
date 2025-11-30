const express = require("express");
const app = express();
const kelasRoutes = require("./routes/kelasRoutes");

app.use(express.json());

// ROUTES
app.use("/api/classes", kelasRoutes);

// ROOT ENDPOINT (opsional)
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API Kelas Musik berjalan dengan baik!",
    endpoints: {
      getAll: "/api/classes",
      getById: "/api/classes/:id",
      create: "/api/classes",
      update: "/api/classes/:id",
      delete: "/api/classes/:id"
    }
  });
});

// SERVER RUNNING
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
