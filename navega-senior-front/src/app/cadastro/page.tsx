import Image from 'next/image';
import Navbar from '../components/Navbar';
import idosoImg from '../assets/idoso.jpg';
import Email from '../email/page';
import Pc1 from '../assets/cadastro/Computador/cadastro1.png';
import Pc2 from '../assets/cadastro/Computador/cadastro2.png';
import Pc3 from '../assets/cadastro/Computador/cadastro3.png';
import Pc4 from '../assets/cadastro/Computador/cadastro4.png';
import Pc5 from '../assets/cadastro/Computador/cadastro5.png';
import Pc6 from '../assets/cadastro/Computador/cadastro6.png';
import Pc7 from '../assets/cadastro/Computador/cadastro7.png';
import Cel1 from '../assets/cadastro/Smartphone/phone1.png';
import Cel2 from '../assets/cadastro/Smartphone/phone2.png';
import Cel3 from '../assets/cadastro/Smartphone/phone3.png';
import Cel4 from '../assets/cadastro/Smartphone/phone4.png';

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
        Cadastro com o Computador

      </h1>

      <p className="text-2xl mb-6 text-justify mx-4" style={{ color: '#805e79' }}>
        Passo 1: Acessar o site ou aplicativo <br /> 
        Ligue o computador e abra o Navegador,dando um clique duplo no ícone do navegador, como Google Chrome, Mozilla Firefox ou Edge <br />
        <br />
        <Image src={Pc1}   
           alt="Landscape picture"
           width={500}
           height={300}
           className="rounded-lg"/>
          <br />

        Acesse o site ou abra o aplicativo digitando o endereço do site ou abra o aplicativo onde deseja criar o cadastro <br />
        <br />
        <Image src={Pc2} 
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"/> <br />
        <br />

        Passo 2: Encontrar a opção Cadastro <br />
        Localize a página de cadastro: Procure um botão ou link chamado Cadastrar-se ou Registrar e clique <br />
        <br />
        <Image src={Pc3} 
        alt="Landscape picture"
        width={500}
        height={300}
        className="rounded-lg"/> <br />
        <br />

        Passo 3: Preencher as informações pessoais <br />
        Insira o nome de usuário ou e-mail: Encontre o campo que pede um nome de usuário ou e-mail, preencha-o<br />
        Crie uma senha: Escolha uma senha que seja fácil de lembrar, mas segura. Ela deve ter letras, números e, se possível, caracteres especiais<br />
        Confirme a senha:Digite a mesma senha novamente no campo chamado Confirme a Senha<br />
        Anote sua senha em um pedaço de papel para lembrar, se desejar <br />
        Preencha as outras informações: Alguns sites ou aplicativos podem pedir mais informações, como data de nascimento, preencha se for necessário <br />
        <br />
        <Image src={Pc4} 
        alt="Landscape picture"
        width={500}
        height={300}
        className="rounded-lg"/>  <br />
        <br />

        Passo 4: Aceitar os Termos e Condições <br />
        Leia os Termos de Uso e Política de Privacidade: Muitos sites pedem que você leia e aceite os termos de uso, leia para entender e concordar ou discordar <br />
        Marque a Caixa de Aceitação: Se concordar, procure por uma caixa que diz Eu concordo ou algo parecido. Marque essa caixa <br />
        <br />
        <Image src={Pc5} 
        alt="Landscape picture"
        width={500}
        height={300}
        className="rounded-lg"/>  <br />
        <br />

        Passo 5: Finalizar cadastro <br />
        Encontrar o botão de cadastro ou Registrar: Procure por um botão que diz Cadastrar, Registrar ou similares, e confirme <br />
        <br />
        <Image src={Pc6} 
        alt="Landscape picture"
        width={500}
        height={300}
        className="rounded-lg"/>  <br />
        Verificar e-mail: Algumas plataformas podem enviar um e-mail de verificação. Se receber um e-mail, clique no link de confirmação <br />
        <br />

        Passo 6: Realizar login <br />
        Volte à página inicial: Após criar o cadastro, volte à página inicial do site ou aplicativo <br />
        Procure por uma opção chamada Login ou Entrar <br />
        Insera E-mail/Usuário e senha: Digite o e-mail ou nome de usuário e a senha que você escolheu durante o cadastro <br />
        Clicar em Entrar ou Login: Procure por um botão que diz Entrar ou Login, clique e acesse <br />
        <br />
        <Image src={Pc7} 
        alt="Landscape picture"
        width={500}
        height={300}
        className="rounded-lg"/>  <br />
        <br />
      </p>


      <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: '#6d4664' }}>
        Cadastro com o Smartphone

      </h1>

      <p className="text-2xl mb-6 text-justify mx-4" style={{ color: '#805e79' }}>
        Passo 1: Acesse o site ou aplicativo 
	      Desbloqueie o smartphone <br />
        Abra o navegador e acesse o site digitando o endereço ou  abra o aplicativo <br />

        <br />
        <Image src={Cel1} 
        alt="Landscape picture"
        width={500}
        height={300}
        className="rounded-lg"/>  <br />
        <br />
        <br />
        <Image src={Cel2} 
        alt="Landscape picture"
        width={500}
        height={300}
        className="rounded-lg"/>  <br />
        <br />
        Passo 2: Encontrar a opção Cadastro <br />
        Localize a página de cadastro: Procure um botão ou link chamado Cadastrar-se, Registrar ou Criar Conta e clique <br />
        <br />
        <Image src={Cel3} 
        alt="Landscape picture"
        width={500}
        height={300}
        className="rounded-lg"/>  <br />
        <br />
        Passo 3: Preencher as informações pessoais <br />
        Insera nome de usuário ou e-mail: Encontre o campo que pede um nome de usuário ou e-mail, preencha-o <br />
        Crie uma senha: Escolha uma senha que seja fácil de lembrar, mas segura. Ela deve ter letras, números e, se possível, caracteres especiais <br />
        Confirme a senha:  Digite a mesma senha novamente no campo chamado Confirme a Senha <br />
        Anote sua senha em um pedaço de papel para lembrar, se desejar <br />
        Preencha outras informações:  Alguns sites ou aplicativos podem pedir mais informações, como data de nascimento, preencha se for necessário <br />
        <br />
        <Image src={Cel4} 
        alt="Landscape picture"
        width={500}
        height={300}
        className="rounded-lg"/>  <br />
        <br />
        Passo 4: Aceitar os Termos e Condições <br />
        Ler os Termos de Uso e Política de Privacidade: <br />
        Muitos sites pedem que você leia e aceite os termos de uso, leia para entender e concordar ou discordar <br />
        Marcar a Caixa de Aceitação se houver: <br />
        Se concordar, procure por uma caixa que diz Eu concordo ou algo parecido. Marque essa caixa <br />


        <br />
        Passo 5: Finalizar cadastro <br />
        Encontrar o botão de cadastro ou Registrar: <br />
        Procure por um botão que diz Cadastrar, Registrar ou similares, e confirme <br />
        Verificar e-mail: <br />
        Algumas plataformas podem enviar um e-mail de verificação. Se receber um e-mail, clique no link de confirmação <br />
        <br />

        Passo 6: Realizar login <br />
        Voltar à página inicial: <br />
        Após criar o cadastro, volte à página inicial do site ou aplicativo <br />
        Procure por uma opção chamada Login ou Entrar <br />
        Inserir E-mail/Usuário e senha: <br />
        Digite o e-mail ou nome de usuário e a senha que você escolheu durante o cadastro <br />
        Clicar em Entrar ou Login: <br />
        Procure por um botão que diz Entrar ou Login, clique e acesse <br />
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
