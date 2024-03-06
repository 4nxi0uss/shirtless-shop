import { PoolOptions } from "mysql2";

export const DbConfig: PoolOptions = {
  host: "127.0.0.1",
  port: 3309,
  user: "root",
  password: "root123",
  database: "project",
};
