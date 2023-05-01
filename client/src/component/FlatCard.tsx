import React, { useState } from "react";
import { ROUTE_PATH } from "../service/router/AppRouter";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { URL_API, request } from "../service/fetchRequests";
import { DeleteOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, StarOutlined } from "@ant-design/icons";
import { RentFlat } from "../model/RentFlat";
import { SaleFlat } from "../model/SaleFlat";
import { useNavigate } from "react-router";
import style from "./FlatCard.module.css";

const FlatCard: React.FC<{
    flat: RentFlat | SaleFlat;
    edit?: boolean;
    initVisible?: boolean;
    isManagerCard?: boolean;
}> = ({ flat, edit = false, initVisible = true, isManagerCard = false }) => {
    const [visible, setVisible] = useState(initVisible);
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(flat instanceof RentFlat ? ROUTE_PATH.EDIT_RENT_FLAT : ROUTE_PATH.EDIT_SALE_FLAT, {
            state: { ...flat.toJson(), isEdit: true },
        });
    };

    const click = () => {
        navigate(flat instanceof RentFlat ? ROUTE_PATH.VIEW_RENT_FLAT : ROUTE_PATH.VIEW_SALE_FLAT, {
            state: flat.toJson(),
        });
    };

    const handleDelete = () => {
        const path = flat instanceof RentFlat ? "/rentFlat/delete" : "/saleFlat/delete";
        setVisible(false);
        request.delete(path, { id: flat.id }).then((res: any) => {
            console.log(res);
        });
    };

    const handleFavorite = () => {
        const path = flat instanceof RentFlat ? "/rentFlat/addToFavorite" : "saleFlat/addToFavorite";
        request.post(path, flat.toJson()).then((res: any) => {
            setColor("yellow");
        });
    };

    const [color, setColor] = useState("white");

    return visible ? (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={URL_API + "/images/" + flat.images[0]}
                    onClick={click}
                    width={"300px"}
                    height={"200px"}
                />
            }
            actions={
                isManagerCard
                    ? [
                          <EditOutlined key="edit" onClick={handleEdit} />,
                          <DeleteOutlined key="remove" onClick={handleDelete} />,
                      ]
                    : [<StarOutlined key="favorite" onClick={handleFavorite} color={color} />]
            }
            className={style.flatCard}
        >
            <div onClick={click}>
                <span>Цена: {flat.flatInfo.price} руб.</span>
                <Meta
                    title={flat.flatInfo.rooms + " комн. / " + flat.flatInfo.square + " мм^2"}
                    description={flat.flatInfo.getAddress()}
                />
            </div>
        </Card>
    ) : null;
};

export default FlatCard;
