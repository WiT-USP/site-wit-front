import React,{ useState } from "react";

import { Container } from "./style";

export default function ModalLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleChangeId = (event: any) => {
        setEmail(event.target.value);
    };

    const handleChangeSenha = (event: any) => {
        setSenha(event.target.value);
    };
    return (
        <Container>
            <div className ="modal">
                <form action="#" method="post">
                    <h1>LOGIN</h1>
                    <h2 className="text">E-mail</h2>
                    <input type="text" value={email} onChange={handleChangeId} />
                    <h2 className="text">Senha</h2>
                    <input type="text" value={senha} onChange={handleChangeSenha} />
                    <button className="btn" type="submit">Log In</button>
                </form>
                <p>WOMEN IN TECH - ICMC/USP 2024</p>
            </div>
        </Container>
    )
}