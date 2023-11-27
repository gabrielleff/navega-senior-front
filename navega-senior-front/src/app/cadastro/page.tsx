import Image from 'next/image';
import Navbar from '../components/Navbar';
import idosoImg from '../assets/idoso.jpg';
import Email from '../email/page';


const Cadastro: React.FC = () => {
  const cardOptions = [
    { title: 'Início', link: '/' },
    { title: 'Email', link: './email' },
    { title: 'Telefone', link: '/telefone' },
    { title: 'Cadastro', link: 'cadastro' },
    { title: 'Wi-fi', link: '/wifi' },
    { title: 'Compras', link: '/compras' },
  ];

  return (
    <div className="w-full h-full bg-white">
      <Navbar />

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
        De Volta Para o Futuro: Conectando Gerações Através da Inclusão Digital
      </h1>

      <p className="text-2xl mb-6 text-justify mx-4" style={{ color: '#805e79' }}>
      Passo 1: Acessar o site ou aplicativo
      Ligar o computador ou abrir o smartphone:
      Ligue o computador ou desbloqueie o smartphone
      Abrir o navegador (se estiver no Computador)
      Dê um clique duplo no ícone do navegador, como Google Chrome, Mozilla Firefox ou Edge
      Acessar o site ou abrir o aplicativo:
      Digite o endereço do site ou abra o aplicativo onde deseja criar o cadastro
      Passo 2: Encontrar a opção Cadastro
      Localizar a página de cadastro:
      Procure um botão ou link chamado  Cadastrar-se  ou  Registrar  e clique
      Passo 3: Preencher as informações pessoais
      Inserir nome de usuário ou e-mail:
      Encontre o campo que pede um nome de usuário ou e-mail, preencha-o
      Criar uma senha:
      Escolha uma senha que seja fácil de lembrar, mas segura. Ela deve ter letras, números e, se possível, caracteres especiais
      Confirmar a senha:
      Digite a mesma senha novamente no campo chamado  Confirme a Senha 
      Anote sua senha em um pedaço de papel para lembrar, se desejar
      Preencher outras informações:
      Alguns sites ou aplicativos podem pedir mais informações, como data de nascimento, preencha se for necessário
      Passo 4: Aceitar os Termos e Condições
      Ler os Termos de Uso e Política de Privacidade:
      Muitos sites pedem que você leia e aceite os termos de uso, leia para entender e concordar ou discordar
      Marcar a Caixa de Aceitação:
      Se concordar, procure por uma caixa que diz  Eu concordo  ou algo parecido. Marque essa caixa
      Passo 5: Finalizar cadastro
      Encontrar o botão de cadastro ou Registrar:
      Procure por um botão que diz  Cadastrar ,  Registrar  ou similares, e confirme
      Verificar e-mail:
      Algumas plataformas podem enviar um e-mail de verificação. Se receber um e-mail, clique no link de confirmação
      Passo 6: Realizar login
      Voltar à página inicial:
      Após criar o cadastro, volte à página inicial do site ou aplicativo
      Procure por uma opção chamada  Login  ou  Entrar 
      Inserir E-mail/Usuário e senha:
      Digite o e-mail ou nome de usuário e a senha que você escolheu durante o cadastro
      Clicar em  Entrar  ou  Login :
      Procure por um botão que diz  Entrar  ou  Login , clique e acessee
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

export default Cadastro;
