import "./about.scss";
import { Product } from "../../App";
import { useAppSelector } from "../../store/hooks";
import { hideAboutView } from "../../store/reducers/aboutView.reducer";
import { useAppDispatch } from "../../store/hooks";
export const AboutView = () => {
    const useSelector = useAppSelector;
    const dispatch = useAppDispatch();
    const product = useSelector(
        (state) => state.aboutItem.selectedProduct
    ) as Product;

    const { id, name, color, year, pantone_value } = product;

    const style = {
        color: color,
    };

    const hideAbout = (): void => {
        dispatch(hideAboutView());
    };

    return (
        <>
            <div className="about-view">
                <div className="close-btn-container">
                    <button className="close-btn" onClick={hideAbout}>
                        X
                    </button>
                </div>
                <h3>Details: </h3>
                <p>ID: {id}</p>
                <p>NAME: {name}</p>
                <p>
                    COLOR: <span style={style}>{color}</span>
                </p>
                <p>YEAR: {year}</p>
                <p>PANTONE VALUE: {pantone_value}</p>
            </div>
        </>
    );
};
