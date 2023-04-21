import { useLocation } from "react-router";
import Header from "../../component/Header";
import CreateFlat from "./CreateRentFlat";
import CreateFlatRentFlat from "./CreateRentFlat";
import CreateSaleFlat from "./CreateSaleFlat";

const AddFlatPage: React.FC = () => {
    const location = useLocation();

    return (
        <div>
            <Header back />
            {location.state?.typeFlat === "Rent" ? <CreateFlatRentFlat /> : <CreateSaleFlat />}
        </div>
    );
};

export default AddFlatPage;
