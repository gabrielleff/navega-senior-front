import Image from 'next/image';
import Navbar from '../components/Navbar';
import idosoImg from '../assets/idoso.jpg';
import Email from '../email/page';


const Compras: React.FC = () => {
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
      Passo 1: Acessar o site de compras
      No navegador, digitar o endereço do site:
      Na barra de endereços do navegador, digite o endereço do site de compras que deseja visitar (por exemplo, www.exemplo.com) e pressione  Enter 
      Passo 2: Explorar o site e encontrar o produto
      Navegar pelo site:
      Explore as categorias no site para encontrar o tipo de produto desejado. Por exemplo,  Eletrônicos ,  Roupas , ou  Livros 
      Selecionar o produto:
      Clique no produto desejado para ver mais detalhes. Pode ser necessário escolher tamanho, cor, ou outras opções
      Passo 3: Adicionar o item ao Carrinho
      Encontrar o botão  Adicionar ao Carrinho :
      Geralmente, próximo à descrição do produto, haverá um botão que diz  Adicionar ao Carrinho  ou algo parecido, clique nele
      Verificar o carrinho:
      Procure por um ícone de carrinho de compras (geralmente no canto superior direito) e clique para ver o que está no seu carrinho
      Passo 4: Preencher as informações no Carrinho
      Revisar os itens no Carrinho:
      Verifique se os produtos no carrinho estão corretos e se a quantidade está adequada
      Iniciar o processo de checkout:
      Procure por um botão que diz  Checkout  ou  Finalizar Compra , clique para finalizar
      Passo 5: Preencher as informações de entrega e pagamento
      Inserir endereço de entrega:
      Preencha o endereço onde deseja receber os produtos. Procure por campos como  endereço de entrega  ou  endereço de envio 
      Escolher método de pagamento:
      Selecione o método de pagamento desejado (cartão de crédito, boleto, etc.). Preencha os campos necessários com as informações do seu cartão, se aplicável
      Revisar e confirmar:
      Antes de finalizar, revise todas as informações. Confirme que o endereço de entrega e os detalhes de pagamento estão corretos
      Clicar em  Comprar  ou  Finalizar compra :
      Ao término, procure por um botão que diz  Comprar  ou  Finalizar compra , clique para concluir
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

export default Compras;
