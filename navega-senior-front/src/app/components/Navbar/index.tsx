

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-700 p-4 flex justify-between items-center">
      <div className="text-xl text-white font-semibold">
        Inclusão das gerações
      </div>
      <ul className="flex space-x-4 text-lg">
        <li><a href="/" className="text-gray-300 hover:text-gray-500">Início</a></li>
        <li><a href="/email" className="text-gray-300 hover:text-gray-500">Email</a></li>
        <li><a href="/telefone" className="text-gray-300 hover:text-gray-500">Telefone</a></li>
        <li><a href="/cadastro" className="text-gray-300 hover:text-gray-500">Cadastro</a></li>
        <li><a href="/wifi" className="text-gray-300 hover:text-gray-500">Wi-fi</a></li>
        <li><a href="/compras" className="text-gray-300 hover:text-gray-500">Compras</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
