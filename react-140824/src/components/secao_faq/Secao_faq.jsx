import React, { useEffect, useState } from 'react';

function Secao_faq() {

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
		fetch('https://wilton-filho.github.io/PFJS-GitHub/React/projeto/json/faq.json')
    .then(file => file.json)
    .then(info => setFaqs(info.faqs))
	}, []);

    function getPerguntas(){
        return (
            <details open>
                <summary>Pergunta 1</summary>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique voluptate atque provident corrupti laudantium aut iusto repudiandae? Laborum consequatur molestiae eveniet praesentium, similique beatae rem recusandae necessitatibus libero ratione voluptate?</p>
            </details>
        )
    }

    return (
        <section>
            <h2>FAQ</h2>
            {getPerguntas()}
        </section>
    );
}

export default Secao_faq;