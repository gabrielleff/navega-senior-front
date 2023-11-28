import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Navbar/Footer';
import idosoImg from '../assets/idoso.jpg';
import Email from '../email/page';
import Passo1 from '../assets/Wifi/Passo1.png';
import Passo2 from '../assets/Wifi/Passo2.png';
import Passo3 from '../assets/Wifi/Passo3.png';
import Passo4 from '../assets/Wifi/Passo4.png';

const Wifi: React.FC = () => {

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
        Como Conectar a Rede Wifi
      </h1>

      <p className="text-2xl mb-6 text-justify mx-4" style={{ color: '#805e79' }}>
      <div>
      <div className="card">
        <p>Passo 1: Acesse as configurações Wi-Fi</p>
        <p>Vá para configurações: No seu dispositivo, encontre e toque no ícone de Configurações (geralmente um ícone de engrenagem)</p>
        <p>Encontre a Opção Wi-Fi: Dentro das configurações, procure por uma opção chamada Wi-Fi e clique</p>
        <Image
          src={Passo1}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
      <br />
      <div className="card">
        <p>Passo 2: Ative o Wi-Fi</p>
        <p>Ative o Wi-Fi: Toque no interruptor ou botão que diz Wi-Fi para ligar</p>
        <Image
          src={Passo2}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
      <br />
      <div className="card">
        <p>Passo 3: Procure por redes Wi-Fi disponíveis</p>
        <p>Aguarde a lista de redes: Aguarde alguns segundos enquanto o dispositivo procura por redes Wi-Fi disponíveis</p>
        <p>Escolha a rede desejada: Olhe a lista de redes e toque na que você deseja se conectar. Essa rede geralmente terá um nome, por exemplo, Casa do João ou Rede123</p>
        <Image
          src={Passo3}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
      <br />
      <div className="card">
        <p>Passo 4: Insira a senha da rede</p>
        <p>Digite a senha: Se a rede Wi-Fi for protegida, será necessário digitar a senha. Toque no campo de senha e use o teclado na tela para inseri-la</p>
        <p>Clique em Conectar ou Entrar: Após inserir a senha, procure por um botão que diz Conectar ou Entrar e clique</p>
        <Image
          src={Passo4}
          alt="Landscape picture"
          width={500}
          height={300}
          className="rounded-lg"
        />
      </div>
    </div>
</p>




      <Footer></Footer>
    </div>
  );
};

export default Wifi;
