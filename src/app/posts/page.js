import Link from 'next/link';


const PostsPage = () => {
    const postsId = [1, 2, 3];
  
    return (
    <div className="flex min-h-screen flex-col items-center row-start-2 justify-between p-24">
        <h1>Pagina de post</h1>
<ul>
{postsId.map((id) => (
    <li key={id}>
<Link href={`/posts/${id}`}>Ver posts {id}</Link>

    </li>
))}

</ul>
<Link href="/">Voltar</Link>
       
    </div>
  )
}

export default PostsPage;