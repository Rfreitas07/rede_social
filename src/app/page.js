import Image from "next/image";
import Link from "next/link";
import React from 'react';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center row-start-2 justify-between p-24">
        <h1>Página Principal</h1>
        <Link href="/sobre">Sobre</Link>
      <Link href="/posts">Posts</Link>
      <Link href= "/exemplo?parametro=teste">Página com parâmetro</Link>
      <Link href="/products/categorias/roupas">Ir para a categoria de roupas</Link>
      <Link href="/dashboard">Ir para a Dashboard</Link>
    </main>
  );
}
