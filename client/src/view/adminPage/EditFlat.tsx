import { Button, Checkbox, Form, Input, InputNumber, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useLocation, useNavigate } from "react-router";
import { request } from "../../service/fetchRequests";
import { FlatInfo } from "../../model/FlatInfo";
import { ROUTE_PATH } from "../../service/router/AppRouter";
import style from "./AdminStartPage.module.css";
import Header from "../../component/Header";

const EditFlat: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

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
        const flatInfo: FlatInfo = FlatInfo.fromJson(values);
        flatInfo.id = location.state.flatInfo.id;
        request.post(`/rentFlat/update`, flatInfo.toJson()).then(() => {
            navigate(ROUTE_PATH.START);
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Form errors:", errorInfo);
    };

    const initialValues = location.state;

    return (
        <div className={style.createForm}>
            <Header back />
            <Form
                name="editFlat"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
                className={style.editFlat}
                initialValues={initialValues.flatInfo}
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
                        Обновить объявление
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditFlat;
