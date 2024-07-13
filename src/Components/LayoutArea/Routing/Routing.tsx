import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductsList from "../../ProductsArea/ProductsList/ProductsList";
import SupplierList from "../../SupplierArea/SupplierList/SupplierList";
import Page404 from "../Page404/Page404";
import "./Routing.css";
import Spinner from "../../SharedArea/Spinner/Spinner";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";

function Routing(): JSX.Element {

    const LazyContactUs = lazy(() => import("../../ContactUsArea/CountactUs/CountactUs"));
    const suspenseContactUs = <Suspense fallback={<Spinner/>}> <LazyContactUs/> </Suspense>;

    return (
        <div className="Routing">
			
            <Routes>

                {/* Home: */}
                <Route path="/home" element={<Home />}/>

                {/* Products: */}
                <Route path="/products" element={<ProductsList />}/>
     
                {/* Products Details: */}
                <Route path="/products/details/:id" element={<ProductDetails />}/>

                {/* Add Products: */}
                <Route path="/products/new" element={<AddProduct />}/>

                {/* Edit Products: */}
                <Route path="/products/edit/:id" element={<EditProduct />}/>

                {/* Supplier: */}
                <Route path="/suppliers" element={<SupplierList />}/>

                {/* Register */}
                <Route path="/register" element={<Register />}/>

                {/* Login */}
                <Route path="/login" element={<Login />}/>

                {/* Contact us: */}
                <Route path="/contact-us" element={ suspenseContactUs /*<Suspense fallback={<Spinner/>}> <LazyContactUs/> </Suspense>*/}/>

                {/* Page 404: */}
                <Route path="/*" element={<Page404 />}/>

                {/*  Default: */}
                <Route path="/" element={ <Navigate to="/home" /> }/>

                 {/* Default:
                <Route path="/" element={ <Home /> }/> */}

            </Routes>

        </div>
    );
}

export default Routing;
