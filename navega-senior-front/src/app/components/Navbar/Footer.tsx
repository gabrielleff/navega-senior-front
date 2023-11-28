import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-700 p-4 flex justify-center items-center">
      <ul className="flex space-x-4 text-lg">
        <li><a href="/" className="text-gray-300 hover:text-gray-500 transition">Início</a></li>
        <li><a href="/email" className="text-gray-300 hover:text-gray-500 transition">Email</a></li>
        <li><a href="/telefone" className="text-gray-300 hover:text-gray-500 transition">Telefone</a></li>
        <li><a href="/cadastro" className="text-gray-300 hover:text-gray-500 transition">Cadastro</a></li>
        <li><a href="/wifi" className="text-gray-300 hover:text-gray-500 transition">Wi-fi</a></li>
        <li><a href="/compras" className="text-gray-300 hover:text-gray-500 transition">Compras</a></li>
      </ul>
    </footer>
  );
};

export default Footer;


