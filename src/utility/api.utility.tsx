export const ApiUrl: string = "https://reqres.in/api/products";

export const FetchApi = async (params: string = "") => {
    const response = await fetch(`${ApiUrl}${params}`);
    const data = await response.json();
    return data;
};
