export const ApiUrl: string = "https://reqres.in/api/products";

export const FetchApi = async (params: string = "") => {
    return fetch(`${ApiUrl}${params}`)
        .then(async (response): Promise<any> => {
            if (!response.ok) {
                if (response.status === 404) {
                    return { errorMessage: "404: Resource not found" };
                } else {
                    return {
                        errorMessage: response.status + ": Request failed",
                    };
                }
            }
            return await response.json();
        })
        .catch((err) => {
            console.error(err);
            return { errorMessage: err.message };
        });
};
