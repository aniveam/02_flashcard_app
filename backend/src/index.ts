import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import deckRoutes from "./routes/deckRoutes";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/decks', deckRoutes)

app.listen(PORT, () =>
  console.log(`Server is running on PORT ${PORT}`)
);
