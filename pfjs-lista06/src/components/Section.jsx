import React from "react";
import Title from "./Title";
import ContentBox from "./ContentBox";

function Section() {
    return (
        <div className="content-section">
            <Title mainTitle="Acesso à Informação" subTitle="Veja dados de transparência e governança" />
            <ContentBox />
        </div>
    );
}

export default Section;
