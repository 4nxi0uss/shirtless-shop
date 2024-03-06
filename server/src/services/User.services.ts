import type PasswordSerialization from "../helpers/PasswordSerialization";
import type UserModel from "../models/User.model";

export default class UserServices {
  userQuery: UserModel;
  passwordSerialization: PasswordSerialization;

  /**
   * @param {UserModel} userQuery - dependency  injection for userModel
   * @param {PasswordSerialization} passwordSerialization - dependency injection for password hash
   */
  constructor(
    userQuery: UserModel,
    passwordSerialization: PasswordSerialization,
  ) {
    this.userQuery = userQuery;
    this.passwordSerialization = passwordSerialization;
  }

  /**
   * @async
   * @param {string} userName
   * @param {string} userSurname
   * @param {string} userEmail
   * @param {string} userPass
   * @returns {Promise<void>}
   */
  async userRegister(
    userName: string,
    userSurname: string,
    userEmail: string,
    userPass: string,
  ): Promise<void> {
    try {
      const passHash: any = this.passwordSerialization.hashPassword(userPass);

      const userData: string[] = [userName, userSurname, userEmail, passHash];

      this.userQuery.insertRegister(userData);
    } catch (error) {
      console.error("err-register-1", error);
    }
  }

  /**
   * @async
   * @param {string} userPass
   * @param {string} userEmail
   * @returns {Promise<boolean>}
   */
  async userLogin(userPass: string, userEmail: string): Promise<boolean> {
    const userData: string[] = [userEmail];
    let hash: string = "";

    try {
      hash = await this.userQuery.getUserPassword(userData);
    } catch (error) {
      console.error("err-login-1", error);
    }

    const passCompare = this.passwordSerialization.comparePassword(
      userPass,
      hash,
    );

    return passCompare;
  }
}
