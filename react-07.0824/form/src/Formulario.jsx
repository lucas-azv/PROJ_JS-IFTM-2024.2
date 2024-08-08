import React, { useState } from 'react';

function Formulario() {

    const [form, setForm] = useState({
            nome: "",
            email: ""
        });

        function handleChange(e){
            const{name,value,type} = e.target
            console.log(name);
            console.log(value);
            console.log(type);

        }

    return (
        <form action="">
            <label htmlFor="">Nome:</label>
            <input type="text" name='nome' onChange={handleChange}/>
            <p>{form.nome}</p>

            <label htmlFor="">Email:</label>
            <input type="email" name='email' onChange={handleChange}/>
            <p>{form.email}</p>

        </form>
    );
}

export default Formulario;