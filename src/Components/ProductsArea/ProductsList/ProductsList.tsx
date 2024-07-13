import { useEffect, useState } from "react";
import { productsService } from "../../../Services/ProductsService";
import "./ProductsList.css";
import { ProductsModel } from "../../../Models/ProductModel";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "../../SharedArea/Spinner/Spinner";
import { useTitle } from "../../../Utils/useTitle";
import { notify } from "../../../Utils/Notify";

function ProductsList(): JSX.Element {
    useTitle("NorthWind | Products");

    const [products, setProducts] = useState<ProductsModel[]>([]);

    useEffect(() => {
        productsService.getAllProducts()
            .then(dbProducts => setProducts(dbProducts))
            .catch(err => notify.error(err));
    }, []);


    return (
        <div className="ProductsList">
            <h2>Products List:</h2>
            {products.length == 0 && <Spinner />}

			{products.map(p => <ProductCard key={p.id} product={p}/>)}
            
        </div>
    );
}

export default ProductsList;
