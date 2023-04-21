import Form, { Rule } from "antd/es/form";

export interface formItem {
    name: string;
    label: string;
    rules?: Rule[] | undefined;
    element: React.ReactNode;
    value: string | number | boolean | undefined;
}

const FormList: React.FC<{ data: formItem[] }> = ({ data }) => {
    return (
        <div>
            {data.map((el) => {
                return (
                    <Form.Item name={el.name} label={el.label} key={"item_" + el.name} rules={el.rules}>
                        {el.element}
                    </Form.Item>
                );
            })}
        </div>
    );
};

export default FormList;
