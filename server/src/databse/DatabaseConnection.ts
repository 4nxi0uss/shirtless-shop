import type { Response } from "express";
import * as dsa from "mysql2";
import mysql from "mysql2/promise";
import type { Pool as prPool } from "mysql2/promise";
import type { Pool, PoolOptions } from "mysql2/typings/mysql/lib/Pool";

export default class Database {
  pool: Pool;
  poolPr: prPool;

  /**
   * @param {PoolOptions} config
   */
  constructor(config: PoolOptions) {
    this.pool = dsa.createPool(config);
    this.poolPr = mysql.createPool(config);
  }

  /**
   * @param {string} sql
   * @param {string[]} params
   * @param {CallableFunction} callback
   */
  executeQuery(sql: string, params: string[], callback: CallableFunction) {
    this.pool.getConnection((err, connection) => {
      if (err) {
        callback(err, null);
        return;
      }

      return connection.query(sql, params, (error, results, _fields) => {
        if (error) {
          console.log("err-321", err);

          callback(error, null);
          return;
        }

        callback(null, results);
        connection.release();
        return results;
      });
    });
  }

  /**
   * @async
   * @param {string} sql
   * @param {string[]} params
   * @returns {Promise<Response>}
   */
  async executeQueryProm(sql: string, params: string[]) {
    try {
      const res = await this.poolPr.query(sql, params);

      return res;
    } catch (err) {
      console.log("preom-1", err);
    }
  }
}
