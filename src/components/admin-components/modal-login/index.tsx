import React,{ useState } from "react";

import { Container } from "./style";



export default function ModalLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleChangeEmail = (event: any) => {
        setEmail(event.target.value);
    };

    const handleChangeSenha = (event: any) => {
        setSenha(event.target.value);
    };

    return (
        <Container>
            <div className="main-div">
                <div className ="modal">
                    <form className="modal-form" action="#" method="post">
                        <h1>LOGIN</h1>
                        <div id="itens" className="modal">
                            <h2 className="modal-text">E-mail</h2>
                            <input className="modal-input" type="text" value={email} onChange={handleChangeEmail} placeholder="Entre com seu e-mail"/>
                            <h2 className="modal-text">Senha</h2>
                            <input className="modal-input" type="text" value={senha} onChange={handleChangeSenha} placeholder="Entre com sua senha"/>
                        </div>
                        <button className="modal-btn" type="submit" >Log In </button>
                    </form>
                    <p className="modal-p">WOMEN IN TECH - ICMC/USP 2024</p>
                </div>
            </div>
        </Container>
    )
}
