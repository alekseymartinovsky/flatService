import { Input } from "antd";
import { InputProps } from "antd/es/input";
import { Dispatch, SetStateAction } from "react";

const FormInput = (props: {
    text: string;
    type: InputProps["type"];
    value: string | number;
    change: Dispatch<SetStateAction<string>>;
}) => {
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.change(e.target.value);
    };

    return (
        <div>
            <span>{props.text}</span>
            <Input type={props.type} value={props.value} onChange={change} />
        </div>
    );
};

export default FormInput;
