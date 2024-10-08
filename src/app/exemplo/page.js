"use client";

import { useSearchParams } from "next/navigation";

const ExemploPage = () => {
  const searchParams = useSearchParams();
  const valorParams = searchParams.get("parametro");
  const presencaParam = searchParams.has("parametro");
  
  return (
    <div>
      <h1>Exibindo resultados para: {valorParams}</h1>
      {presencaParam ? "Tem parametro" : "Não tem"}
    </div>
  );
};

export default ExemploPage;
