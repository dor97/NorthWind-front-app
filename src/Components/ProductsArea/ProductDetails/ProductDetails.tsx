import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { productsService } from "../../../Services/ProductsService";
import { ProductsModel } from "../../../Models/ProductModel";
import { NavLink } from "react-router-dom";
import { notify } from "../../../Utils/Notify";


function ProductDetails(): JSX.Element {

    const params = useParams();
    const id = +params.id;
    const navigate = useNavigate();

    const [product, setProduct] = useState<ProductsModel>();
    
    useEffect(() => {
        productsService.getOneProduct(id)
        .then(dbProduct => setProduct(dbProduct))
        .catch(err => notify.error(err));
    }, []);

    async function deleteMe(){
        try{
            const ok = window.confirm("Are you sure?");
            if(!ok) return;
            await productsService.deleteProduct(id);
            //alert("Product has been deleted.");
            notify.success("Product has been deleted.");
            navigate("/products");
        }
        catch(err: any){
            notify.error(err);
            //alert(err.message);
        }
    }


    return (
        <div className="ProductDetails">
            <h3>Name: {product?.name}</h3>                
            <h3>Price: {product?.price}</h3>                
            <h3>Stock: {product?.stock}</h3>

            <img src={product?.imageUrl}/>
            <div>
                <NavLink to="/products">Back</NavLink>
                <span> | </span>
                <NavLink to={"/products/edit/" + product?.id}>Edit</NavLink>
                <span> | </span>
                <NavLink to="#" onClick={deleteMe}>Delete</NavLink>
            </div>
        </div>
    );
}

export default ProductDetails;
