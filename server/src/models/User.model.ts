import type Database from "../databse/DatabaseConnection";

export default class UserModel {
  databse: Database;

  /**
   * @param {Database} databse - dependency injection for Database
   */
  constructor(databse: Database) {
    this.databse = databse;
  }

  async getTest(): Promise<void> {
    const sql = "SELECT * FROM `products`";

    this.databse.executeQueryProm(sql, []);
  }

  /**
   * @async
   * @param {string[]} queryArgs
   * @returns {Promise<void>}
   */
  async insertRegister(queryArgs: string[]): Promise<void> {
    const sql =
      "INSERT INTO `users` (`id`, `name`, `surname`, `email`, `password`) VALUES (NULL, ?, ?,?,?)";

    await this.databse.executeQueryProm(sql, queryArgs);
  }

  /**
   * @async
   * @param {string[]} queryArgs
   * @returns {Promise<string>}
   */
  async getUserPassword(queryArgs: string[]): Promise<string> {
    const sql = "SELECT password FROM `users` WHERE email= ? ";

    const response = await this.databse.executeQueryProm(sql, queryArgs);

    const [[{ password }]]: any = response;

    return password;
  }
}
