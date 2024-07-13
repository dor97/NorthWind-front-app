

class AppConfig{

    // Ends each url with ending slash (/)
    public readonly productsUrl = "http://localhost:3030/delay/api/products/";

    public readonly registerUrl = "http://localhost:3030/delay/api/register/";
    public readonly loginUrl = "http://localhost:3030/delay/api/login/";

    public readonly supplierUrl = "http://localhost:3030/api/suppliers/";

    //Axios options:
    public readonly axiosOptions = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };

}

export const appConfig = new AppConfig();