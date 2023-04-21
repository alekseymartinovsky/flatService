import { useEffect, useState } from "react";
import { request } from "../service/fetchRequests";
import { Button, Form, InputNumber } from "antd";
import { Credit } from "../model/Credit";

const CreditForm: React.FC = () => {
    const [rate, setRate] = useState();
    const [creditInfo, setCreditInfo] = useState<Credit>();

    useEffect(() => {
        request.get("/creditInfo/getCreditRate").then((res) => {
            setRate(res.rate);
        });
    }, []);

    const fieldData = [
        { name: "sumCredit", label: "Сумма кредита, BYN", required: true, component: <InputNumber /> },
        { name: "month", label: "Срок кредита, мес", required: true, component: <InputNumber /> },
    ];

    const onFinish = (values: any) => {
        request.post("/creditInfo/calcCredit", values).then((res) => {
            setCreditInfo(Credit.fromJson(res));
        });
    };

    return (
        <div>
            <span>Ставка по кредиту: {rate}%</span>
            <Form name="createFlat" onFinish={onFinish}>
                {fieldData.map(({ name, label, required, component }) => (
                    <Form.Item key={name} label={label} name={name} rules={[{ required }]}>
                        {component}
                    </Form.Item>
                ))}
                <Form.Item wrapperCol={{ offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        Рассчитать сумму кредита
                    </Button>
                </Form.Item>
                {creditInfo ? (
                    <div>
                        <div>Сумма кредита {creditInfo.getSumCredit()} BYN</div>
                        <div>Срок кредита {creditInfo.getMonth()} мес.</div>
                        <div>Ставка по кредиту {creditInfo.getRate()} %</div>
                        <div>Переплата по кредиту {creditInfo.getOverpayment()} BYN</div>
                        <div>Итоговая сумма {creditInfo.getResultSum()} BYN</div>
                    </div>
                ) : null}
            </Form>
        </div>
    );
};

export default CreditForm;
