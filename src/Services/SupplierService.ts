import axios from "axios";
import { SupplierModel } from "../Models/SupplierModel";
import { appConfig } from "../Utils/AppConfig";


class SupplierService{

    public async getAllSuppliers(): Promise<SupplierModel[]>{

        //Fetch products from REST API:
        const response = await axios.get<SupplierModel[]>(appConfig.supplierUrl);

        //Extract suppliers:
        const suppliers = response.data;

        //Return:
        return suppliers;
    }
}

export const suppliersService = new SupplierService();