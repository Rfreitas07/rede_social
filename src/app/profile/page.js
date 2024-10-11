import { redirect } from 'next/navigation';


const ProfilePage = () => {
const user = true;
 if (!user){
    redirect("/");
 }

  return (
    <div><h1>Benvindo ao seu perfil!</h1></div>
  )
}

export default ProfilePage;