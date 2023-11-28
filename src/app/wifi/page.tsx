import Image from 'next/image';
import Navbar from '../components/Navbar';
import idosoImg from '../assets/idoso.jpg';
import Email from '../email/page';


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
      Passo 1: Acessar as configurações Wi-Fi
      Ir para configurações:
      No seu dispositivo, encontre e toque no ícone de  Configurações  (geralmente um ícone de engrenagem)
      Encontrar a Opção  Wi-Fi :
      Dentro das configurações, procure por uma opção chamada  Wi-Fi  e clique
      Passo 2: Ativar o Wi-Fi
      Ativar o Wi-Fi:
      Toque no interruptor ou botão que diz  Wi-Fi  para ligar
      Passo 3: Procurar redes Wi-Fi disponíveis
      Aguardar a lista de redes:
      Aguarde alguns segundos enquanto o dispositivo procura por redes Wi-Fi disponíveis
      Escolher a rede desejada:
      Olhe a lista de redes e toque na que você deseja se conectar. Essa rede geralmente terá um nome, por exemplo  Casa do João  ou  Rede123 
      Passo 4: Inserir a senha da rede
      Digitar a senha:
      Se a rede Wi-Fi for protegida, será necessário digitar a senha, toque no campo de senha e use o teclado na tela para inseri-la
      Clicar em  Conectar  ou  Entrar :
      Após inserir a senha, procure por um botão que diz  Conectar  ou  Entrar  e clique
      Passo 6: Verificar conexão
      Aguardar conexão:
      Aguarde alguns segundos enquanto o dispositivo se conecta à rede Wi-Fi
      Verificar a conexão bem-sucedida:
      Se a conexão for bem-sucedida, você verá um ícone de Wi-Fi na parte superior
      da tela ou em algum lugar visível no dispositivo
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
