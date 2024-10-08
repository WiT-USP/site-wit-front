import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';

import { postAdminLogin } from "api/login/post";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

export default function ModalLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handleChangeSenha = (event: any) => {
    setSenha(event.target.value);
  };

  const handleSubmission = async (event: React.FormEvent) => {
    event.preventDefault(); // Evita o comportamento padrão de envio de formulário
    try {
      await postAdminLogin({ password: senha, email });

      navigate(`/admin/events`);

      setSubmitted(true);
    } catch (error: any) {
      console.error("Erro ao enviar a solicitação POST:", error);
      const err = error?.response?.data?.error

      if (err) 
        Swal.fire({
          title: err.title,
          text: err.message,
          confirmButtonText: 'OK',
        })
    }
  };

  useEffect(() => {
    if (submitted) {
      // Limpar campos após submissão bem-sucedida
      setSenha("");
      setEmail("");
    }
  }, [submitted]);

  return (
    <Container>
      <div className="main-div">
        <div className="modal">
          <form className="modal-form" onSubmit={handleSubmission}>
            <h1>LOGIN</h1>
            <div id="itens" className="modal">
              <h2 className="modal-text">E-mail</h2>
              <input
                className="modal-input"
                type="text"
                value={email}
                onChange={handleChangeEmail}
                placeholder="Entre com seu e-mail"
              />
              <h2 className="modal-text">Senha</h2>
              <input
                className="modal-input"
                type="password"
                value={senha}
                onChange={handleChangeSenha}
                placeholder="Entre com sua senha"
              />
            </div>
            <button className="modal-btn" type="submit">
              Log In{" "}
            </button>
          </form>
          <p className="modal-p">WOMEN IN TECH - ICMC/USP 2024</p>
        </div>
      </div>
    </Container>
  );
}
