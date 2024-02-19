import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { GetUserByIdController } from "./controllers/user/GetUserByIdController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";
import uploadConfig from "./config/multer";
import { CreateProductController } from "./controllers/products/CreateProductController";
import { EditProductController } from "./controllers/products/EditProductController";
import { ListProductByCategoryController } from "./controllers/products/ListProductByCategoryController";
import { DeleteProductController } from "./controllers/products/DeleteProductController";
import { SaleProductControllet } from "./controllers/sales/SaleProductController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

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

// Product Routes
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle,
);

router.put(
  "/product/edit",
  isAuthenticated,
  upload.single("file"),
  new EditProductController().handle,
);

router.get(
  "/productByCategory",
  isAuthenticated,
  new ListProductByCategoryController().handle,
);

router.delete(
  "/product/remove",
  isAuthenticated,
  new DeleteProductController().handle
)

// Sale Route

router.put("/sale", isAuthenticated, new SaleProductControllet().handle);


export { router };
