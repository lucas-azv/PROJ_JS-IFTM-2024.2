import React from "react";
import Info from "./Info"; // Importe o componente Info

const InfoList = [
    { id: 1, title: 'PLANO DE DESENVOLVIMENTO INSTITUCIONAL' },
    { id: 2, title: 'PESQUISA PUBLICA PROCESSOS IFTM' },
    { id: 3, title: 'LICITAÇÕES E CONTRATOS' },
    { id: 4, title: 'RECEITAS E DESPESAS' },
    { id: 5, title: 'DADOS ABERTOS' },
    { id: 6, title: 'TRANSPARÊNCIA E PRESTAÇÃO DE CONTAS' },
    { id: 7, title: 'SERVIDORES' },
    { id: 8, title: 'PERGUNTAS FREQUENTES' }
];

function ContentBox() {
    return (
        <div className="content-box">
            {InfoList.map((item) => (
                <div key={item.id} className="info-container">
                    <Info title={item.title} />
                </div>
            ))}
        </div>
    );
}

export default ContentBox;
