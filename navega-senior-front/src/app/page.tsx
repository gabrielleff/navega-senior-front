import Image from 'next/image';
import Navbar from './components/Navbar';
import idosoImg from './assets/idoso.jpg';

const Home: React.FC = () => {
  const cardOptions = [
    { title: 'Início', link: '#' },
    { title: 'Email', link: '#' },
    { title: 'Telefone', link: '#' },
    { title: 'Cadastro', link: '#' },
    { title: 'Wi-fi', link: '#' },
    { title: 'Compras', link: '#' },
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
        Título Aqui
      </h1>

      <p className="text-2xl mb-6 text-justify mx-4" style={{ color: '#805e79' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus non leo fermentum luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus non leo fermentum luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus non leo fermentum luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus non leo fermentum luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus non leo fermentum luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus non leo fermentum luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus non leo fermentum luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus non leo fermentum luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus non leo fermentum luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus non leo fermentum luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus non leo fermentum luctus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus non leo fermentum luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus
        lectus
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
