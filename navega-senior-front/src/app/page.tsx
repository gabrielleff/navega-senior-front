import Image from 'next/image';
import Navbar from './components/Navbar';
import idosoImg from './assets/idoso.jpg';
import Email from './email/page';


const Home: React.FC = () => {
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
      Olá! O projeto Conectando Gerações é um serviço de utilidade pública que tem a proposta de facilitar o acesso e entendimento dos idosos às novas tecnologias cada vez mais presentes e importantes em nossas vidas, assim, promovendo a inclusão digital e o aprendizado necessário para algumas das funções tecnológicas básicas.  
      Segundo a Agência Câmara de notícias, uma pesquisa realizada pelo Instituto Brasileiro de Geografia e Estatística (IBGE) aponta que, de 2019 a 2021, a quantidade de idosos acessando a rede mundial de computadores e redes sociais via smartphone cresceu em aproximadamente 13%, indo de 44,8% para 57,5%. Outra pesquisa, do Sesc São Paulo em 2020, indica que mais de 70% dos idosos não haviam utilizado nem um aplicativo e mais de 60% não teriam acesso às redes sociais.
      Dessa maneira, tentando mudar esse precário cenário de  falta de auxílio e déficit tecnológico da terceira idade em um mundo exponencialmente mais digital, o projeto Conectando Gerações visa ensinar, de maneira simples e didática, alguns passos fundamentais para a integração tecnológica.
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

export default Home;
