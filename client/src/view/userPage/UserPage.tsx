import { useState } from "react";
import { Menu, MenuProps } from "antd";
import RentFlats from "../adminPage/RentFlats";
import SaleFlats from "../adminPage/SaleFlats";
import FavoriteFlats from "./FavoriteFlats";
import style from "../adminPage/AdminStartPage.module.css";

enum USER_MENU {
    RENT = "rent",
    SALE = "sale",
    FAVORITE = "favorite",
}

const items: MenuProps["items"] = [
    {
        label: "Аренда",
        key: USER_MENU.RENT,
    },
    {
        label: "Покупка",
        key: USER_MENU.SALE,
    },
    {
        label: "Избранное",
        key: USER_MENU.FAVORITE,
    },
];

const UserPage: React.FC = () => {
    const [current, setCurrent] = useState("rent");

    const onClick: MenuProps["onClick"] = (e) => {
        setCurrent(e.key);
    };

    return (
        <div>
            <Menu className={style.menu} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            {current === USER_MENU.RENT ? <RentFlats /> : null}
            {current === USER_MENU.SALE ? <SaleFlats /> : null}
            {current === USER_MENU.FAVORITE ? <FavoriteFlats /> : null}
        </div>
    );
};

export default UserPage;
