import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { GetUserByIdController } from "./controllers/user/GetUserByIdController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { RemoveUserController } from "./controllers/user/RemoveUserController";

const router = Router();

// User Routes
router.post("/user", new CreateUserController().handle);
router.post("/signin", new AuthUserController().handle);
router.get("/getUserById", isAuthenticated, new GetUserByIdController().handle);
router.delete("/user/remove", new RemoveUserController().handle)

export { router };
