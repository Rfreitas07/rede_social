import Link from "next/link";


const Sobre = () => {
  return (
    <div className="flex min-h-screen flex-col items-center row-start-2 justify-between p-24">
      <h1>Conteúdo de sobre nós</h1>
      <Link href="/" >Voltar</Link>
    </div>
  );
};

export default Sobre;
