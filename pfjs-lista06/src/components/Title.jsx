import React from "react";

function Title({ mainTitle, subTitle }) {
    return (
        <div className="box-title">
            <h2>{mainTitle}</h2>
            <h3>{subTitle}</h3>
        </div>
    );
}

export default Title;
