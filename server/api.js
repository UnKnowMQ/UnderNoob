import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/userRoutes.js";
import 'dotenv/config'; 

const app = express();
const PORT = process.env.PORT || 4000; 

// Middleware
app.use(express.json()); 
app.use(cors()); 


app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("API is working now!");
});

app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong!" });
});

// Connect to the database  and start server
(async () => {
  try {
    await connectDB();
    console.log("Database connected successfully");

    
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); 
  }
})();
