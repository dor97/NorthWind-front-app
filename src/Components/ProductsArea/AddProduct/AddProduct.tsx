import { useForm } from "react-hook-form";
import { ProductsModel } from "../../../Models/ProductModel";
import "./AddProduct.css";
import { productsService } from "../../../Services/ProductsService";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/useTitle";

function AddProduct(): JSX.Element {
    useTitle("NorthWind | Add Product");

    const navigate = useNavigate();

    const { register, handleSubmit, formState } = useForm<ProductsModel>();

    async function send(product: ProductsModel) {
        try{
            console.log(product);
            product.image = (product.image as unknown as FileList)[0];
            await productsService.addProduct(product);
            //alert("Adding product");
            notify.success("Adding product");
            navigate("/products");
        }
        catch(err : any){
            //alert(err.message);
            notify.error(err);
        }
    }


    return (
        <div className="AddProduct">

            <form onSubmit={handleSubmit(send)}>

                <label>Name:</label>
                <input type="text" {...register("name", ProductsModel.nameValidation)} />
                <span className="error">{formState.errors?.name?.message}</span>

                <label>Price:</label>
                <input type="number" step="0.01" {...register("price", ProductsModel.priceValidation)}  />
                <span className="error">{formState.errors?.price?.message}</span>

                <label>Sock:</label>
                <input type="number" {...register("stock", ProductsModel.stockValidation)} />
                <span className="error">{formState.errors?.stock?.message}</span>

                <label>Image:</label>
                <input type="file" accept="image/*" {...register("image", ProductsModel.imageValidation)}/>
                <span className="error">{formState.errors?.image?.message}</span>

                <button>Add</button>

            </form>

        </div>
    );
}

export default AddProduct;
