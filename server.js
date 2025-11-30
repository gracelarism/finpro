import express from "express";
import kelasRoutes from "./routes/kelasRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// ROUTES
app.use("/api/classes", kelasRoutes);

// ROOT
app.get("/", (req, res) => {
  res.json({
    message: "API Kelas Musik berjalan!",
    endpoints: {
      list: "/api/classes/musik",
      detail: "/api/classes/musik/:id"
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
