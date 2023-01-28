import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./return.scss";
import { FetchApi } from "../../utility/api.utility";
import { setProducts } from "../../store/reducers/products.reducer";
import { goToFirst } from "../../store/reducers/tablePages.reducer";
export const ReturnBtn = () => {
    const dispatch = useAppDispatch();
    const { current_page } = useAppSelector((state) => state.tableInfo);
    const goToHome = () => {
        FetchApi("?page=" + current_page + "&per_page=5").then((data) => {
            dispatch(setProducts(data.data));
        });
        dispatch(goToFirst());
    };
    return (
        <div className="return-btn">
            <button onClick={goToHome}>Return</button>
        </div>
    );
};
