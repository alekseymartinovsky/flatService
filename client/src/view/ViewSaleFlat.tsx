import { useLocation } from "react-router-dom";
import Header from "../component/Header";
import FlatInfoBlock from "../component/FlatInfoBlock";
import { Button, Carousel } from "antd";
import { URL_API, request } from "../service/fetchRequests";
import style from "./ViewPage.module.css";
import { useEffect, useState } from "react";
import { SaleFlat } from "../model/SaleFlat";
import CreditForm from "./CreditForm";
import { ConvertingPrice } from "../model/ConvertingPrice";

const ViewSaleFlat: React.FC = () => {
    const location = useLocation();
    const [pdfUrl, setPdfUrl] = useState<string>();

    const saleFlats = SaleFlat.fromJson(location.state);
    const [showCreditForm, setShowCreditForm] = useState(false);
    const [prices, setPrices] = useState<ConvertingPrice>();

    const openCreditForm = () => {
        setShowCreditForm(!showCreditForm);
    };

    useEffect(() => {
        request.post("/currency/getPrice", { price: saleFlats.flatInfo.price }).then((res) => {
            setPrices(ConvertingPrice.fromJson(res));
        });
    }, []);

    useEffect(() => {
        const getPdf = async () => {
            const blob = new Blob([await request.getPdf("/saleFlat/document", { saleId: saleFlats.id })], {
                type: "application/pdf",
            });
            const urlObject = window.URL.createObjectURL(blob);
            setPdfUrl(urlObject);
        };

        getPdf();
    }, []);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = pdfUrl!;
        link.download = "document.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlePrint = () => {
        const newWindow = window.open(
            pdfUrl,
            "_blank",
            "location=yes,height=1920,width=1080,scrollbars=yes,status=yes"
        );
        if (newWindow) {
            newWindow.onload = () => {
                newWindow.print();
            };
        } else {
            throw new Error("Не удалось открыть новое окно для печати");
        }
    };

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
                    <div className={style.contants}>
                        <div>
                            <h4>Контакты</h4>
                            <div className={style.contacts}>
                                <div>
                                    Телефон: <a href={`tel: ${saleFlats.manager.phone}`}>{saleFlats.manager.phone}</a>{" "}
                                </div>
                                <div>
                                    Почта:{" "}
                                    <a href={`mailto:${saleFlats.manager.email}?subject=Аренда квартиры`}>
                                        {saleFlats.manager.email}
                                    </a>
                                </div>
                                <div className={style.documentButton}>
                                    <Button onClick={handleDownload}>Скачать документ</Button>
                                    <Button onClick={handlePrint}>Распечатать документ</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3>Цена: {prices?.byn} BYN</h3>
                    <div>
                        <div>{prices?.usd} USD</div>
                        <div>{prices?.eur} EUR</div>
                    </div>
                    <Button onClick={openCreditForm}>
                        {!showCreditForm ? "Открыть форму расчета кредита" : "Закрыть форму расчета кредита"}{" "}
                    </Button>
                    {showCreditForm ? <CreditForm /> : null}
                    <FlatInfoBlock flat={saleFlats} />
                    <div className={style.description}>{saleFlats.flatInfo.description}</div>
                </div>
            </div>
        </>
    );
};

export default ViewSaleFlat;
