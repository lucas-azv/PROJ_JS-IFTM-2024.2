import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import './styles.css';

function Secao_conversao() {

    const [form, setForm] = useState({
        nome: "",
        email: ""
    });

    function getData(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function validar(e) {
        e.preventDefault();

        if (form.nome === "" || form.email === "") {
            alert("Preencha todos os campos!");
        } else {
            const templateParams = {
                from_name: form.nome,
                from_email: form.email,
            };
            const emailParams = {
                service_key: "service_i3k818q",
                template_key: "template_2a7wymr",
                public_key: "dCQK86SeWWaGRSQAk"
            };

            emailjs.send(
                emailParams.service_key,
                emailParams.template_key,
                templateParams,
                emailParams.public_key
            ).then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (error) => {
                    console.log('FAILED...', error);
                }
            );
        }
    }

    return (
        <section>
            <h2>Preencha o formulário abaixo</h2>
            <form onSubmit={validar} className='formulario'>
                <div className='container-input'>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name='nome' value={form.nome} onChange={getData} className='input-campo'/>
                </div>

                <div className='container-input'>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name='email' value={form.email} onChange={getData} className='input-campo'/>
                </div>
                
                <input type="submit" value="Enviar" className='submit-btn'/>
            </form>
        </section>
    );
}

export default Secao_conversao;
