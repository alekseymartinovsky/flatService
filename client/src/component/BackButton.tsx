import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router";
import style from "./BackButton.module.css";

const BackButton = () => {
    const navigate = useNavigate();

    const backClick = () => {
        navigate(-1);
    };

    return (
        <span onClick={backClick} className={style.back}>
            &#8592; Назад
        </span>
    );
};

export default BackButton;
