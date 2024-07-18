import React from 'react';
import ApresentacaoSecao from "./ApresentacaoSecao"
import Boxes from './Boxes';

function Section01() {
    return (
        <>
        <section>
        <ApresentacaoSecao titulo="titulo01" subtitulo="subtitulo01"/>
        <Boxes/>
        </section>
        </>
    );
}

export default Section01;