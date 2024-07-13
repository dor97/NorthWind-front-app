import { NavLink } from "react-router-dom";
import "./Menu.css";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products" end>Products</NavLink>
            <NavLink to="/products/new">Add Products</NavLink>
            <NavLink to="/suppliers">Suppliers</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>

            <TotalProducts />

            {/*<a href="/home">Home</a>
            <a href="/products">Products</a>
            a href="/contact-us">Contact Us</a>*/}

        </div>
    );
}

export default Menu;
