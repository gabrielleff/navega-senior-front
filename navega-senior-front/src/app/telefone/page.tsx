import Image from 'next/image';
import Navbar from '../components/Navbar';
import idosoImg from '../assets/idoso.jpg';
import Email from '../email/page';
import Passo1 from '../assets/Telefone/Passo1.png';
import Passo2 from '../assets/Telefone/Passo2.png';
import Passo3 from '../assets/Telefone/Passo3.png';
import Passo4 from '../assets/Telefone/Passo4.png';
import Passo5 from '../assets/Telefone/Passo5.png';


const Telefone: React.FC = () => {
  const cardOptions = [
    { title: 'Início', link: '/' },
    { title: 'Email', link: './email' },
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
        Como Usar o Telefone no seu Smartphone
      </h1>

      <p className="text-2xl mb-6 text-justify mx-4" style={{ color: '#805e79' }}>
      <p className="text-2xl mb-6 text-justify mx-4" style={{ color: '#805e79' }}>
    Passo 1: Criar um novo contato <br />
    Abrir a lista de contatos: Toque/clique no ícone do telefone na tela inicial <br />
    Encontrar a opção Contatos: Procure por Contatos na parte inferior ou superior da tela <br />
    Adicionar novo contato: Toque/clique no botão + ou Adicionar <br />
    Preencher informações: Digite o nome da pessoa no campo Nome e o número no campo Telefone <br />
    Salvar o Contato: Toque/clique em  Salvar  ou  Confirmar para guardar o novo contato <br />
    <br />
        <Image
          src={Passo1}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
    Passo 2: Buscar um contato existente <br />
    Abrir a lista de contatos: Volte à tela inicial e toque/clique no ícone do telefone <br />
    Procurar o contato: Deslize/clique para cima ou para baixo na lista de contatos até encontrar o nome desejado ou preencha o nome no campo de busca (no topo da tela) <br />
    <br />
        <Image
          src={Passo2}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
    Passo 3: Favoritar um contato importante <br />
    Abrir o contato: Encontre o contato que deseja favoritar e toque sobre o nome <br />
    Favoritar o Contato: Procure por uma estrela ou um coração e toque nele, assim favoritando-o <br />
    <br />
        <Image
          src={Passo3}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
    Passo 4: Bloquear um número <br />
    Abrir as configurações de chamada: Toque/clique no ícone do telefone e vá para  Configurações  ou  Ajustes  <br />
    Selecionar  Bloqueio de números : Procure por uma opção que diz  Bloqueio de números  ou algo parecido <br />
    Adicionar número à Lista de bloqueio: Escolha  Adicionar número  e insira o número que deseja bloquear <br />
    <br />
        <Image
          src={Passo4}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
    Passo 5: Realizar uma Ligação <br />
    Abrir o teclado: Toque/clique no ícone do telefone e vá para o teclado <br />
    Digite o número: Digite o número de telefone da pessoa usando o teclado <br />
    Iniciar ligação: Toque/clique no botão verde de  Ligar  para fazer a chamada <br />
    Encerrar a ligação: Quando terminar, toque no botão vermelho de  Desligar  para encerrar a chamada <br />
    <br />
        <Image
          src={Passo5}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
</p>

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

export default Telefone;
