import { useLocation } from "react-router";
import Header from "../../component/Header";
import CreateFlat from "./CreateRentFlat";
import CreateRentFlat from "./CreateRentFlat";
import CreateSaleFlat from "./CreateSaleFlat";

const AddFlatPage: React.FC = () => {
    const location = useLocation();

    return (
        <div>
            <Header back />
            {location.state?.typeFlat === "Rent" ? <CreateRentFlat /> : <CreateSaleFlat />}
        </div>
    );
};

export default AddFlatPage;
