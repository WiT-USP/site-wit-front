import React, {useState} from "react";

import { Container } from "./style";

import MenuImage from "../../../../assets/img/menu_branco.png";

const HamburgerMenuBranco: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
        <div className="header-elements">
            <button onClick={toggleMenu}>
                <img className="btn-menu" src={MenuImage}/>
            </button>
            <a href="/"><h1>W<span>i</span>T</h1></a>
        </div>
        <div className="drop-down">
            {isOpen && (
                <ul className="lista-menu">
                    <a href="/about">
                        <li>Sobre</li>
                    </a>
                    <a href="/eventos">
                        <li>Eventos</li>
                    </a>
                    <a href="#participe">
                        <li>Participe</li>
                    </a>
                </ul>
            )}
        </div>
    </Container>
  );
};

export default HamburgerMenuBranco;
