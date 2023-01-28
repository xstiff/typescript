import { Product } from "../../App";
import "./table.scss";
import { showAboutView } from "../../store/reducers/aboutView.reducer";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { changeAboutItem } from "../../store/reducers/aboutItem.reducer";
import { AboutView } from "./about/about.component";

export const Table = (product: any) => {
    const dispatch = useAppDispatch();
    const useSelector = useAppSelector;
    const aboutView = useSelector((state) => state.aboutView.isVisible);
    const aboutItem = useSelector((state) => state.aboutItem.selectedProduct);

    const { id, name, color, year, pantone_value } = product.product as Product;

    const toggleView = (): void => {
        dispatch(showAboutView());
        dispatch(changeAboutItem(product.product));
    };

    const style = {
        backgroundColor: color,
    };
    return (
        <>
            <tr style={style} onClick={() => toggleView()}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{color}</td>
                <td>{year}</td>
                <td>{pantone_value}</td>
            </tr>
        </>
    );
};

// id: number;
// name: string;
// color: string;
// year: number;
// pantone_value: string;
