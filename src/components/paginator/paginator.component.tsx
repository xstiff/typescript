import "./paginator.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { nextPage, prevPage } from "../../store/reducers/tablePages.reducer";
import { ReturnBtn } from "../return/return.component";

export const Paginator = () => {
    const dispatch = useAppDispatch();
    const useSelector = useAppSelector;
    const { current_page } = useSelector((state) => state.tableInfo);
    const { products } = useSelector((state) => state.products);

    const incrementPage = () => {
        dispatch(nextPage());
    };
    const decrementPage = () => {
        dispatch(prevPage());
    };

    return (
        <div className="paginator-container">
            {products.length > 1 ? (
                <>
                    <div className="pages-arrow">
                        <p onClick={() => decrementPage()}>
                            {" "}
                            {"< < previous"}{" "}
                        </p>
                        <p onClick={() => incrementPage()}> {"next > >"} </p>
                    </div>
                    <div className="page-info">
                        <p>Page {current_page}</p>
                    </div>
                </>
            ) : (
                <ReturnBtn />
            )}
        </div>
    );
};
