import type { Request, Response } from "express";
import type UserModel from "../models/User.model";
import type UserServices from "../services/User.services";

export default class UserController {
  userQueries: UserModel;
  userServices: UserServices;

  /**
   * @param {UserModel} userModel - Dependency injection for userModel
   * @param {UserServices} userServices - Dependency injection for userServices
   */
  constructor(userModel: UserModel, userServices: UserServices) {
    this.userQueries = userModel;
    this.userServices = userServices;

    this.userLogin = this.userLogin.bind(this);
    this.userRegister = this.userRegister.bind(this);
  }

  /**
   * @async
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async userLogin(req: Request, res: Response): Promise<void> {
    try {
      const { email = "", password = "" } = req.body || {};

      if (email === "") {
        res.status(203).json({ res: "empty string " });

        return;
      }

      await this.userServices.userLogin(password, email);

      res.status(200).json({ msg: "login!" });
    } catch (error) {
      console.error("err-login-2", error);
      res.status(404).json({ error });
    }
  }

  /**
   * @async
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async userRegister(req: Request, res: Response): Promise<void> {
    try {
      const {
        name = "",
        surname = "",
        email = "",
        password = "",
      } = req.body || {};

      if (name === "") {
        res.status(203).json({ res: "empty string " });

        return;
      }

      await this.userServices.userRegister(name, surname, email, password);

      res.status(200).json({ res: "register!" });
    } catch (error) {
      console.log("err-register-2", error);

      res.status(404).json({ error });
    }
  }
}
