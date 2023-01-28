import React, { useEffect, useState } from "react";
import "./App.scss";
import { FetchApi } from "./utility/api.utility";
import { AboutView } from "./components/about/about.component";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { PagedTable } from "./components/pagedtable/pagedtable.component";
import { setProducts } from "./store/reducers/products.reducer";
import { Paginator } from "./components/paginator/paginator.component";

import { goToFirst } from "./store/reducers/tablePages.reducer";
export type Product = {
    id: number;
    name: string;
    color: string;
    year: number;
    pantone_value: string;
};

const App = () => {
    const [error, setError] = useState<string>("");
    const [responseStatus, setResponseStatus] = useState<string>("");
    const dispatch = useAppDispatch();
    const useSelector = useAppSelector;
    const { current_page } = useSelector((state) => state.tableInfo);

    const aboutView = useSelector((state) => state.aboutView.isVisible);

    const fetchData = async (params?: string) => {
        const data = await FetchApi(params ? params : "");
        // dispatch(setPageAmout(data.total_pages));
        if (data.errorMessage) {
            setResponseStatus("" + data.errorMessage);
            return dispatch(setProducts([]));
        }
        setResponseStatus("");
        dispatch(goToFirst());
        if (data.data.length === undefined) {
            dispatch(setProducts([data.data]));
            return;
        }

        return dispatch(setProducts(data.data));
    };

    useEffect(() => {
        FetchApi("?page=" + current_page + "&per_page=5").then((data) => {
            dispatch(setProducts(data.data));
            console.log("Dispatched Paged Table");
        }); //eslint-disable-next-line
    }, [current_page]);

    return (
        <div className="App">
            {aboutView && <AboutView />}

            <div className="header-container">
                <h1>Api search</h1>
            </div>

            <form
                action=""
                onSubmit={async (e: any) => {
                    e.preventDefault();
                    const numField: HTMLInputElement = e.target.number;

                    if (isNaN(+numField.value)) {
                        setError("Enter a valid number");
                    } else if (+numField.value < 0) {
                        setError("Only positive numbers are allowed");
                    } else if (
                        +numField.value.length > 2 ||
                        +numField.value.length < 0
                    ) {
                        setError("Only 1 and 2 digit long numbers are allowed");
                    } else if (+numField.value.length < 0) {
                        setError("Only 1 and 2 digit long numbers are allowed");
                    } else {
                        await fetchData(`?id=${numField.value}&per_page=5`);
                        setError("");

                        numField.value = "";
                        return;
                    }
                }}
            >
                <input type="number" name="number" placeholder="Search by Id" />
                <button className="search-btn" type="submit">
                    ➔
                </button>
                {error && <h3 className="error-message">{error}</h3>}
            </form>

            {responseStatus ? (
                <>
                    <h3 className="response-error">{responseStatus}</h3>
                    <p>Please search again or leave it empty to show all </p>
                </>
            ) : (
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Year</th>
                            </tr>
                        </thead>

                        <PagedTable />
                    </table>
                    <Paginator />
                </div>
            )}
        </div>
    );
};

export default App;
