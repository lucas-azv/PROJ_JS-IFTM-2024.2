import React from 'react';

function ApresentacaoSecao(props) {
    const { titulo, subtitulo } = props; // Receber props como um objeto

    return (
        <div className='centralizar'>
            <h2>{titulo}</h2>
            <p>{subtitulo}</p>
        </div>
    );
}

export default ApresentacaoSecao;
