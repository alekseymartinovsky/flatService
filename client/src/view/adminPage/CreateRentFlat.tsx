import { Button, Checkbox, Form, Input, InputNumber, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { FlatInfo } from "../../model/FlatInfo";
import { request } from "../../service/fetchRequests";
import { useNavigate } from "react-router";
import { ROUTE_PATH } from "../../service/router/AppRouter";
import style from "./AdminStartPage.module.css";

const CreateFlatRentFlat: React.FC = () => {
    const navigate = useNavigate();

    const fieldData = [
        { name: "city", label: "Город", required: true, component: <Input /> },
        { name: "street", label: "Улица", required: true, component: <Input /> },
        { name: "house", label: "Дом", required: true, component: <Input /> },
        { name: "flat", label: "Квартира", component: <Input /> },
        { name: "price", label: "Цена", required: true, component: <InputNumber /> },
        { name: "square", label: "Площадь", required: true, component: <InputNumber /> },
        { name: "balcony", label: "Балкон", component: <Checkbox /> },
        { name: "repair", label: "Ремонт", required: true, component: <Input /> },
        { name: "rooms", label: "Количество комнат", required: true, component: <InputNumber /> },
        { name: "floor", label: "Этаж", required: true, component: <InputNumber /> },
        { name: "description", label: "Описание", component: <TextArea rows={4} /> },
    ];

    const onFinish = (values: any) => {
        const flatInfo: FlatInfo = FlatInfo.fromFormValues(values);
        request.post("/rentFlat/add", flatInfo.toJson()).then(() => {
            navigate(ROUTE_PATH.START);
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Form errors:", errorInfo);
    };

    return (
        <div className={style.createForm}>
            <Form
                name="createFlat"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                className={style.createFlat}
            >
                {fieldData.map(({ name, label, required, component }) => (
                    <Form.Item key={name} label={label} name={name} rules={[{ required }]}>
                        {component}
                    </Form.Item>
                ))}
                <Form.Item label="Image">
                    <Upload
                        onChange={(info) => {
                            console.log(info.fileList);
                        }}
                        accept="image/jpeg"
                        customRequest={request.uploadImage}
                    >
                        <Button>Upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Создать объявление
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateFlatRentFlat;
