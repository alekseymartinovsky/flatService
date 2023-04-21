import { Button, Menu, MenuProps } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../service/router/AppRouter";
import { tokenService } from "../service/TokenService";
import style from "./Header.module.css";

const Header: React.FC<{ back?: boolean }> = ({ back = false }) => {
    const navigate = useNavigate();

    const backClick = () => {
        navigate(-1);
    };

    const checkLogin = (): boolean => {
        return tokenService.getToken() ? true : false;
    };

    const roleIsAdmin = () => {
        return localStorage.getItem("role") === "ADMIN";
    };

    type MenuItem = Required<MenuProps>["items"][number];

    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: "group"
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const items: MenuProps["items"] = [
        getItem("Меню", "sub2", null, [
            getItem("Получить оценку", ROUTE_PATH.CALCULATE_FLAT_GRADE),
            getItem("Посмотреть очтеты", ROUTE_PATH.REPORT),
            getItem("Добавить информацию о квартире", ROUTE_PATH.ADD_FLAT),
            getItem("Посмотреть мои объявления", ROUTE_PATH.USER_FLATS),
        ]),
    ];

    const onClick: MenuProps["onClick"] = (e) => {
        navigate(e.key);
    };

    const out = () => {
        localStorage.removeItem("token");
        navigate(ROUTE_PATH.START);
    };

    return (
        <div className={style.header}>
            {back ? (
                <span onClick={backClick} className={style.back}>
                    &#8592; Назад
                </span>
            ) : null}

            <div className={style.startPageLinkBlock}>
                <Link className={style.startPageLink} to={ROUTE_PATH.START}>
                    Главная
                </Link>
            </div>
            {checkLogin() ? (
                <>
                    {roleIsAdmin() ? (
                        <div>
                            <Link className={style.adminLink} to={ROUTE_PATH.ADMIN_PAGE}>
                                Настройки администратора
                            </Link>
                        </div>
                    ) : (
                        <div className={style.menu}>
                            <Menu style={{ width: 350 }} mode="inline" items={items} onClick={onClick} />
                        </div>
                    )}
                    <div>
                        <Button onClick={out} className={style.outButton}>
                            Выйти
                        </Button>
                    </div>
                </>
            ) : (
                <Link to={ROUTE_PATH.LOGIN}>
                    <Button className={style.button}>Войти</Button>
                </Link>
            )}
        </div>
    );
};

export default Header;
