import express from "express";
import type { Router } from "express";
import UserController from "../controllers/User.controller";
import UserModel from "../models/User.model";
import { DbConfig } from "../config/Database.config";
import Database from "../databse/DatabaseConnection";
import UserServices from "../services/User.services";
import PasswordSerialization from "../helpers/PasswordSerialization";

const router: Router = express.Router();

const database = new Database(DbConfig);

const userQueries = new UserModel(database);

const passSerialize = new PasswordSerialization();

const userServices = new UserServices(userQueries, passSerialize);

const userCntr = new UserController(userQueries, userServices);

router.post("/login", userCntr.userLogin);
router.post("/register", userCntr.userRegister);

export default router;
