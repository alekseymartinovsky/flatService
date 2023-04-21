import Link from "antd/es/typography/Link";
import React, { useState } from "react";
import BackButton from "../../component/BackButton";
import Login from "./Login";
import Sign from "./Sign";
import style from "./LoginPage.module.css";

const LoginPage: React.FC = () => {
    const [loginSwitch, setLoginSwitch] = useState(true);

    return (
        <div className={style.loginPage}>
            <BackButton />
            <div className={style.content}>
                <div className={style.title}>{loginSwitch ? "Вход" : "Регистрация"}</div>
                <div className={style.form}>{loginSwitch ? <Login /> : <Sign />}</div>
                <div className={style.navButtonBlock}>
                    <Link onClick={() => setLoginSwitch(true)}>Войти</Link>
                    <Link onClick={() => setLoginSwitch(false)}>Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
