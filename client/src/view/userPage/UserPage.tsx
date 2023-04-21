import { useState } from "react";
import { Menu, MenuProps } from "antd";

const items: MenuProps["items"] = [
    {
        label: "Аренда",
        key: "rent",
    },
    {
        label: "Покупка",
        key: "buy",
    },
    {
        label: "Избранное",
        key: "favorite",
    },
];

const UserPage: React.FC = () => {
    const [current, setCurrent] = useState("rent");

    const onClick: MenuProps["onClick"] = (e) => {
        setCurrent(e.key);
    };

    return (
        <div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
        </div>
    );
};

export default UserPage;
