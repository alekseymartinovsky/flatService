import { Button, Checkbox, Form, Input, InputNumber, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useLocation, useNavigate } from "react-router";
import style from "./AdminStartPage.module.css";
import { request } from "../../service/fetchRequests";
import { ROUTE_PATH } from "../../service/router/AppRouter";
import { SaleFlat } from "../../model/SaleFlat";
import Header from "../../component/Header";

const CreateSaleFlat: React.FC = () => {
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
    ];

    const onFinish = (values: any) => {
        const saleFlat: SaleFlat = SaleFlat.fromValues(values);
        if (isEdit) {
            saleFlat.id = location.state?.id;
        }
        const path = isEdit ? "/saleFlat/edit" : "/saleFlat/add";

        request.post(path, saleFlat.toJson()).then(() => {
            navigate(ROUTE_PATH.START);
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Form errors:", errorInfo);
    };

    const initialValues = (): any => {
        if (isEdit) {
            return {
                city: location.state?.city,
                street: location.state?.street,
                house: location.state?.house,
                flat: location.state?.flat,
                price: location.state?.price,
                square: location.state?.square,
                balcony: location.state?.balcony,
                repair: location.state?.repair,
                rooms: location.state?.rooms,
                floor: location.state?.floor,
                description: location.state?.description,
            };
        }
        return null;
    };

    return (
        <div className={style.createForm}>
            <Header back={true} />
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
    );
};

export default CreateSaleFlat;
