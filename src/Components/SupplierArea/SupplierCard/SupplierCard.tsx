import { SupplierModel } from "../../../Models/SupplierModel";
import "./SupplierCard.css";

type supplierCardProp = {
    supplier: SupplierModel;
};


function SupplierCard(props: supplierCardProp): JSX.Element {
    return (
        <div className="SupplierCard">
			<tr>
                <td>{props.supplier.id}</td>
                <td>{props.supplier.company}</td>
            </tr>
        </div>
    );
}

export default SupplierCard;
