import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { GetUserByIdController } from "./controllers/user/GetUserByIdController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";

const router = Router();

// User Routes
router.post("/user", new CreateUserController().handle);
router.post("/signin", new AuthUserController().handle);
router.get("/getUserById", isAuthenticated, new GetUserByIdController().handle);
router.delete(
  "/user/remove",
  isAuthenticated,
  new RemoveUserController().handle,
);

// Category Routes
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle,
);

router.put(
  "/category/edit",
  isAuthenticated,
  new EditCategoryController().handle,
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);
router.delete(
  "/category/remove",
  isAuthenticated,
  new RemoveCategoryController().handle,
);
export { router };
