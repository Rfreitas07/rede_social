import Button from "@/components/Button";
import { db } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import { deleteTodo } from "@/actions";
export default async function Home() {
  // 3 - Resgatando dados do banco
  const todos = await db.todo.findMany();

  console.log(todos);

  // 8 - componente cliente em server
  // async function deleteTodo(formData) {
  //   "use server";

  //   const id = parseInt(formData.get("id"));

  //   await db.todo.delete({
  //     where: { id },
  //   });

  //   redirect("/");
  // }


  return (
    <>
    <main className="flex min-h-screen flex-col items-center row-start-2 justify-between p-24">
      <h1>Página Principal</h1>
      <Link href="/sobre">Sobre</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/exemplo?parametro=teste">Página com parâmetro</Link>
      <Link href="/products/categorias/roupas">
        Ir para a categoria de roupas
      </Link>
      <Link href="/dashboard">Ir para a Dashboard</Link>
      <Link href="/profile">Ir para meu perfil</Link>
      <Link href="/todos/create">Ir para Todo</Link>
      <h1 className="text-2xl font-bold mb-4">Todos!</h1>
      <div className="space-y-4">
        {todos.map((todo) => (
          <div key={todo.id} className="bg-gray-100 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold">{todo.titulo}</h2>
              <p>{todo.descricao}</p>

              <div className="flex space-x-2 mt-3 p-4">
                <Link
                  href={`/todos/${todo.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  VISUALIZAR
                </Link>

                <Link
                  href={`/todos/${todo.id}/edit`}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </Link>
                {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Excluir
                </button> */}
                <form action={deleteTodo}>
                  <input type="hidden" name="id" value={todo.id} />
                  <Button>Excluir</Button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
    </>
  );
}











  
 