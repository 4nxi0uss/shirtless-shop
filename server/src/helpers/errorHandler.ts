import type { Request, Response, NextFunction } from "express";

/**
 * @param {Error} err
 * @param {Request} _req
 * @param {Response} res
 * @param {NextFunction} _next
 * @returns {Response}
 */
export default function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response {
  if (typeof err === "string") {
    // custom application error
    return res.status(400).json({ message: err });
  }

  if (err.name === "ValidationError") {
    // mongoose validation error
    return res.status(400).json({ message: err.message });
  }

  if (err.name === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({ message: "Invalid Token" });
  }

  console.log("err-123", err);

  // default to 500 server error
  return res.status(500).json({ message: err.message });
}
