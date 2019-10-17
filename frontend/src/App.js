import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import Routes from './rotas';



/*----------------  FORMA DE PASSAGEM DE PARAMETRO 
A extção useState e responsavel por armazenar os estados da aplicação atual.
Logo para passar algum volor como parametro deve-se inseri-lo de useState()
Nessea codigo fazemos isso na linha 20. Onde declaramos um arreuy constante, com uma variavel "email" e uma função setEmail
Em seguida criamos uma função setaRmailChange(evento). Nela usamos o setEmail q declaramos no useState
A setaEmailChange(evento) retorna para a função setEmail o valor do inout q ela foi chamada ("como esta no input email retorna o email")
Para pegar o valor de um input deve-se usar a variavel .targuet.value
*/


function App() {
  
  return (
    <div className="conteiner">
      <img  src={logo} alt="Amerecso" />  
      <div className="content">
       <Routes />
      </div>
   
    </div>
  );
}

export default App;
