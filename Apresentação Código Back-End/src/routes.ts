import { Router } from "express";
//USER
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUsersController } from "./controller/user/ListUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";
//CATEGORY
import { CreateCategoryController } from "./controller/category/CreateCategoryConstroller";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { UpdateCategoryController } from "./controller/category/UpdateCategory";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";
//PRODUCT
import { CreateProductController } from "./controller/product/CreateProductController";
import { ListProductController } from "./controller/product/ListProductController";
import { UpdateProductController } from "./controller/product/UpdateProductController";
import { DeleteProductController } from "./controller/product/DeleteProductController";
//CLIENT
import { CreateClientController } from "./controller/client/CreateClientController";
import { ListClientController } from "./controller/client/ListClientController";
import { UpdateClientController } from "./controller/client/UpdateClientController";
import { DeleteClientController } from "./controller/client/DeleteClientController";
//SALE
import { CreateSaleController } from "./controller/sale/CreateSaleController";
import { ListSaleController } from "./controller/sale/ListSaleController";
import { UpdateSaleController } from "./controller/sale/UpdateSaleController";
import { DeleteSaleController } from "./controller/sale/DeleteSaleController";
//PROFILE
import { CreateProfileController } from "./controller/profile/CreateProfileController";
import { ListProfileController } from "./controller/profile/ListProfileController";
import { UpdateProfileController } from "./controller/profile/UpdateProfileController";
import { DeleteProfileController} from "./controller/profile/DeleteProfileController";
//Supplier
import { CreateSupplierController } from "./controller/supplier/CreateSupplierController";
import { ListSupplierController } from "./controller/supplier/ListSupplierController";
import { UpdateSupplierController } from "./controller/supplier/UpdateSupplierController";
import { DeleteSupplierController} from "./controller/supplier/DeleteSupplierController";

//LOGIN
import { AuthenticateUserController } from "./controller/autentication/AutenticateUserController";
 
import { ensureAuthenticated } from "./middleware/ensureAutenticated";
 
const router = Router();
//USER
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

//Profile
const createProfileController  = new CreateProfileController();
const listProfileController = new ListProfileController();
const updateProfileController = new UpdateProfileController();
const deleteProfileController = new DeleteProfileController();

//CATEGORY
const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();



//PRODUCT
const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();
//CLIENT
const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();
//SALE
const createSaleController = new CreateSaleController();
const listSaleController = new ListSaleController();
const updateSaleController = new UpdateSaleController();
const deleteSaleController = new DeleteSaleController();

//SALE
const createSupplierController = new CreateSupplierController();
const listSupplierController = new ListSupplierController();
const updateSupplierController = new UpdateSupplierController();
const deleteSupplierController = new DeleteSupplierController();

//LOGIN
const autenticateUserController = new AuthenticateUserController();
//LOGIN
router.post("/login", autenticateUserController.handle);

//USER
router.post("/user", createUserController.handle);
router.get("/user", listUsersController.handle);
router.get("/user/:id", listUsersController.findById);
router.put("/user/:id", updateUserController.handle);
router.delete("/user/:id", deleteUserController.handle);


//CATEGORY
router.post("/category", createCategoryController.handle);
router.get("/category", listCategoryController.handle);
router.get("/category/:id", listCategoryController.findById);
router.put("/category/:id", updateCategoryController.handle);
router.delete("/category/:id", deleteCategoryController.handle);
//PRODUCT
router.post("/product", createProductController.handle);
router.get("/product", listProductController.handle);
router.get("/product/:id", listProductController.findById);
router.put("/product/:id", updateProductController.handle);
router.delete("/product/:id", deleteProductController.handle);
//CLIENT
router.post("/client", createClientController.handle);
router.get("/client", listClientController.handle);
router.get("/client/:id", listClientController.findById);
router.put("/client/:id", updateClientController.handle);
router.delete("/client/:id", deleteClientController.handle);
//SALE
router.post("/sale", createSaleController.handle);
router.get("/sale", listSaleController.handle);
router.get("/sale/:id", listSaleController.findById);
router.put("/sale/:id", updateSaleController.handle);
router.delete("/sale/:id", deleteSaleController.handle);
//Profile
router.post("/profiles", createProfileController.handle);
router.get("/profiles", listProfileController.handle);
router.get("/profiles/:id", listProfileController.findById);
router.put("/profiles/:id", updateProfileController.handle);
router.delete("/profiles/:id", deleteProfileController.handle);

//Supplier
router.post("/supplier", createSupplierController.handle);
router.get("/supplier", listSupplierController.handle);
router.get("/supplier/:id", listSupplierController.findById);
router.put("/supplier/:id", updateSupplierController.handle);
router.delete("/supplier/:id", deleteSupplierController.handle);


router.use(ensureAuthenticated)
export { router };