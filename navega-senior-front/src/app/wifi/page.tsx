import Image from 'next/image';
import Navbar from '../components/Navbar';
import idosoImg from '../assets/idoso.jpg';
import Email from '../email/page';
import Passo1 from '../assets/Wifi/Passo1.png';
import Passo2 from '../assets/Wifi/Passo2.png';
import Passo3 from '../assets/Wifi/Passo3.png';
import Passo4 from '../assets/Wifi/Passo4.png';

const Wifi: React.FC = () => {
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
        Como Conectar a Rede Wifi
      </h1>

      <p className="text-2xl mb-6 text-justify mx-4" style={{ color: '#805e79' }}>
    Passo 1: Acesse as configurações Wi-Fi <br />
    Vá para configurações: No seu dispositivo, encontre e toque no ícone de  Configurações  (geralmente um ícone de engrenagem) <br />
    Encontre a Opção  Wi-Fi : Dentro das configurações, procure por uma opção chamada  Wi-Fi  e clique <br />
    <br />
        <Image
          src={Passo1}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
    Passo 2: Ative o Wi-Fi <br />
    Ative o Wi-Fi: Toque no interruptor ou botão que diz  Wi-Fi  para ligar <br />
    <br />
        <Image
          src={Passo2}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
    Passo 3: Procure por redes Wi-Fi disponíveis <br />
    Aguarde a lista de redes: Aguarde alguns segundos enquanto o dispositivo procura por redes Wi-Fi disponíveis <br />
    Escolha a rede desejada: Olhe a lista de redes e toque na que você deseja se conectar. Essa rede geralmente terá um nome, por exemplo  Casa do João  ou  Rede123  <br />
    <br />
        <Image
          src={Passo3}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
    Passo 4: Insira a senha da rede <br />
    Digite a senha: Se a rede Wi-Fi for protegida, será necessário digitar a senha. Toque no campo de senha e use o teclado na tela para inseri-la <br />
    Clique em  Conectar  ou  Entrar : Após inserir a senha, procure por um botão que diz  Conectar  ou  Entrar  e clique <br />
    <br />
        <Image
          src={Passo4}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        /><br />
    Passo 6: Verifique a conexão <br />
    Aguarde a conexão: Aguarde alguns segundos enquanto o dispositivo se conecta à rede Wi-Fi <br />
    Verifique a conexão bem-sucedida: Se a conexão for bem-sucedida, você verá um ícone de Wi-Fi na parte superior da tela ou em algum lugar visível no dispositivo <br />
    <br />
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

export default Wifi;
