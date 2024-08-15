import React, { useEffect, useState } from 'react';

function Secao_faq() {

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
		fetch('https://wilton-filho.github.io/PFJS-GitHub/React/projeto/json/faq.json')
    .then(file => file.json())
    .then(info => setFaqs(info.faqs))
	}, []);

    function getPerguntas(){
        if(faqs.length > 0){
            return(
                faqs.map((faq, index) =>
                <details key={index}>
                    <summary>{faq.pergunta}</summary>
                    <p>{faq.resposta}</p>
                </details>
                )
            )
        }
    }
    return (
        <section>
            <h2>FAQ</h2>
            {getPerguntas()}
        </section>
    );
}

export default Secao_faq;