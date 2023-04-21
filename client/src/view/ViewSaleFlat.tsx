import { useLocation } from "react-router-dom";
import Header from "../component/Header";
import FlatInfoBlock from "../component/FlatInfoBlock";
import { Button, Carousel } from "antd";
import { URL_API, request } from "../service/fetchRequests";
import style from "./ViewPage.module.css";
import { useEffect, useState } from "react";
import { SaleFlat } from "../model/SaleFlat";
import CreditForm from "./CreditForm";

const ViewSaleFlat: React.FC = () => {
    const location = useLocation();

    const saleFlats = SaleFlat.fromJson(location.state);
    const [showCreditForm, setShowCreditForm] = useState(false);

    const openCreditForm = () => {
        setShowCreditForm(!showCreditForm);
    };

    useEffect(() => {
        request.post("/currency/getPrice", { price: saleFlats.flatInfo.price }).then((res) => {
            console.log(res);
        });
    }, []);

    return (
        <>
            <Header back />
            <div className={style.viewRentFlat}>
                <Carousel className={style.carousel}>
                    {saleFlats.images.map((imagePath: string) => {
                        return (
                            <div className={style.carouselBlock}>
                                <img className={style.carouselImage} src={URL_API + "/images/" + imagePath} alt="" />;
                            </div>
                        );
                    })}
                </Carousel>
                <div className={style.info}>
                    <h3>Цена: {saleFlats.flatInfo.price} руб.</h3>
                    <h5>{saleFlats.flatInfo.getAddress()}</h5>
                    <Button onClick={openCreditForm}>Открыть форму расчета кредита</Button>
                    {showCreditForm ? <CreditForm /> : null}
                    <FlatInfoBlock flat={saleFlats} />
                    <div>{saleFlats.flatInfo.description}</div>
                </div>
            </div>
        </>
    );
};

export default ViewSaleFlat;
