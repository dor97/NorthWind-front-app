import { useEffect, useState } from "react";
import "./TotalProducts.css";
import { appStore } from "../../../Redux/Store";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";

function TotalProducts(): JSX.Element {
    
    //const [count, setCount] = useState<number>();

    // useEffect(() => {
    //     //set count first time:
    //     setCount(appStore.getState().products.length);

    //     //Listen to global store changes, and set count on each change:
    //     const unsubscribe = appStore.subscribe(() => {
    //         setCount(appStore.getState().products.length)
    //     });
        
    //     //The following function invokes when the component destroyed:
    //     return () => {unsubscribe()};

    // },[]);

    //same as the above code:
    const count = useSelector((appState: AppState) => appState.products.length);
    
    //if there are no products not sowing this component
    if(!count) return null;

    return (
        <div className="TotalProducts">
            <span>Total products: {count}</span>
        </div>
    );
}

export default TotalProducts;
