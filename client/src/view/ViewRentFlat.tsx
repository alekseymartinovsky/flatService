import { useLocation } from "react-router-dom";
import Header from "../component/Header";
import FlatInfoBlock from "../component/FlatInfoBlock";
import { RentFlat } from "../model/RentFlat";
import { Carousel } from "antd";
import { URL_API } from "../service/fetchRequests";
import style from "./ViewPage.module.css";
import AmenitiesBlock from "./AmenitiesBlock";

const ViewRentFlat: React.FC = () => {
    const location = useLocation();

    const rentFlats = RentFlat.fromJson(location.state);

    console.log(rentFlats);

    return (
        <>
            <Header back />
            <div className={style.viewRentFlat}>
                <Carousel className={style.carousel}>
                    {rentFlats.images.map((imagePath: string) => {
                        return (
                            <div className={style.carouselBlock}>
                                <img className={style.carouselImage} src={URL_API + "/images/" + imagePath} alt="" />;
                            </div>
                        );
                    })}
                </Carousel>
                <div className={style.info}>
                    <h3>Цена: {rentFlats.flatInfo.price} руб.</h3>
                    <FlatInfoBlock flat={rentFlats} />
                    <AmenitiesBlock amenities={rentFlats.amenities} />
                    <div>{rentFlats.flatInfo.description}</div>
                </div>
            </div>
        </>
    );
};

export default ViewRentFlat;
