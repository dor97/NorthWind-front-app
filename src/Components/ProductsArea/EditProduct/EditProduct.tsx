import "./EditProduct.css";
import { useForm } from "react-hook-form";
import { ProductsModel } from "../../../Models/ProductModel";
import { productsService } from "../../../Services/ProductsService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { notify } from "../../../Utils/Notify";

function EditProduct(): JSX.Element {

    const navigate = useNavigate();

    const { register, handleSubmit, formState, setValue, watch } = useForm<ProductsModel>();

    const params = useParams();
    const id = +params.id;

    // const [img, setImg] =useState<string>("");

    useEffect(() => {
        productsService.getOneProduct(id)
        .then(dbProduct => {
            setValue("id", dbProduct.id);
            setValue("name", dbProduct.name);
            setValue("price", dbProduct.price);
            setValue("stock", dbProduct.stock);
            setValue("image", dbProduct.image);
            setValue("imageUrl", dbProduct.imageUrl);
            // setImg(dbProduct.imageUrl);
        })
        .catch(err => notify.error(err));
    }, [])

    async function send(product: ProductsModel) {
        try{
            console.log(product);
            if(product.image !== undefined){
                product.image = (product.image as unknown as FileList)[0];
            }
            await productsService.updateProduct(product);
            //alert("Product is updating");
            notify.success("Product is updating");
            navigate("/products");
        }
        catch(err : any){
            //alert(err.message);
            notify.error(err);
        }
    }

    return (
        <div className="EditProduct">

			<form onSubmit={handleSubmit(send)}>

                <input type="hidden" {...register("id")}/>

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
                <input type="file" accept="image/*" {...register("image")}/>
                {/* <img src={img}/> */}
                <img src={watch("imageUrl")}/>

                <button>Update</button>

            </form>

        </div>
    );
}

export default EditProduct;
