import { Button, Checkbox, Form, Input, InputNumber, Switch, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { request } from "../../service/fetchRequests";
import { useLocation, useNavigate } from "react-router";
import { ROUTE_PATH } from "../../service/router/AppRouter";
import style from "./AdminStartPage.module.css";
import { RentFlat } from "../../model/RentFlat";
import { Header } from "antd/es/layout/layout";

const CreateRentFlat: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isEdit = location.state?.isEdit ? true : false;

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

        { name: "hotWater", label: "Горячая вода", required: false, component: <Switch /> },
        { name: "essentials", label: "Основное", required: false, component: <Switch /> },
        { name: "bedLinen", label: "Постельное белье", required: false, component: <Switch /> },
        { name: "mosquitoNet", label: "Москитная сетка", required: false, component: <Switch /> },
        { name: "crib", label: "Кроватка", required: false, component: <Switch /> },
        { name: "heating", label: "Отопление", required: false, component: <Switch /> },
        { name: "wifi", label: "Wi-Fi", required: false, component: <Switch /> },
        { name: "refrigerator", label: "Холодильник", required: false, component: <Switch /> },
        { name: "electricKettle", label: "Электрочайник", required: false, component: <Switch /> },
        { name: "tv", label: "Телевизор", required: false, component: <Switch /> },
        { name: "cooking", label: "Плита", required: false, component: <Switch /> },
        { name: "coffeeMaker", label: "Кофеварка", required: false, component: <Switch /> },
        { name: "parking", label: "Парковка", required: false, component: <Switch /> },
        { name: "washingMachine", label: "Стиральная машина", required: false, component: <Switch /> },
        { name: "airConditioning", label: "Кондиционер", required: false, component: <Switch /> },
        { name: "fireSafety", label: "Пожарная безопасность", required: false, component: <Switch /> },
    ];

    const onFinish = (values: any) => {
        const rentFlat: RentFlat = RentFlat.fromValues(values);
        console.log(location.state);
        if (isEdit) {
            rentFlat.id = location.state.id;
            request.put("/rentFlat/update", rentFlat.toJson()).then(() => {
                navigate(ROUTE_PATH.START);
            });
        } else {
            request.post("/rentFlat/add", rentFlat.toJson()).then(() => {
                navigate(ROUTE_PATH.START);
            });
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Form errors:", errorInfo);
    };

    const initialValues = (): any => {
        if (isEdit) {
            return {
                city: location.state?.flatInfo.city,
                street: location.state?.flatInfo.street,
                house: location.state?.flatInfo.house,
                flat: location.state?.flatInfo.flat,
                price: location.state?.flatInfo.price,
                square: location.state?.flatInfo.square,
                balcony: location.state?.flatInfo.balcony,
                repair: location.state?.flatInfo.repair,
                rooms: location.state?.flatInfo.rooms,
                floor: location.state?.flatInfo.floor,
                description: location.state?.flatInfo.description,
                hotWater: location.state?.amenities.hotWater,
                essentials: location.state?.amenities.essentials,
                bedLinen: location.state?.amenities.bedLinen,
                mosquitoNet: location.state?.amenities.mosquitoNet,
                crib: location.state?.amenities.crib,
                heating: location.state?.amenities.heating,
                wifi: location.state?.amenities.wifi,
                refrigerator: location.state?.amenities.refrigerator,
                electricKettle: location.state?.amenities.electricKettle,
                tv: location.state?.amenities.tv,
                cooking: location.state?.amenities.cooking,
                coffeeMaker: location.state?.amenities.coffeeMaker,
                parking: location.state?.amenities.parking,
                washingMachine: location.state?.amenities.washingMachine,
                airConditioning: location.state?.amenities.airConditioning,
                fireSafety: location.state?.amenities.fireSafety,
            };
        }
    };

    return (
        <>
            <Header />
            <div className={style.createForm}>
                <Form
                    name="createFlat"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    className={style.createFlat}
                    initialValues={initialValues()}
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
        </>
    );
};

export default CreateRentFlat;
