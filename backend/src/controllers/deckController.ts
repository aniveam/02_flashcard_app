import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/authMiddleware";

const getDecks = async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.body.user;
  console.log("getDecks", req.body);
};

export { getDecks };
