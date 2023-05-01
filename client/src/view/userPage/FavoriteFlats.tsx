import { useEffect, useState } from "react";
import { RentFlat } from "../../model/RentFlat";
import { SaleFlat } from "../../model/SaleFlat";
import { request } from "../../service/fetchRequests";
import FlatCard from "../../component/FlatCard";
import style from "../adminPage/Flats.module.css";

const FavoriteFlats: React.FC = () => {
    const [rentFlats, setRentFlats] = useState<RentFlat[]>([]);
    const [saleFlats, setSaleFlats] = useState<SaleFlat[]>([]);

    useEffect(() => {
        request.get("/client/favorite").then((res: any) => {
            const rentFlatsModel: RentFlat[] = [];
            res?.favoriteRentFlat.map((flat: any) => {
                console.log(flat);
                rentFlatsModel.push(RentFlat.fromJson(flat));
            });
            console.log(rentFlatsModel);
            setRentFlats(rentFlatsModel);

            const saleFlatsModel: SaleFlat[] = [];
            res?.favoriteSaleFlat.map((flat: any) => {
                saleFlatsModel.push(SaleFlat.fromJson(flat));
            });
            setSaleFlats(saleFlatsModel);
        });
    }, []);

    return (
        <div className={style.container}>
            {rentFlats.map((flat: RentFlat) => {
                return (
                    <div className={style.item}>
                        <FlatCard flat={flat} isManagerCard={false} />
                    </div>
                );
            })}
            {saleFlats.map((flat: SaleFlat) => {
                return (
                    <div className={style.item}>
                        <FlatCard flat={flat} isManagerCard={false} />
                    </div>
                );
            })}
        </div>
    );
};

export default FavoriteFlats;
