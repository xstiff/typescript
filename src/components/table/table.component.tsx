import { Product } from "../../App";
import "./table.scss";
import { showAboutView } from "../../store/reducers/aboutView.reducer";
import { useAppDispatch } from "../../store/hooks";
import { changeAboutItem } from "../../store/reducers/aboutItem.reducer";

export const Table = (product: any) => {
    const dispatch = useAppDispatch();

    const { id, name, color, year } = product.product as Product;

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
                <td>{year}</td>
            </tr>
        </>
    );
};

// id: number;
// name: string;
// color: string;
// year: number;
// pantone_value: string;
