import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductsModel } from "../Models/ProductModel";

//Reducers:

//Init all products for the first time:
function initAll(currentState: ProductsModel[],
     action: PayloadAction<ProductsModel[]>): ProductsModel[]{

    const allProduct = action.payload;
    const newState = allProduct;
    return newState;
}

//Add a new product:
function addOne(currentState: ProductsModel[],
    action: PayloadAction<ProductsModel>): ProductsModel[]{

    const productToAdd = action.payload;
    const newState = [...currentState, productToAdd];
    // newState.push(productToAdd); 
    return newState;
}

//Update a given product
function updatedOne(currentState: ProductsModel[],
    action: PayloadAction<ProductsModel>): ProductsModel[]{

    const productToUpdate = action.payload;
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id === productToUpdate.id);
    if(index >= 0) newState[index] = productToUpdate;
    return newState;
}

//Delete a product
function deleteOne(currentState: ProductsModel[],
    action: PayloadAction<number>): ProductsModel[]{

    const idToDelete = action.payload;
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id === idToDelete);
    if(index >= 0) newState.splice(index, 1); // 1 = how many to delete
    return newState;
}

//Creating the slice:
const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {initAll, addOne, updatedOne, deleteOne}
});

//Create actions:
export const productActions = productsSlice.actions;

//Create reducers:
export const productReducers = productsSlice.reducer;