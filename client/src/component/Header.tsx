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
                    <div onClick={out} className={style.outButton}>
                        Выйти
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
