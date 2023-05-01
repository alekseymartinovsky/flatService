import { useEffect, useState } from "react";
import { Flat } from "../../model/Flat";
import { flatService } from "../../service/FlatServices";
import FlatCard from "../../component/FlatCard";
import { RentFlat } from "../../model/RentFlat";
import { SaleFlat } from "../../model/SaleFlat";
import { Role } from "../../model/Role";
import { RoleService } from "../../service/roleService";
import style from "./Flats.module.css";

const SaleFlats: React.FC = () => {
    const [flats, setFlats] = useState<SaleFlat[]>([]);

    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role == Role.MANAGER) {
            flatService.getSaleFlatsByManager().then((flats) => setFlats(flats));
        } else if (role == Role.CLIENT) {
            console.log("log");
            flatService.getAllSaleFlats().then((flats) => setFlats(flats));
        }
    }, []);

    return (
        <div className={style.container}>
            {flats.map((flat: SaleFlat) => {
                return (
                    <div className={style.item}>
                        <FlatCard flat={flat} isManagerCard={RoleService.checkManager()} />
                    </div>
                );
            })}
        </div>
    );
};

export default SaleFlats;
