import { findTodoById } from "@/actions";

const TodoEdit = async ({ params }) => {
  const id = Number(params.id);
  const todo = await findTodoById(id);
  return (
    <div>
      <h1>{todo.titulo}</h1>
    </div>
  );
};
export default TodoEdit;
