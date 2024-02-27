import React, { useState } from 'react';

import { Container } from "./style";

interface DropdownProps {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); 
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  const closeDropdown = () => {
    setIsOpen(false); 
  };

  return (
    <Container>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption ? selectedOption : 'Clique aqui para escolher uma opção'}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map(option => (
            <li key={option} onClick={() => {handleOptionSelect(option); closeDropdown();}}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default Dropdown;
