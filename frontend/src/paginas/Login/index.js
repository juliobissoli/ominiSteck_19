import React, {useState} from 'react';

import api from '../../services/api';


export default function Login({history}){//history e responsavel por fazer a navegalção

  //useState retorna um vetor
  // a varialvel email e sempre atiualizada no onChange
  const [email, setEmail] = useState('') 
  
  function setaEmailChange(evento){
    setEmail(evento.target.value);

  }


    async function validacao(evento){
        evento.preventDefault();
        if(email === ''){
          alert("Email vazio!");
        }
        else {
          alert("vai validar");
          const resposta  = await api.post('/secao' , { email });//Para acessar uma api no meu backend deve esta instalado e exportado o "cros"
          const {_id} = resposta.data;
    
          localStorage.setItem('id_usuario', _id);// Salvar id do usuario na variavel global no navegador
          console.log(_id);
          history.push('/painel');//USA A VARIAVEL HISTOY PARA IR PARA EUTRA ROTA PRE DETERMINADA COM O METODO PUSH
        }
    }
    return (
    <>
    {/* O Codigo esta entre <> ... </> Pois o react n permite q n tenha entidades por volta de comanda html */}
        <p>
            Oferecemos <strong>um exelente serviço </strong> aos nossos parceiros
        </p>

        <form /*onSubmit={handleSubmit}*/>
            <label htmlFor="email"> E-MAIL* </label>
            <input
            type="email" 
            id="email"
            value={email}//O valor do input com o email e sempre atualizado com a variavel global email q foi declarada do useState
            placeholder="Digite seu Email"
            onChange={setaEmailChange} //A função inChange e nativa html/ Ela chama a função setaEmailCheng quado e feito um subnit
            />
        
            <button className="btn" /*type="submit"*/ onClick={validacao}>Entrar</button>
        </form>

        
    </>  
    );
}