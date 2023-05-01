import { useEffect, useState } from "react";
import { flatService } from "../../service/FlatServices";
import FlatCard from "../../component/FlatCard";
import { RentFlat } from "../../model/RentFlat";
import { Role } from "../../model/Role";
import { RoleService } from "../../service/roleService";
import style from "./Flats.module.css";

const RentFlats: React.FC = () => {
    const [flats, setFlats] = useState<RentFlat[]>([]);

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role == Role.MANAGER) {
            flatService.getRentFlatsByManager().then((flats) => setFlats(flats));
        } else if (role == Role.CLIENT) {
            flatService.getAllRentFlats().then((flats) => setFlats(flats));
        }
    }, []);

    return (
        <div className={style.container}>
            {flats.map((flat: RentFlat) => {
                return (
                    <div className={style.item}>
                        <FlatCard flat={flat} isManagerCard={RoleService.checkManager()} />
                    </div>
                );
            })}
        </div>
    );
};

export default RentFlats;
