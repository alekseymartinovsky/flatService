import { Spin } from "antd";
import style from "./Loading.module.css";

const Loading = (props: { load: boolean }) => {
    return (
        <>
            {props.load ? (
                <div className={style.loadingBlock}>
                    <Spin size="large" className={style.spiner} />
                </div>
            ) : null}
        </>
    );
};

export default Loading;
