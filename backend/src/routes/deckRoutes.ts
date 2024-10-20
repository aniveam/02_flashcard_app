import express from "express";
import { getDecks } from "../controllers/deckController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = express.Router();

router.get('/api/decks', authenticateToken, getDecks)



export default router