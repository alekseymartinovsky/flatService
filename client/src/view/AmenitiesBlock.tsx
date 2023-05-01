import { AmenitiesFlat } from "../model/Amentities";
import style from "./Amenities.module.css";

const AmenitiesBlock: React.FC<{ amenities: AmenitiesFlat }> = ({ amenities }) => {
    const data = [
        { value: amenities.hotWater, label: "Горячая вода", icon: "faucet" },
        { value: amenities.essentials, label: "Основное", icon: "all" },
        { value: amenities.bedLinen, label: "Постельное белье", icon: "blanket" },
        { value: amenities.mosquitoNet, label: "Москитная сетка", icon: "mosquito" },
        { value: amenities.crib, label: "Кроватка", icon: "baby-bed" },
        { value: amenities.heating, label: "Отопление", icon: "heat" },
        { value: amenities.wifi, label: "Wi-Fi", icon: "wifi" },
        { value: amenities.refrigerator, label: "Холодильник", icon: "refrigerator" },
        { value: amenities.electricKettle, label: "Электрочайник", icon: "electric-kettle" },
        { value: amenities.tv, label: "Телевизор", icon: "tv" },
        { value: amenities.cooking, label: "Плита", icon: "electric-stove" },
        { value: amenities.coffeeMaker, label: "Кофеварка", icon: "coffee-machine" },
        { value: amenities.parking, label: "Парковка", icon: "parking-area" },
        { value: amenities.washingMachine, label: "Стиральная машина", icon: "washing-machine" },
        { value: amenities.airConditioning, label: "Кондиционер", icon: "air-conditioner" },
        { value: amenities.fireSafety, label: "Пожарная безопасность", icon: "fire-extinguisher" },
    ];

    return (
        <div className={style.amenities}>
            {data.map(({ value, label, icon }) => {
                if (value) {
                    return (
                        <div className={style.item}>
                            <img width="30px" height="30px" src={"/img/" + icon + ".png"} alt="" />
                            <div>{label}</div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default AmenitiesBlock;
