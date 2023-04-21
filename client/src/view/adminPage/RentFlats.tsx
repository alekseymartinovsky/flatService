import { useEffect, useState } from "react";
import { flatService } from "../../service/FlatServices";
import FlatCard from "../../component/FlatCard";
import { RentFlat } from "../../model/RentFlat";

const RentFlats: React.FC = () => {
    const [flats, setFlats] = useState<RentFlat[]>([]);

    useEffect(() => {
        flatService.getRentFlatsByManager().then((flats) => setFlats(flats));
    }, []);

    return (
        <div>
            {flats.map((flat: RentFlat) => {
                return <FlatCard flat={flat} />;
            })}
        </div>
    );
};

export default RentFlats;
