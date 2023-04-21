import { useEffect } from "react";
import { CityType } from "../model/City";
import { RepairType } from "../model/RepairType";
import style from "./FlatInfoBlock.module.css";
import { Flat } from "../model/Flat";

interface flatParam {
    label: string;
    value: string | number;
    render: boolean;
}

const FlatInfoBlock: React.FC<{ flat: any }> = ({ flat }) => {
    console.log(flat);

    const getBooleanString = (data: boolean) => {
        if (data) {
            return "Да";
        } else {
            return "Нет";
        }
    };

    const checkRender = (param: any): boolean => {
        if (param === undefined || param === null) {
            return false;
        }
        return true;
    };

    const getAddress = () => {
        return (
            flat.flatInfo?.city +
            ", " +
            flat.flatInfo?.street +
            ", " +
            flat.flatInfo?.house +
            ", " +
            flat.flatInfo?.flat
        );
    };

    const flatParams: flatParam[] = [
        {
            label: "Населенный пункт",
            value: getAddress(),
            render: true,
        },
        {
            label: "Стоимость аренды в месяц",
            value: flat.flatInfo?.price,
            render: checkRender(flat.flatInfo.price),
        },
        {
            label: "Площадь",
            value: flat.flatInfo.square,
            render: flat.flatInfo.square,
        },
        {
            label: "Количество комнат",
            value: flat.flatInfo.rooms,
            render: flat.flatInfo.rooms,
        },
        {
            label: "Балкон",
            value: getBooleanString(flat.flatInfo.balcony),
            render: flat.flatInfo.balcony,
        },
        {
            label: "Ремонт",
            value: flat.flatInfo.repair,
            render: flat.flatInfo.repair,
        },
        {
            label: "Этаж",
            value: flat.flatInfo.floor,
            render: flat.flatInfo.floor,
        },
    ];

    const FlatParam = (props: { param: flatParam }) => {
        return (
            <div className={`${style.param} param`}>
                <div className={`${style.paramLabel} paramLabel`}>{props.param.label}</div>
                <div className={`${style.paramValue} paramValue`}>{props.param.value}</div>
            </div>
        );
    };

    return (
        <div className={style.paramsBlock}>
            {flatParams.map((param: flatParam, id: number) => {
                return param.render ? <FlatParam param={param} key={"param" + id + "_" + param.label} /> : null;
            })}
        </div>
    );
};

export default FlatInfoBlock;
