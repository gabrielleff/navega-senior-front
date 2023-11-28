import Image from 'next/image';
import Navbar from '../components/Navbar';
import idosoImg from '../assets/idoso.jpg';
import Exemplo from '../assets/exemplo.png';

const Email: React.FC = () => {
  const cardOptions = [
    { title: 'Início', link: '/' },
    { title: 'Email', link: '/email' },
    { title: 'Telefone', link: '/telefone' },
    { title: 'Cadastro', link: '/cadastro' },
    { title: 'Wi-fi', link: '/wifi' },
    { title: 'Compras', link: '/compras' },
  ];

  return (
    <div className="w-full h-full bg-white">
      <Navbar />

      <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: '#6d4664' }}>
        De Volta Para o Futuro: Conectando Gerações Através da Inclusão Digital
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
        Passo 1: Abrir o E-mail <br />
        Ligar o Computador ou Telefone: Aperte o botão de ligar e espere até que o aparelho esteja pronto. <br />
        Abrir a Internet: Dê dois cliques no Navegador (Internet, Safari ou Google) <br />
        Entrar no E-mail: Digite o endereço do seu e-mail (hotmail, gmail, etc.), como www.gmail.com, e depois coloque seu e-mail e senha nos espaços indicados <br />
        <Image
          src={Exemplo}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
        Passo 2: Ver os E-mails <br />
        Achar a Caixa de Entrada: Assim que entrar, procure pela Caixa de Entrada, mostra todos e-mails recebidos <br />
        <Image
          src={Exemplo}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
        Passo 3: Achar a Lixeira e E-mails Indesejados (Spam) <br />
        Achar a Lixeira: Olhe na tela e encontre um lugar chamado Lixeira, é onde ficam os e-mails deletados <br />
        E-mails Indesejados (Spam): Procure por uma opção que diz Spam ou E-mails Indesejados, são e-mails suspeitos que ficam lá (atenção!), mas também pode conter e-mails com promoções ou importantes. <br />
        <Image
          src={Exemplo}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
        Passo 4: Ler e Responder E-mails: <br />
        Abrir um E-mail: Na Caixa de Entrada, clique no e-mail que quer ler <br />
        Responder um E-mail: Dentro do e-mail, procure por algo que diz Responder, que serve para escrever de volta. Escreva o que quiser e clique para enviar. <br />
        <Image
          src={Exemplo}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
        Passo 5: Escrever um Novo E-mail: <br />
        Achar o Botão para Escrever Novo E-mail: Procure por um botão chamado Escrever ou Criar, funciona para começar um e-mail do zero. <br />
        Preencher as Informações: Na nova janela, coloque o e-mail da pessoa, escreva o assunto e a mensagem <br />
        Enviar o E-mail: Quando terminar de escrever, clique em Enviar, é como colocar uma carta no correio! <br />
        <Image
          src={Exemplo}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
    </p>


      <div className="grid grid-cols-2 gap-4 mx-4">
        {cardOptions.map((option, index) => (
          <div
            key={index}
            className="bg-stone-200 outline outline-1 outline-violet-950 rounded-lg p-4 text-3xl text-center hover:bg-stone-300"
          >
            <a href={option.link} style={{ color: '#805e79' }}>{option.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Email;
