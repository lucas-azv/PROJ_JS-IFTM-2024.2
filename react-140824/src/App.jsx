import React from 'react';
import Secao_conversao from './components/secao_conversao/Secao_conversao';
import Secao_faq from './components/secao_faq/Secao_faq';
import Whatsapp from './components/whatsapp/Whatsapp';

function App() {
  return (
    <div>
      <Secao_conversao />
      <Secao_faq/>
      <Whatsapp />
    </div>
  );
}

export default App;
