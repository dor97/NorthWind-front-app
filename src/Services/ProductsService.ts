import axios from "axios";
import { ProductsModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";
import { appStore } from "../Redux/Store";
import { productActions } from "../Redux/ProductsSlice";


class ProductsService{

    public async getAllProducts(): Promise<ProductsModel[]> {
        
        //Take products from the global state:
        let products = appStore.getState().products;

        //If we have products:
        if(products.length > 0) return products;

        //Fetch products from REST API:
        const response = await axios.get<ProductsModel[]>(appConfig.productsUrl);

        //Extract products:
        products = response.data;

        //Add products to global store:
        appStore.dispatch(productActions.initAll(products));

        //Return:
        return products
    }

    public async getOneProduct(id: number) : Promise<ProductsModel>{

        //Take products from global state:
        let products = appStore.getState().products;

        //Find that product:
        let product = products.find(p => p.id === id);

        if(product) return product;

        //Fetch product from REST API:
        const response = await axios.get<ProductsModel>(appConfig.productsUrl + id);

        //Extract products:
        product = response.data;
 
        //Return:
        return product
    }

    public async addProduct(product: ProductsModel): Promise<void>{

        // //Axios options:
        // const options = {
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     }
        // };

        //Send the product to backend:
        const response = await axios.post<ProductsModel>(appConfig.productsUrl, product, appConfig.axiosOptions);

        //Extract products:
        const addedProduct = response.data;

        //Add to global state:
        if(appStore.getState().products.length > 0)
            appStore.dispatch(productActions.addOne(addedProduct));

        //console.log(addedProduct);
    }

    public async updateProduct(product: ProductsModel): Promise<void>{

        //Send the product to backend:
        const response = await axios.put<ProductsModel>(appConfig.productsUrl + product.id, product, appConfig.axiosOptions);

        //Extract updated products:
        const updatedProduct = response.data;

        //Update in global state:
        appStore.dispatch(productActions.updatedOne(updatedProduct));

        //console.log(updatedProduct);
    }

    public async deleteProduct(id: number) : Promise<void>{

        //Delete product from REST API:
        await axios.delete<ProductsModel>(appConfig.productsUrl + id);

        //Delete from global state:
        appStore.dispatch(productActions.deleteOne(id));
   }

}

export const productsService = new ProductsService();