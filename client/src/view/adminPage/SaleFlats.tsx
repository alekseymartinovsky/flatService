import { useEffect, useState } from "react";
import { Flat } from "../../model/Flat";
import { flatService } from "../../service/FlatServices";
import FlatCard from "../../component/FlatCard";
import { RentFlat } from "../../model/RentFlat";
import { SaleFlat } from "../../model/SaleFlat";

const SaleFlats: React.FC = () => {
    const [flats, setFlats] = useState<SaleFlat[]>([]);

    useEffect(() => {
        flatService.getSaleFlatsByManager().then((flats) => setFlats(flats));
    }, []);

    return (
        <div>
            {flats.map((flat: SaleFlat) => {
                return <FlatCard flat={flat} />;
            })}
        </div>
    );
};

export default SaleFlats;
