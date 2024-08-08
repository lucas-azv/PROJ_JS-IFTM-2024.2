import React, { useState } from 'react';

function Formulario2() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    return (
        <form action="">
            <label htmlFor="">Nome:</label>
            <input type="text" onChange={e => setNome(e.target.value)}/>

            <label htmlFor="">Email:</label>
            <input type="email" onChange={e => setEmail(e.target.value)}/>

            <p>{nome}</p>
            <p>{email}</p>
        </form>
    );
}

export default Formulario2;