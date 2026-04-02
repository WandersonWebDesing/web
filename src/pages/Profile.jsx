import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function Profile({ userEmail }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('email', userEmail)
        .single();

      if (error) {
        console.error(error);
      } else {
        setUsuario(data);
      }
    };

    fetchUser();
  }, [userEmail]);

  if (!usuario) return <p>Carregando perfil...</p>;

  return (
    <div className="profile-container">
      <h2>Seu Perfil</h2>
      <p><strong>Nome:</strong> {usuario.nome}</p>
      <p><strong>Telefone:</strong> {usuario.telefone}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Tipo:</strong> {usuario.tipo}</p>
    </div>
  );
}