import { ProductsModel } from "../Models/ProductModel"
import { UserModel } from "../Models/UserModel";

// AppState - Containing the enter application state:
export type AppState = {
    
    //List of products:
    products: ProductsModel[];

    //End user:
    user: UserModel;
};