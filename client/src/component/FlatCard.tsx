import React, { useState } from "react";
import { ROUTE_PATH } from "../service/router/AppRouter";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { URL_API } from "../service/fetchRequests";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import { RentFlat } from "../model/RentFlat";
import { SaleFlat } from "../model/SaleFlat";
import { useNavigate } from "react-router";

const FlatCard: React.FC<{ flat: RentFlat | SaleFlat; edit?: boolean }> = ({ flat, edit = false }) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(flat instanceof RentFlat ? ROUTE_PATH.EDIT_FLAT_INFO : ROUTE_PATH.EDIT_SALE_FLAT, {
            state: { ...flat.flatInfo.toJson(), isEdit: true },
        });
    };

    const click = () => {
        navigate(flat instanceof RentFlat ? ROUTE_PATH.VIEW_RENT_FLAT : ROUTE_PATH.VIEW_SALE_FLAT, {
            state: flat.toJson(),
        });
    };

    return (
        <Card
            style={{ width: 300 }}
            cover={<img alt="example" src={URL_API + "/images/" + flat.images[0]} />}
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" onClick={handleEdit} />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
            onClick={click}
        >
            <span>Цена: {flat.flatInfo.price} руб.</span>
            <Meta
                title={flat.flatInfo.rooms + " комн. / " + flat.flatInfo.square + " мм^2"}
                description={flat.flatInfo.getAddress()}
            />
        </Card>
    );
};

export default FlatCard;
