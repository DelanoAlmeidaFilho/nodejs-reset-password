import { Router } from "express";
import { createUserValidation } from "../validators/userValidations";
import { CreateUserController } from "modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

usersRoutes.post('/', createUserValidation, CreateUserController.handle);

export {usersRoutes}