import { useEffect, useState } from "react";
import "./SupplierList.css";
import { SupplierModel } from "../../../Models/SupplierModel";
import { suppliersService } from "../../../Services/SupplierService";
import SupplierCard from "../SupplierCard/SupplierCard";
import { useTitle } from "../../../Utils/useTitle";
import { notify } from "../../../Utils/Notify";

function SupplierList(): JSX.Element {
    useTitle("NorthWind | Supplier");

    const [suppliers, setSuppliers] = useState<SupplierModel[]>([]);

    useEffect(() => {
        suppliersService.getAllSuppliers()
            .then(dbSuppliers => setSuppliers(dbSuppliers))
            .catch(err => notify.error(err));
    }, []);


    return (
        <div className="SupplierList">
			<h2>Suppliers List:</h2>
            <table>
                <tr>
                    <th>ID</th>
                    <th>COMPANY</th>
                    <th>COUNTRY</th>
                </tr>
                {suppliers.map(s => <tr><td>{s.id}</td><td>{s.company}</td><td>{s.country}</td></tr>)}
            </table>
            {/* {suppliers.map(s => <span key={s.id}>{s.company} |</span>)} */}
        </div>
    );
}

export default SupplierList;
