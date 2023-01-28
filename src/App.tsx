import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.scss";
import { Table } from "./components/table/table.component";
import { FetchApi } from "./utility/api.utility";
import { AboutView } from "./components/table/about/about.component";
import { useAppSelector } from "./store/hooks";

export type Product = {
    id: number;
    name: string;
    color: string;
    year: number;
    pantone_value: string;
};

const App = () => {
    const [product, setProduct] = useState<Product[]>([]);
    const useSelector = useAppSelector;
    const aboutView = useSelector((state) => state.aboutView.isVisible);

    const fetchData = async (params?: string) => {
        const data = await FetchApi(params ? params : "");
        setProduct(data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (object: ChangeEvent<HTMLInputElement>) => {
        const target: HTMLInputElement = object.target;

        console.log(target.value);
    };

    const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target;
        console.log(target);
    };

    return (
        <div className="App">
            {aboutView && <AboutView />}
            {/* <AboutView /> */}

            <div className="header-container">
                <h1>Api search</h1>
            </div>

            <form>
                <input
                    type="number"
                    name="number"
                    placeholder="Search by Id"
                    onChange={(x) => handleChange(x)}
                />
                <button
                    className="search-btn"
                    onClick={(e) => submitHandler(e)}
                    type="submit"
                >
                    ➔
                </button>
            </form>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Color</th>
                            <th>Year</th>
                            <th>Pantone value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((x) => (
                            <Table key={x.id} product={x} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;
