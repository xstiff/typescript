import { Table } from "../table/table.component";
import { useAppSelector } from "../../store/hooks";
import "./pagedtable.scss";
export const PagedTable = () => {
    const useSelector = useAppSelector;

    const products = useSelector((state) => state.products).products;

    const TablePage = () => {
        return (
            <>
                {products.map((x) => (
                    <Table key={x.id} product={x} />
                ))}
            </>
        );
    };

    return (
        <>
            <tbody>
                <TablePage />
            </tbody>
        </>
    );
};
