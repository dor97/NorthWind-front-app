import { useTitle } from "../../../Utils/useTitle";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";
import Welcome from "../Welcome/Welcome";
import "./Home.css";

function Home(): JSX.Element {

    useTitle("NorthWind | Home");

    return (
        <div className="Home">

            <Welcome />

			Home

            <TotalProducts />
            
        </div>
    );
}

export default Home;
