import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Navbar/Footer';
import idosoImg from '../assets/idoso.jpg';
import Email from '../email/page';
import Passo1 from '../assets/Compra/Passo1.png';
import Passo2 from '../assets/Compra/Passo2.png';
import Passo3 from '../assets/Compra/Passo3.png';
import Passo4 from '../assets/Compra/Passo4.png';
import Passo5 from '../assets/Compra/Passo5.png';
import { DEV_CLIENT_PAGES_MANIFEST } from 'next/dist/shared/lib/constants';

const Compras: React.FC = () => {

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
        Como Fazer compras On-line
      </h1>

      <p className="text-2xl mb-6 text-justify mx-4" style={{ color: '#805e79' }}>
        
        <div className="card">
            Passo 1: Acessar o site de compras <br />
            No navegador, digite o endereço do site: Na barra de endereços do navegador, digite o endereço do site de compras que deseja visitar (por exemplo, www.exemplo.com) e pressione  Enter . <br />
            <br />
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
            Passo 2: Explorar o site e encontrar o produto <br />
            Navegue pelo site: Explore as categorias no site para encontrar o tipo de produto desejado. Por exemplo,  Eletrônicos ,  Roupas , ou  Livros <br />
            Selecione o produto: Clique no produto desejado para ver mais detalhes. Pode ser necessário escolher tamanho, cor, ou outras opções <br />
            <br />
            <Image
              src={Passo2}
              alt="Landscape picture"
              width={500}
              height={300}
              className="rounded-lg"
            /><br />
        </div>
        <br />
        <div className="card">
            Passo 3: Adicionar o item ao Carrinho <br />
            Encontre o botão  Adicionar ao Carrinho : Geralmente, próximo à descrição do produto, haverá um botão que diz  Adicionar ao Carrinho  ou algo parecido, clique nele <br />
            Verifique o carrinho: Procure por um ícone de carrinho de compras (geralmente no canto superior direito) e clique para ver o que está no seu carrinho <br />
            <br />
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
            Passo 4: Preencher as informações no Carrinho <br />
            Revise os itens no Carrinho: Verifique se os produtos no carrinho estão corretos e se a quantidade está adequada <br />
            Inicie o processo de checkout: Procure por um botão que diz  Checkout  ou  Finalizar Compra , clique para finalizar <br />
            <br />
            <Image
              src={Passo4}
              alt="Landscape picture"
              width={500}
              height={300}
              className="rounded-lg"
            /><br />
        </div>
        <br />
        <div className="card">
            Passo 5: Preencher as informações de entrega e pagamento <br />
            Insira endereço de entrega: Preencha o endereço onde deseja receber os produtos. Procure por campos como  endereço de entrega  ou  endereço de envio  <br />
            Escolha método de pagamento: Selecione o método de pagamento desejado (cartão de crédito, boleto, etc.). Preencha os campos necessários com as informações do seu cartão, se aplicável <br />
            Revise e confirme: Antes de finalizar, revise todas as informações. Confirme que o endereço de entrega e os detalhes de pagamento estão corretos <br />
            Clique em  Comprar  ou  Finalizar compra : Ao término, procure por um botão que diz  Comprar  ou  Finalizar compra , clique para concluir <br />
            <br />
            <Image
              src={Passo5}
              alt="Landscape picture"
              width={500}
              height={300}
              className="rounded-lg"
            /><br />
        </div>
        <br />
       
    </p>


      <Footer/>
    </div>
  );
};

export default Compras;
