import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./style";

import MenuImage from "../../../../assets/img/menu_branco.png";

const HamburgerMenuBranco: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleScroll = () => {
      navigate('/');
      setTimeout(() => {
          const targetSection = document.getElementById('targetSection');
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' });
          }
      }, 0); // Timeout para garantir que a navegação ocorreu antes da rolagem
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
                    <a href="/events">
                        <li>Eventos</li>
                    </a>
                    <a href="/hackathon">
                        <li>Hackathon</li>
                    </a>
                    <button id="selective-header-btn" onClick={handleScroll}>
                        <li>Processo Seletivo</li>
                    </button>
                </ul>
            )}
        </div>
    </Container>
  );
};

export default HamburgerMenuBranco;
