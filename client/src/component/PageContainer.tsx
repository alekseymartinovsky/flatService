import React from "react";
import style from "./PageContainer.module.css";

const PageContainer = (props: React.PropsWithChildren) => {
    return (
        <div className={style.page}>
            <div className={style.content}>{props.children}</div>
        </div>
    );
};

export default PageContainer;
