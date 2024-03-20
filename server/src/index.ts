import express from "express";
import type { Express, Response, Request } from "express";
import dotenv from "dotenv";
import user from "./routes/User.routes";
import errorHandler from "./helpers/errorHandler";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

/** users endpoint */
app.use(bodyParser.json());

app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use("/users", user);

/** global error handler */
app.use(errorHandler);

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
