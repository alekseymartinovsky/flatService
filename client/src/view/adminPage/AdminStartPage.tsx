import React, { useState } from "react";
import style from "./AdminStartPage.module.css";
import { Button, Menu, MenuProps } from "antd";
import { useNavigate } from "react-router";
import { ROUTE_PATH } from "../../service/router/AppRouter";
import RentFlats from "./RentFlats";
import SaleFlats from "./SaleFlats";

enum ADMIN_MENU {
    RENT = "rent",
    SALE = "sale",
    MESSAGES = "messages",
}

const items: MenuProps["items"] = [
    {
        label: "Аренда квартир",
        key: ADMIN_MENU.RENT,
    },
    {
        label: "Продажа квартир",
        key: ADMIN_MENU.SALE,
    },
];

const AdminStartPage: React.FC = () => {
    const navigate = useNavigate();

    const [current, setCurrent] = useState<string>(ADMIN_MENU.RENT);

    const onClick: MenuProps["onClick"] = (e) => {
        setCurrent(e.key);
    };

    const getLinkToAddFlat = () => {
        if (current === ADMIN_MENU.RENT) {
            return { typeFlat: "Rent" };
        } else {
            return { typeFlat: "Sale" };
        }
    };

    return (
        <div className={style.adminStartPage}>
            <Menu className={style.menu} mode="horizontal" items={items} selectedKeys={[current]} onClick={onClick} />
            {current === ADMIN_MENU.RENT || current === ADMIN_MENU.SALE ? (
                <Button type="primary" onClick={() => navigate(ROUTE_PATH.ADD_FLAT, { state: getLinkToAddFlat() })}>
                    Добавить объявление
                </Button>
            ) : null}
            {current === ADMIN_MENU.RENT ? <RentFlats /> : null}
            {current === ADMIN_MENU.SALE ? <SaleFlats /> : null}
        </div>
    );
};

export default AdminStartPage;
