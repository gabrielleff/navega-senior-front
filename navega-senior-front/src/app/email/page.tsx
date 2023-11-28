import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Navbar/Footer';
import idosoImg from '../assets/idoso.jpg';
import Passo1 from '../assets/E-mail/Passo1.png';
import Passo2 from '../assets/E-mail/Passo2.png';
import Passo3 from '../assets/E-mail/Passo3.png';
import Passo4 from '../assets/E-mail/Passo4.png';
import Passo44 from '../assets/E-mail/Passo44.png';
import Passo5 from '../assets/E-mail/Passo5.png';

const Email: React.FC = () => {


  return (
    <div className="w-full h-full bg-white">
      <Navbar />

      <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: '#6d4664' }}>
        De Volta Para o Futuro: <br />
        Conectando Gerações Através da Inclusão Digital <br />
      </h1>

      <div className="my-8 flex justify-center">
        <Image
          src={idosoImg}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>

      <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: '#6d4664' }}>
        Usando o E-mail: Computador
      </h1>

      <p className="text-2xl mb-6 text-justify mx-4" style={{ color: '#805e79' }}>
        <div className="card">
          Passo 1: Abrir o E-mail <br />
          Ligar o Computador ou Telefone: Aperte o botão de ligar e espere até que o aparelho esteja pronto. <br />
          Abrir a Internet: Dê dois cliques no Navegador (Internet, Safari ou Google) <br />
          Entrar no E-mail: Digite o endereço do seu e-mail (hotmail, gmail, etc.), como www.gmail.com, e depois coloque seu e-mail e senha nos espaços indicados <br />
          <Image
            src={Passo1}
            alt="Landscape picture"
            width={500}
            height={300}
            className="rounded-lg"
          /><br />

        </div>
        <br />
        <div className="card">
          Passo 2: Ver os E-mails <br />
          Achar a Caixa de Entrada: Assim que entrar, procure pela Caixa de Entrada, mostra todos e-mails recebidos <br />
          <Image
            src={Passo2}
            alt="Landscape picture"
            width={500}
            height={300}
            className="rounded-lg"/><br />
        </div>
        <br />
        <div className="card">
        Passo 3: Achar a Lixeira e E-mails Indesejados (Spam) <br />
        Achar a Lixeira: Olhe na tela e encontre um lugar chamado Lixeira, é onde ficam os e-mails deletados <br />
        E-mails Indesejados (Spam): Procure por uma opção que diz Spam ou E-mails Indesejados, são e-mails suspeitos que ficam lá (atenção!), mas também pode conter e-mails com promoções ou importantes. <br />
        <Image
          src={Passo3}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />

        </div>
        <br />
        <div className="card">
            Passo 4: Ler e Responder E-mails: <br />
            Abrir um E-mail: Na Caixa de Entrada, clique no e-mail que quer ler <br />
            Responder um E-mail: Dentro do e-mail, procure por algo que diz Responder, que serve para escrever de volta. Escreva o que quiser e clique para enviar. <br />
            <Image
              src={Passo4}
              alt="Landscape picture"
              width={500}
              height={300}
              className="rounded-lg"
            /><br />
                    <Image
              src={Passo44}
              alt="Landscape picture"
              width={500}
              height={300}
              className="rounded-lg"
            /><br />

        </div>
        
        <br />
        <div className="card">
            Passo 5: Escrever um Novo E-mail: <br />
            Achar o Botão para Escrever Novo E-mail: Procure por um botão chamado Escrever ou Criar, funciona para começar um e-mail do zero. <br />
            Preencher as Informações: Na nova janela, coloque o e-mail da pessoa, escreva o assunto e a mensagem <br />
            Enviar o E-mail: Quando terminar de escrever, clique em Enviar, é como colocar uma carta no correio! <br />
            <Image
              src={Passo5}
              alt="Landscape picture"
              width={500}
              height={300}
              className="rounded-lg"
            /><br />

        </div>
        
    </p>
      <Footer/>
    </div>
  );
};

export default Email;
