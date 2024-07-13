
//only implements static function if any
export class ProductsModel {

    public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string;
    public image: File;

    public static nameValidation = {
        required: {value: true, message: "Missing name."},
        minLength: {value: 2, message: "Name to short."},
        maxLength: {value: 100, message: "Name to long."}
    };

    public static priceValidation = {
        require: {value: true, message: "Missing price."},
        min: {value: 0, message: "Number mast be greater or equal to 0."},
        max: {value: 1000, message: "Number mast be smaller or equal to 1000."}
    };

    public static stockValidation = {
        require: {value: true, message: "Missing stock."},
        min: {value: 0, message: "Number mast be greater or equal to 0."},
        max: {value: 1000, message: "Number mast be smaller or equal to 1000."}
    };

    public static imageValidation = {
        required: {value: true, message: "Missing image."}
    };

}
