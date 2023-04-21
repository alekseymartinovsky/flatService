import { Form, Input } from "antd";
import Button from "antd/es/button";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import FormList, { formItem } from "../../component/FormList";
import { request } from "../../service/fetchRequests";
import { ROUTE_PATH } from "../../service/router/AppRouter";
import { tokenService } from "../../service/TokenService";

const Sign: React.FC = () => {
    const [showError, setShowError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const navigate = useNavigate();

    const field: formItem[] = [
        {
            name: "login",
            label: "Введите логин",
            element: <Input />,
            value: "",
            rules: [{ required: true, message: "Введите логин" }],
        },
        {
            name: "password",
            label: "Введите пароль",
            element: <Input type="password" />,
            value: "",
            rules: [{ required: true, message: "Введите пароль" }],
        },
        {
            name: "confirmPassword",
            label: "Подтвердить пароль",
            element: <Input type="password" />,
            value: "",
            rules: [{ required: true, message: "Подтвердите введенный пароль" }],
        },
        {
            name: "name",
            label: "Введите имя",
            element: <Input />,
            value: "",
            rules: [{ required: true, message: "Введите имя" }],
        },
        {
            name: "surname",
            label: "Введите фамилию",
            element: <Input />,
            value: "",
            rules: [{ required: true, message: "Введите фамилию" }],
        },
        {
            name: "email",
            label: "Введите email",
            element: <Input type="email" />,
            value: "",
            rules: [{ required: true, message: "Введите email" }],
        },
        {
            name: "phone",
            label: "Введите телефон",
            element: <Input type="phone" />,
            value: "",
            rules: [{ required: true, message: "Введите телефон" }],
        },
    ];

    const onFinish = (values: any) => {
        if (values?.password === values?.confirmPassword) {
            request.post("/client/registration", values).then((res) => {
                if (res.status) {
                    tokenService.saveToken(res.body);
                    localStorage.setItem("role", "CLIENT");
                    navigate(ROUTE_PATH.START);
                } else {
                    setShowError(true);
                }
            });
        } else {
            setPasswordError(true);
        }
    };

    return (
        <div>
            <Form onFinish={onFinish}>
                <FormList data={field} />
                <Button type="primary" htmlType="submit">
                    Зарегистрироваться
                </Button>
                {passwordError ? <div>Пароли не совпадают</div> : null}
                {showError ? <div>Пользователь с таким именем уже существует</div> : null}
            </Form>
        </div>
    );
};

export default Sign;
