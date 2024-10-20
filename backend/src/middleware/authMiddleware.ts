import { NextFunction, Request, Response } from "express";
import admin from "../config/firebase";

interface AuthenticatedRequest extends Request {
  user?: admin.auth.DecodedIdToken;
}

const authenticateToken = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    res.status(401).json({ error: "Token denied" });
    return;
  }
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.log("Error authenticating token.");
  }
};

export { authenticateToken, AuthenticatedRequest };
