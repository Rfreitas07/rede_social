import { redirect } from 'next/navigation';
import React from 'react'

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